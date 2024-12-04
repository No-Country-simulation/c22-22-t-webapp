import React, { useEffect, useState } from 'react'
import SubjectFeature from '../components/SubjectFeature/SubjectFeature'
import Accordion from '../components/Accordion/Accordion';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { getOne } from '../services/subjects';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function AnualSyllabus() {
  const [subject, setSubject] = useState([]);
  let { idSubject } = useParams();
  const { user } = useAuth();
  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const data = await getOne(idSubject);
        if (data && data.length > 0) {
          setSubject(data[0]);
        }
        setSubject(data);
      } catch (error) {
        console.error('Error obteniendo info de materia:', error);
      }
    };
    fetchSubject();
  }, [idSubject]);


  // Getting only the prop units from getOne_id.json
  const getSubjectUnitsByStudent = () => {
    const loggedStudentSubjectData = subject.find((data) => data.id_student === user.uid);

    if (loggedStudentSubjectData) {
      const units = loggedStudentSubjectData.units;
      return units;
    }
    return null;
  };


  return (
    <div className="container-lg mt-4">
      <h1 className='fw-bold mb-3' style={{ color: "#032D6C" }}>{subject.length > 0 && subject[0].subject}</h1>
      <div className='mb-5'>
        <SubjectFeature
          feature={"Programa Anual"}
          icon={<i className="bi bi-list-check" />}
          type={"featureTitle"}
        />
      </div>
      <div className='mb-5'>
        <Accordion
          items={getSubjectUnitsByStudent()}
        />
      </div>
    </div>
  )
}

export default AnualSyllabus
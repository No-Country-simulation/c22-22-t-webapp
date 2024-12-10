import React, { useEffect, useState } from 'react'
import SubjectFeature from '../components/SubjectFeature/SubjectFeature'
import Accordion from '../components/Accordion/Accordion';
import BackButton from '../components/BackButton/BackButton';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { getOne } from '../services/subjects';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SubjectYearFilter from '../components/YearFilter/SubjectYearFilter';

function AnualSyllabus() {
  const [subject, setSubject] = useState([]);
  let { year, idSubject } = useParams();
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
    const loggedStudentSubjectData = subject.find((data) => data.id_student === user.uid && data.year === year);

    if (loggedStudentSubjectData) {
      const units = loggedStudentSubjectData.units;
      return units;
    }
    return null;
  };

  // Getting only the prop name from getOne_id.json
  const getSubjectNameByStudent = () => {
    const loggedStudentSubjectData = subject.find((data) => data.id_student === user.uid && data.year === year);

    if (loggedStudentSubjectData) {
      const { subject: subjectName } = loggedStudentSubjectData;

      return subjectName;
    }
    return null;
  };

  // Get available years by student
  const getYearsByStudent = () => {
    const loggedStudentSubjectData = subject.filter((data) => data.id_student === user.uid);
    if (loggedStudentSubjectData) {
      const years = [...new Set(loggedStudentSubjectData.map((subject) => subject.year))];
      const sortedYears = years.sort((a, b) => b - a); // Sort years in descending order

      return sortedYears;
    }
    return null;
  }


  return (
    <div className="container-lg mt-4">
      <div className='d-flex justify-content-between align-items-center mb-4' style={{ width: '100%' }}>
        <BackButton
          path={`../${idSubject}`}
        />
        <SubjectYearFilter
          idSubject={idSubject}
          year={year}
          availableYears={getYearsByStudent()}
          subjectFeaturePath={'programa-anual'}
        />
      </div>
      <h1 className='fw-bold mb-3' style={{ color: "#032D6C" }}>{getSubjectNameByStudent()}</h1>
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
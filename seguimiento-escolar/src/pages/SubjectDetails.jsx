import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getOne } from '../services/subjects';
import SubjectStats from '../components/SubjectStats/SubjectStats';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useAuth } from "../context/authContext";
import SubjectFeature from '../components/SubjectFeature/SubjectFeature';


function SubjectDetails() {
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

  // Subject's features
  const features = [
    {
      id: 1,
      name: "Programa anual",
      icon: <i className="bi bi-list-check" />,
      path: "programa-anual"
    }, {
      id: 2,
      name: "Examenes",
      icon: <i className="bi bi-book" />,
      path: "examenes"
    }, {
      id: 3,
      name: "Rendimiento académico",
      icon: <i className="bi bi-graph-up-arrow" />,
      path: "rendimiento-academico"
    }, {
      id: 4,
      name: "Comunidad",
      icon: <i className="bi bi-globe2" />,
      path: "comunidad"
    }, {
      id: 5,
      name: "Calificaciones",
      icon: <i className="bi bi-123" />,
      path: "calificaciones"
    }
  ]

  // Getting only the prop subject_stats from getOne_id.json
  const getSubjectStatsByStudent = () => {
    const loggedStudentSubjectData = subject.find((data) => data.id_student === user.uid);

    if (loggedStudentSubjectData) {
      const { attendance, deliveries, behavior } = loggedStudentSubjectData.subject_stats;
      return { attendance, deliveries, behavior };
    }
    return null;
  };
  // Getting only the prop teacher from getOne_id.json
  const getSubjectTeacherByStudent = () => {
    const loggedStudentSubjectData = subject.find((data) => data.id_student === user.uid);

    if (loggedStudentSubjectData) {
      const { teacher } = loggedStudentSubjectData;
      return teacher;
    }
    return null;
  };


  return (
    <div className='container-lg mt-4'>
      <h1 className='fw-bold' style={{ color: "#032D6C" }}>{subject.length > 0 && subject[0].subject}</h1>
      <SubjectStats
        stats={getSubjectStatsByStudent()}
        teacher={getSubjectTeacherByStudent()}
      />
      <div className='row'>
        {
          features.map((feature) => (
            <Link key={feature.id} to={feature.path} className='col-12 col-md-6 col-lg-6 mb-4 d-flex justify-content-center align-items-center'>
              <SubjectFeature
                feature={feature.name}
                icon={feature.icon}
                type={"button"}
              />
            </Link>
          ))

        }
      </div>
    </div>
  )
}

export default SubjectDetails
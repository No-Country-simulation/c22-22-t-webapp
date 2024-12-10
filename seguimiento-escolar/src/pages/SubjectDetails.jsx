import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getOne } from '../services/subjects';
import { useAuth } from "../context/authContext";
import SubjectStatsSkeleton from '../components/Skeletons/SubjectStatsSkeleton';
import SubjectFeature from '../components/SubjectFeature/SubjectFeature';
import Skeleton from 'react-loading-skeleton';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function SubjectDetails() {
  const SubjectStats = lazy(() => import('../components/SubjectStats/SubjectStats'));
  const [subject, setSubject] = useState([]);
  const [isLoading, setisLoading] = useState(true);
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
    if (isLoading) {
      setTimeout(() => {
        fetchSubject();
        setisLoading(false);
      }, 1000)
    }
  }, [idSubject, isLoading]);

  // Subject's features
  const features = [
    {
      id: 1,
      name: "Programa anual",
      icon: <i className="bi bi-list-check" />,
      path: "programa-anual"
    }, {
      id: 2,
      name: "Calificaciones",
      icon: <i className="bi bi-123" />,
      path: "calificaciones"
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
    }
  ]

  // Getting only the prop subject_stats from getOne_id.json
  const getSubjectStatsByStudent = () => {
    const loggedStudentSubjectData = subject.find((data) => data.id_student === user.uid && data.year === year);

    if (loggedStudentSubjectData) {
      const { attendance, deliveries, behavior } = loggedStudentSubjectData.subject_stats;
      return { attendance, deliveries, behavior };
    }
    return null;
  };

  // Getting only the prop teacher from getOne_id.json
  const getSubjectTeacherByStudent = () => {
    const loggedStudentSubjectData = subject.find((data) => data.id_student === user.uid && data.year === year);

    if (loggedStudentSubjectData) {
      const { teacher } = loggedStudentSubjectData;

      return teacher;
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


  return (
    <div className='container-lg mt-4'>
      <h1 className='fw-bold' style={{ color: "#032D6C" }}>{getSubjectNameByStudent()}</h1>
      <Suspense fallback={
        <>
          <Skeleton style={{ width: '190px', height: '42px' }} />
          <SubjectStatsSkeleton />
        </>
      }>
        {!isLoading ?
          (
            <SubjectStats
              stats={getSubjectStatsByStudent()}
              teacher={getSubjectTeacherByStudent()}
            />
          )
          :
          (
            <>
              <Skeleton style={{ width: '190px', height: '42px' }} />
              <SubjectStatsSkeleton />
            </>
          )
        }
      </Suspense>

      <div className='row'>
        {
          features.map((feature) => (
            <Link to={feature.path} key={feature.id} className='col-12 col-md-6 col-lg-6 mb-4 d-flex justify-content-center align-items-center'>
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
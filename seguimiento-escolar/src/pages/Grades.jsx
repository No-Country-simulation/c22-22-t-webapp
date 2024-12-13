import React, { useEffect, useState } from 'react'
import SubjectFeature from '../components/SubjectFeature/SubjectFeature';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { getOne } from '../services/subjects';
import GradesTable from '../components/GradesTable/GradesTable';
import GradeStats from '../components/GradeStats/GradeStats';
import BackButton from '../components/BackButton/BackButton';
import SubjectYearFilter from '../components/YearFilter/SubjectYearFilter';

function Grades() {
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


  // Getting only the prop subject from getOne_id.json
  const getSubjectNameByStudent = () => {
    const loggedStudentSubjectData = subject.find((data) => data.id_student === user.uid && data.year === year);

    if (loggedStudentSubjectData) {
      const { subject: subjectName } = loggedStudentSubjectData;

      return subjectName;
    }
    return null;
  };


  // Getting only the prop grade_average from getOne_id.json
  const getSubjectGradeStatsByStudent = () => {
    const loggedStudentSubjectData = subject.find((data) => data.id_student === user.uid && data.year === year);

    if (loggedStudentSubjectData) {
      const gradesStats = loggedStudentSubjectData.grades_average;
      return gradesStats;
    }
    return [];
  };

  // Getting only the prop grades from getOne_id.json
  const getSubjectGradesByStudent = () => {
    const loggedStudentSubjectData = subject.find((data) => data.id_student === user.uid && data.year === year);

    if (loggedStudentSubjectData) {
      const grades = loggedStudentSubjectData.grades;
      const gradesSortedByDate = sortByDate(grades);
      return gradesSortedByDate;
    }
    return [];
  };

  const sortByDate = (array) => {
    return array.sort((a, b) => {
      const dateA = new Date(a.date.split('/').reverse().join('/'));
      const dateB = new Date(b.date.split('/').reverse().join('/'));
      return dateA - dateB;
    });
  }

  /*  // Get available years by student
   const getYearsByStudent = () => {
     const loggedStudentSubjectData = subject.filter((data) => data.id_student === user.uid);
     if (loggedStudentSubjectData) {
       const years = [...new Set(loggedStudentSubjectData.map((subject) => subject.year))];
       const sortedYears = years.sort((a, b) => b - a); // Sort years in descending order
 
       return sortedYears;
     }
     return null;
   } */


  return (
    <div className="container mt-4">
      <div className='mb-3' style={{ width: '100%' }}>
        <BackButton
          path={`../${idSubject}`}
        />
        {/* <SubjectYearFilter
          idSubject={idSubject}
          year={year}
          availableYears={getYearsByStudent()}
          subjectFeaturePath={'calificaciones'}
        /> */}
      </div>
      <h1 className='fw-bold mb-3' style={{ color: "#032D6C" }}>{getSubjectNameByStudent()}</h1>
      <div className='mb-5'>
        <SubjectFeature
          feature={"Calificaciones"}
          icon={<i className="bi bi-123" />}
          type={"featureTitle"}
        />
      </div>
      <div className='mb-5'>
        <GradeStats
          gradesStats={getSubjectGradeStatsByStudent()}
        />
      </div>
      <div className='mb-5'>
        <GradesTable
          tests={getSubjectGradesByStudent()}
        />
      </div>
    </div>
  )
}

export default Grades;



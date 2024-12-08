import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getAll } from '../services/subjects';
import { useAuth } from '../context/authContext'
import YearFilter from '../components/YearFilter/YearFilter';
import SubjectCardSkeleton from '../components/Skeletons/SubjectCardSkeleton';
import LazySubjectCard from '../components/SubjectCard/LazyCardSubject';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"


function Subjects() {
  const { year } = useParams();
  const { user } = useAuth();
  const [subjects, setSubjects] = useState([]);
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  // We use import.meta.glob to load all images  
  const images = import.meta.glob('../assets/subjects/2024/*', { eager: true });
  useEffect(() => {
    navigate('/estudiante/materias/2024');
    if (isLoading) {
      setTimeout(() => {
        setSubjects(getAll());
        setFilteredSubjects(getAll());
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading])

  // Get all info about one user and year
  const getStudentSubjects = () => {
    return subjects.find(item => item.id_student === user.uid && item.year === year) || { subjects: [] };
  };

  return (
    <div className='container mt-4' >
      <div className='d-flex justify-content-between align-items-center mb-5'>
        <h1 className='fw-bold ' style={{ color: "#032D6C" }}>Materias</h1>
        {/* Filter */}
        <YearFilter
          setFilteredSubjects={setFilteredSubjects}
          subjects={subjects}
          userId={user.uid}
        />
      </div>
      <div className='row'>
        {isLoading ? (
          Array(10).fill(0).map((_, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
              <SubjectCardSkeleton quantity={1} />
            </div>
          ))
        ) : (
          getStudentSubjects().subjects.map((subject) => (
            <LazySubjectCard
              key={subject.id_subject}
              subject={subject}
              year={year}
              image={images[`../assets/subjects/2024/${subject.image_subject}`]?.default}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Subjects
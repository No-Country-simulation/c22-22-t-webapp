import React, { useEffect, useState } from 'react'
import SubjectCard from '../components/SubjectCard/SubjectCard'
import { getAll } from '../services/subjects';
import { useAuth } from '../context/authContext'
import YearFilter from '../components/YearFilter/YearFilter';
import Loader from '../components/Loader/Loader';
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"

function Subjects() {
  const { user } = useAuth();
  const [subjects, setSubjects] = useState([]);
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  // We use import.meta.glob to load all images  
  const images = import.meta.glob('../assets/subjects/2024/*', { eager: true });
  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setSubjects(getAll());
        setFilteredSubjects(getAll());
        setIsLoaded(false);
      }, 2000);
    }
  }, [isLoaded])

  return (
    <div className='container mt-4' >
      <div className='d-flex justify-content-between align-items-center mb-5'>
        <h1 className='fw-bold ' style={{ color: "#032D6C" }}>Materias</h1>
        {/* Filter */}
        <YearFilter
          setFilteredSubjects={setFilteredSubjects}
          subjects={subjects}
          userId = {user.uid}
        />
      </div>
      {!isLoaded ?
        // Subjects List
        <div className='row'>
          {
            filteredSubjects
            .filter((item) => item.id_student === user.uid) // Filter by authenticated user
            .flatMap((item) => item.subjects) // Flatten subjects into a single array
            .map((subject) => (
              <SubjectCard
                idSubject={subject.id_subject}
                nameSubject={subject.name_subject}
                imageSubject={images[`../assets/subjects/2024/${subject.image_subject}`]?.default}
                teacher={subject.teacher}
                workload={subject.workload}
                classroom={subject.classroom}
              />
            ))
          }
        </div>
        :
        //Loader
        <Loader />
      }

    </div>
  )
}

export default Subjects
import React, { useEffect, useState } from 'react'
import SubjectCard from '../components/SubjectCard/SubjectCard'
import { getAll } from '../services/subjects';
import YearFilter from '../components/YearFilter/YearFilter';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function Home() {
  const [subjects, setSubjects] = useState([]);
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  // Usamos import.meta.glob para cargar todas las imágenes
  const images = import.meta.glob('../assets/subjects/2024/*', { eager: true });
  useEffect(() => {
    setSubjects(getAll());
    setFilteredSubjects(getAll());
  }, [])



  return (
    <div className='container-xl mt-4' >
      <div className='d-flex justify-content-between align-items-center mb-5'>
        <h1 className='fw-bold' style={{ color: "#032D6C" }}>Materias</h1>
        <YearFilter
          setFilteredSubjects={setFilteredSubjects}
          subjects={subjects}
        />
      </div>
      <div className='row'>
        {
          filteredSubjects.map((subject) => (
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
    </div>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import SubjectCard from '../components/SubjectCard/SubjectCard'
import { getAll } from '../services/subjects';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import AgeFilter from '../components/AgeFilter/AgeFilter';

function Home() {
  const [subjects, setSubjects] = useState([]);
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  useEffect(() => {
    setSubjects(getAll());
    setFilteredSubjects(getAll());
  }, [])

  return (
    <div className='container-xl mt-4' >
      <div className='d-flex justify-content-between align-items-center mb-5'>
        <h1 className='fw-bold' style={{ color: "#032D6C" }}>Materias</h1>
        <AgeFilter
          setFilteredSubjects={setFilteredSubjects}
          subjects = {subjects}
        />
      </div>
      <div className='row'>
        {
          filteredSubjects.map((subject) => (
            <SubjectCard
              idSubject={subject.id_subject}
              nameSubject={subject.name_subject}
              imageSubject={subject.image_subject}
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
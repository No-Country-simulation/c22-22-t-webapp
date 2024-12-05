import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './subjectCardStyles.css'

function SubjectCard({ idSubject, year, nameSubject, imageSubject, teacher, workload, classroom }) {

  return (
    <div key={idSubject} className='col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center'>
      <Link
        to={`/estudiante/materias/${year}/${idSubject}`}
        className="card card__custom"
      >
        <img src={imageSubject} className="card-img-top" alt="img materia" />
        <div className="card-body">
          <h4 className="card-title card-title__custom fw-bold">{nameSubject}</h4>
          <ul className='ul-card'>
            <li>
              <p className='card-text'>
                <span className='fw-bold'>Profesor: </span>{teacher}
              </p>
            </li>
            <li>
              <p className='card-text'>
                <span className='fw-bold'>Carga horaria: </span>{workload}
              </p>
            </li>
            <li>
              <p className='card-text'>
                <span className='fw-bold'>Aula: </span>{classroom}
              </p>
            </li>
          </ul>
        </div>
      </Link>
    </div>

  )
}

export default SubjectCard
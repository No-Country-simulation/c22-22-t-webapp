import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './subjectCardStyles.css'

function SubjectCard({ idSubject, nameSubject, imageSubject, teacher, workload, classroom }) {
  return (
    <div key={idSubject} className='col-12 col-md-6 col-lg-4 mb-4'>
      <div  className="card card__custom">
        <img src={imageSubject} className="card-img-top" alt="subject img" />
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
      </div>
    </div>

  )
}

export default SubjectCard
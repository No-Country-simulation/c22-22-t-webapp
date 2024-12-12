import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './teacherSummaryStyles.css'

function TeacherInfo({ photo, name, subject, nationality, phoneNumber, email, professionalProfile, educations, experiences }) {
  return (
    <>
      {/* Columna izquierda: Perfil */}
      <div className="col-md-8 mb-4">
        <div className="card position-relative">
          {/* Fondo decorativo */}
          <div className="banner card-header bg-light position-relative m-0">
            {/* Foto del profesor */}
            <img
              src={photo}
              alt={`${name}'s profile`}
              className="teacher-photo position-absolute rounded-circle border border-5 border-white"
            />
          </div>

          {/* Contenido de la tarjeta */}
          <div className="card-body mt-5 text-color">
            <div className='name-subject-container'>
              <h4>{name}</h4>
              <p className="text-muted">Profesor(a) de {subject}</p>
            </div>
            <div className='contacts-container'>
              <div className='contact'>
                <div className='i-container'>
                  <i className="bi bi-geo-alt" />
                </div>
                <p className='m-0 p-0 fw-medium'>{nationality}</p>
              </div>
              <div className='contact'>
                <div className='i-container'>
                  <i className="bi bi-telephone" />
                </div>
                <p className='m-0 p-0 fw-medium'>{phoneNumber}</p>
              </div>
              <div className='contact'>
                <div className='i-container'>
                  <i className="bi bi-envelope-at" />
                </div>
                <p className='m-0 p-0 fw-medium'>{email}</p>
              </div>
            </div>
            <hr />
            <h6>
              <strong>Acerca de:</strong>
              <p className='fw-normal text-color'>
                {professionalProfile}
              </p>
            </h6>
            <h6>
              <strong>Educación:</strong>
            </h6>
            <ul className='text-width'>
              {
                educations?.map((education) => (
                  <li>
                    <div className='d-flex flex-column'>
                      <p className='fw-medium text-color m-0 p-0'>{education.academic_title}, {education.academic_place}</p>
                      <p className='fw-normal text-secondary m-0 p-0'>{education.start_date} - {education.end_date}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
            <h6>
              <strong>Experiencia:</strong>
            </h6>
            <p className='text-color'>
              {experiences?.map((experience, index) =>
              (
                <span key={index}>
                  {experiences?.length - 1 == index ? `${experience}.` : `${experience}, `}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherInfo
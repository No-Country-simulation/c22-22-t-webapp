import React from 'react'
import './scheduleStyles.css'

function Schedule({ subject, classroom, days, color, startTime, endTime }) {
  return (
    <div className="schedule-card-container__custom d-flex shadow mb-3">
      {/* Barra de color */}
      <div className='color-bar' style={{ backgroundColor: color }}></div>

      {/* Contenido de la tarjeta */}
      <div className="card schedule-card__custom flex-grow-1">
        <div className="card-body">
          <h5 className="card-title fw-bold mb-1">{subject}</h5>
          <p className="text-muted mb-2">Aula {classroom}</p>
          <div className="days-container d-flex align-items-center mb-1">
            <i className="bi bi-calendar3 me-2" />
            <span>{days}</span>
          </div>
          <div className="time-container d-flex align-items-center">
            <i className="bi bi-clock me-2" />
            <span>{startTime} - {endTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
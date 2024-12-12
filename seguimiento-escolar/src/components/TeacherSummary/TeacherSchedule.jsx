import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './teacherSummaryStyles.css'
import Schedule from '../Schedule/Schedule';
function TeacherSchedule({ schedules, colors }) {
  const [visibleCount, setVisibleCount] = useState(3); 


  // Incrementa la cantidad visible
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); 
  };

  return (
    <>
      {/* Columna derecha: Horarios */}
      <div className="col-md-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className='schedule-title d-flex flex-column justify-content-center align-items-center'>
              <i className="bi bi-calendar-week" />
            </div>
            
            {/* Mostrar solo los horarios visibles */}
            {schedules.slice(0, visibleCount).map((schedule, index) => (
              <Schedule
                key={index}
                subject={schedule.subject_name}
                classroom={schedule.classroom}
                startTime={schedule.start_time}
                endTime={schedule.end_time}
                days={schedule.days}
                color={colors[index % colors.length]} // Alterna entre los colores
              />
            ))}

            {/* Botón para cargar más horarios */}
            {visibleCount < schedules.length && ( // Mostrar botón solo si hay más horarios
              <button
                className="btn btn-secondary btn-schedule_custom w-100"
                onClick={handleShowMore}
              >
                Ver más
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherSchedule
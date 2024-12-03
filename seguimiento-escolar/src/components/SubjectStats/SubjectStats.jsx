import React from 'react'
import "./subjectStatsStyles.css";
function SubjectStats() {
  return (
    <div className="student-stats-container mb-5">
      {/* Attendance */}
      <div className="stat-container">
        <div>
          <h3>79/100</h3>
          <p>Clases</p>
          <div>
            <i className={'icon green up bi bi-arrow-up-circle'} />
            <p>Muy bien!</p>
          </div>
        </div>
        <i className="bi bi-backpack special" />
      </div>

      {/* Delivers */}
      <div className="stat-container">
        <div>
          <h3>9/10</h3>
          <p>Entregas</p>
          <div>
            <i className={'icon green up bi bi-arrow-up-circle'} />
            <p>'Muy bien!'</p>
          </div>
        </div>
        <i class="bi bi-easel2 special"></i>
      </div>

      {/* Total average */}
      <div className="stat-container">
        <div>
          <h3>7/10</h3>
          <p>Comportamiento</p>
          <div>
            <i className={'icon orange down bi bi-arrow-down-left-circle'} />
            <p>Mejorar</p>
          </div>
        </div>
        <i className="bi bi-award special" />
      </div>

      {/* Professor */}
      <div className="stat-container">
        <div>
          <h3>Maria Laura López</h3>
          <p>Profesor</p>
          <div>
            <i className="icon green up bi bi-arrow-up-circle" />
            <p>Ver</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubjectStats
import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './gradeStatsStyles.css'

function GradeStats({ gradesStats }) {
  const totalAverage = ((gradesStats?.first_quarter + gradesStats?.second_quarter + gradesStats?.third_quarter) / 3).toFixed(2);

  return (
    <div className='table-responsive'>
      <table className="table table-hover table__grade-stats" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>1er trimestre</th>
            <th>2do trimeste</th>
            <th>3er trimestre</th>
            <th>Promedio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{gradesStats?.first_quarter}</td>
            <td>{gradesStats?.second_quarter}</td>
            <td>{gradesStats?.third_quarter}</td>
            <td>{totalAverage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GradeStats
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './yearFilterStyles.css'
function SubjectYearFilter({ idSubject, year, availableYears, subjectFeaturePath }) {
  const [selectedYear, setSelectedYear] = useState(year);
  const navigate = useNavigate();

  const handleYearFilter = (year) => {
    navigate(`/estudiante/materias/${year}/${idSubject}/${subjectFeaturePath}`);
    setSelectedYear(year);
  };

  useEffect(()=> {
    setSelectedYear(year);
  },[year])

  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle dropdown-toggle__custom "
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedYear}
      </button>
      <ul className="dropdown-menu">
        {/* Dynamically generated options */}
        {availableYears?.map((year) => (
          <li key={year}>
            <button
              className="dropdown-item dropdown-item__custom"
              onClick={() => handleYearFilter(year)}
            >
              {year}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubjectYearFilter
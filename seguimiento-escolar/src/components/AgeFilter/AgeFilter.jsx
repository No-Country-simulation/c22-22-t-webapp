import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function AgeFilter({ setFilteredSubjects, subjects }) {
  const [selectedYear, setSelectedYear] = useState("Todos");
  const handleYearFilter = (year) => {
    setSelectedYear(year);
    if (year === "Todos") {
      setFilteredSubjects(subjects);
    } else {
      setFilteredSubjects(subjects.filter(subject => subject.year == year));
    }
  };
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedYear}
      </button>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" onClick={() => handleYearFilter("Todos")}>
            Todos
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => handleYearFilter(2023)}>
            2023
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => handleYearFilter(2024)}>
            2024
          </button>
        </li>
      </ul>
    </div>
  )
}

export default AgeFilter
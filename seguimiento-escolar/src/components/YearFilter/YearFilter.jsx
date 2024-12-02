import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function YearFilter({ setFilteredSubjects, subjects, userId }) {
  const [selectedYear, setSelectedYear] = useState("Todos");
  const [availableYears, setAvailableYears] = useState([]);

  // Extract unique years dynamically for the specific student
  useEffect(() => {
    const studentSubjects = subjects.filter(
      (subject) => subject.id_student === userId
    );
    const years = [...new Set(studentSubjects.map((subject) => subject.year))];
    setAvailableYears(years.sort()); // Sort years in ascending order
  }, [subjects, userId]);

  const handleYearFilter = (year) => {
    setSelectedYear(year);
    const studentSubjects = subjects.filter(
      (subject) => subject.id_student === userId
    );
    if (year === "Todos") {
      setFilteredSubjects(studentSubjects);
    } else {
      setFilteredSubjects(
        studentSubjects.filter((subject) => subject.year == year)
      );
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
        {/* Static option for 'Todos' */}
        <li>
          <button
            className="dropdown-item"
            onClick={() => handleYearFilter("Todos")}
          >
            Todos
          </button>
        </li>

        {/* Dynamically generated options */}
        {availableYears.map((year) => (
          <li key={year}>
            <button
              className="dropdown-item"
              onClick={() => handleYearFilter(year)}
            >
              {year}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YearFilter;
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function YearFilter({ setFilteredSubjects, subjects, userId }) {
  // const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(2024/* currentYear.toString() */);
  const [availableYears, setAvailableYears] = useState([]);

  // Extract unique years dynamically for the specific student
  useEffect(() => {
    const studentSubjects = subjects.filter(
      (subject) => subject.id_student === userId
    );
    const years = [...new Set(studentSubjects.map((subject) => subject.year))];
    setAvailableYears(years.sort()); // Sort years in ascending order

    // Apply default filter for the current year
    setFilteredSubjects(
      studentSubjects.filter((subject) => subject.year == 2024 /* currentYear */)
    );
  }, [subjects, userId, setFilteredSubjects, 2024/* currentYear */]);

  // Apply the filter action to change the year
  const handleYearFilter = (year) => {
    setSelectedYear(year);
    const studentSubjects = subjects.filter(
      (subject) => subject.id_student === userId
    );
    setFilteredSubjects(
      studentSubjects.filter((subject) => subject.year == year)
    );
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
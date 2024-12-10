import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './gradesTableStyles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function GradesTable({ tests }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Cambia este valor según tus necesidades

  // Calcula los índices de los elementos que se mostrarán en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tests.slice(indexOfFirstItem, indexOfLastItem);

  // Controla el cambio de página
  const totalPages = Math.ceil(tests.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className='table-responsive'>
        <table className="table table-hover table__grades" style={{ width: '100%' }}>
          <thead className='thead__custom'>
            <tr>
              <th>#</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>Evaluación</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((test, index) =>
              <tr key={test.id}>
                {/* Ajustar el índice de la fila con indexOfFirstItem */}
                <td className='fw-500'>{indexOfFirstItem + index + 1}</td>
                <td>
                  {test.state === 'Finalizado'
                    ? (
                      <div className='d-flex justify-content-center align-items-center gap-2'>
                        <i className='bi bi-check-circle-fill text-success' />
                        <p className='text-color__finished m-0'>{test.state}</p>
                      </div>
                    )
                    : (
                      <div className='d-flex justify-content-center gap-2'>
                        <i className='bi bi-clock-fill text-secondary' />
                        <p className='text-color__to-do m-0'>{test.state}</p>
                      </div>
                    )
                  }
                </td>
                <td><span className='text-color__date'>{test.date}</span></td>
                <td><span className='text-color__test'>{test.test_name}</span></td>
                <td>
                  {test.test_grade === "-"
                    ? <span>{test.test_grade}</span>
                    : (
                      <span
                        className={`badge ${test.test_grade < 6
                          ? 'bad'
                          : test.test_grade >= 6 && test.test_grade <= 7
                            ? 'more-less'
                            : 'good'
                          }`}
                      >
                        {test.test_grade}
                      </span>
                    )
                  }
                </td>
              </tr>
            )}
          </tbody>
        </table >
      </div>
      {/* Botones de paginación */}
      <nav>
        <ul className="pagination justify-content-end">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" aria-label="Previous page" onClick={() => handlePageChange(currentPage - 1)}>&laquo;</button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" aria-label="Next page" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>&raquo;</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default GradesTable
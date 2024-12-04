import React, { useState } from 'react'
import './accordionStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Accordion({ items }) {
  const [openIndexes, setOpenIndexes] = useState([0]); // 0 para que el primer elemento esté abierto cuando se ingrese a la page


  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      // Si ya está abierto, lo cerramos (lo removemos del array)
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // Si no está abierto, lo agregamos al array
      setOpenIndexes([...openIndexes, index]);
    }
  };


  return (
    <div className="accordion accordion__custom" id="accordionPanelsStayOpenExample">
      {items?.length > 0 &&
        items.map((item, index) => (
          <div className="accordion-item accordion-item__custom" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${openIndexes.includes(index) ? '' : 'collapsed'}`}
                type="button"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndexes.includes(index) ? 'true' : 'false'}
              >
                <span className="fw-bold">
                  Unidad {item.unit_number} &#183; {item.title}
                </span>
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${openIndexes.includes(index) ? 'show' : ''}`}
            >
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Accordion
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modalStyles.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Modal = ({ show, onClose, title, children }) => {
  const modalRef = useRef();

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && show) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);

  return (
    <div
      className={`modal fade ${show ? 'show' : ''}`}
      tabIndex="-1"
      style={{ display: show ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      aria-hidden={!show}
    >
      <div className="modal-dialog modal-dialog-centered" ref={modalRef}>
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title w-100">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body mb-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
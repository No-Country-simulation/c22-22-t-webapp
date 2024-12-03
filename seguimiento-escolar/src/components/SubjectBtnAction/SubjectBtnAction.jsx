import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './subjectBtnActionStyles.css'

function SubjectBtnAction({ action, icon, path }) {

  return (
    <Link to={path} className="subject-action-container" >
      <div className="subject-action-icon-container">
        {icon}
      </div>
      <div className="subject-action-title-container">
        <h5>{action}</h5>
      </div>
    </Link>
  )
}

export default SubjectBtnAction
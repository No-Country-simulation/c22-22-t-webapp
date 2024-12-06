import React, { useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './subjectFeatureStyles.css'

function SubjectFeature({ feature, icon, type }) {
  // If type = button --> It will show hover behaving as a button
  // If type = featureTitle --> It won't show hover behaving as a title

  return (
    <div className={type === "button" ? 'subject-feature-container' : 'subject-feature-container box-shadow__none '} >
      <div className="subject-feature-icon-container">
        {icon}
      </div>
      <div className={type === "button" ? 'subject-feature-title-container' : 'subject-feature-title-container title-center'}>
        <h5>{feature}</h5>
      </div>
    </div>
  )
}

export default SubjectFeature
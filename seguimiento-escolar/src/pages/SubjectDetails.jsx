import React from 'react'
import { useParams } from 'react-router-dom';


function SubjectDetails() {
  let { idSubject } = useParams();
  return (
    <div>{`Materia con id ${idSubject}`}</div>
  )
}

export default SubjectDetails
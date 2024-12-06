import React from 'react'
import "./subjectStatsStyles.css";
function SubjectStats({ stats, teacher }) {
  const { present: present_attendance, total_classes } = stats?.attendance || {};
  const { assignments_submitted, total_assignments } = stats?.deliveries || {};
  const { positive_points, negative_points, total_behavior } = stats?.behavior || {};

  // Calcula el comportamiento resultante del estudiante
  const netBehaviorPoints = total_behavior + (positive_points - negative_points) > 10 ? 10 : total_behavior + (positive_points - negative_points); // Suma y resta de puntos


  // Calcula porcentajes dinámicos para Asistencia, Entregas y Comportamiento
  const attendancePercentage = Math.round((present_attendance / total_classes) * 100);
  const assignmentsPercentage = Math.round((assignments_submitted / total_assignments) * 100);
  const behaviorPercentage = Math.max(0, Math.min(100, Math.round((netBehaviorPoints / total_behavior) * 100)));
  const teacherCommentPercentage = Math.round((attendancePercentage + assignmentsPercentage + behaviorPercentage) / 3);


  console.log(attendancePercentage, assignmentsPercentage, behaviorPercentage, teacherCommentPercentage);


  return (
    <div className="student-stats-container mb-5">
      {/* Attendance */}
      <div className="stat-container">
        <div>
          <h3>{present_attendance}/{total_classes}</h3>
          <p>Clases</p>
          <div>
            <i className={`icon ${attendancePercentage >= 75 ? 'green up bi bi-arrow-up-circle' : 'orange down bi bi-arrow-down-left-circle'}`} />
            <p>{attendancePercentage >= 75 ? 'Muy bien!' : 'A mejorar!'}</p>
          </div>
        </div>
        <i className="bi bi-backpack special" />
      </div>

      {/* Delivers */}
      <div className="stat-container">
        <div>
          <h3>{assignments_submitted}/{total_assignments}</h3>
          <p>Entregas</p>
          <div>
            <i className={`icon ${assignmentsPercentage >= 75 ? 'green up bi bi-arrow-up-circle' : 'orange down bi bi-arrow-down-left-circle'}`} />
            <p>{assignmentsPercentage >= 75 ? 'Muy bien!' : 'A mejorar!'}</p>
          </div>
        </div>
        <i className="bi bi-easel2 special"></i>
      </div>

      {/* Behavior */}
      <div className="stat-container">
        <div>
          <h3>{netBehaviorPoints}/{total_behavior}</h3>
          <p>Comportamiento</p>
          <div>
            <i className={`icon ${behaviorPercentage >= 75 ? 'green up bi bi-arrow-up-circle' : 'orange down bi bi-arrow-down-left-circle'}`} />
            <p>{behaviorPercentage >= 75 ? 'Muy bien!' : 'A mejorar!'}</p>
          </div>
        </div>
        <i className="bi bi-award special" />
      </div>

      {/* Professor */}
      <div className="stat-container">
        <div>
          <h3>{teacher}</h3>
          <p>Profesor</p>
          <div>
            <i className={`icon ${teacherCommentPercentage >= 75 ? 'green up bi bi-arrow-up-circle' : 'orange down bi bi-arrow-down-left-circle'}`} />
            <p>{teacherCommentPercentage >= 75 ? 'Muy bien!' : 'A mejorar!'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubjectStats
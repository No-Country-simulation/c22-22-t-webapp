import React from 'react';
import './DashboardStyles.css';

function StudentStats({ stats }) {
    const {
        classes_attended,
        total_classes,
        assignments_submitted,
        total_assignments,
        average_grade,
        term,
    } = stats;

    // Calcula porcentajes dinámicos
    const attendancePercentage = Math.round((classes_attended / total_classes) * 100);
    const assignmentsPercentage = Math.round((assignments_submitted / total_assignments) * 100);

    return (
        <div className="student-stats-container">
            {/* Asistencia */}
            <div className="stat-container">
                <div>
                    <h3>{`${classes_attended}/${total_classes}`}</h3>
                    <p>Clases</p>
                    <div>
                        <i className={`icon ${attendancePercentage >= 75 ? 'green up' : 'orange down'}`} />
                        <p>{attendancePercentage >= 75 ? 'Muy bien!' : 'Mejorable'}</p>
                    </div>
                </div>
                <i className="books-icon" />
            </div>

            {/* Entregas */}
            <div className="stat-container">
                <div>
                    <h3>{`${assignments_submitted}/${total_assignments}`}</h3>
                    <p>Entregas</p>
                    <div>
                        <i className={`icon ${assignmentsPercentage >= 75 ? 'green up' : 'orange down'}`} />
                        <p>{assignmentsPercentage >= 75 ? 'Muy bien!' : 'Mejorable'}</p>
                    </div>
                </div>
                <i className="backpack-icon" />
            </div>

            {/* Promedio total */}
            <div className="stat-container">
                <div>
                    <h3>{average_grade.toFixed(2)}</h3>
                    <p>Promedio total</p>
                    <div>
                        <i className={`icon ${average_grade >= 7 ? 'green up' : 'orange down'}`} />
                        <p>{average_grade >= 7 ? 'Muy bien!' : 'A mejorar'}</p>
                    </div>
                </div>
                <i className="check-magnifying-glass-icon" />
            </div>

            {/* Libreta de calificaciones */}
            <div className="stat-container">
                <div>
                    <h3>{term}</h3>
                    <p>Libreta de calificaciones</p>
                    <div>
                        <i className="icon green up" />
                        <p>Ver</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentStats;

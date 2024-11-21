import React, { useState } from 'react';
import { Calendar as UIDatePicker } from "react-calendar";
import './DashboardStyles.css';

function Calendar({ assignments }) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const filteredAssignments = assignments.filter((assignment) => {
        const assignmentDate = new Date(assignment.date);
        return (
            assignmentDate.getMonth() === selectedDate.getMonth() &&
            assignmentDate.getFullYear() === selectedDate.getFullYear()
        );
    });

    return (
        <div className="calendar-container">
            <div className="calendar-wrapper">
                <UIDatePicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                />
            </div>
            <div className="assignments-list">
                <h4>Próximas entregas</h4>
                {filteredAssignments.length > 0 ? (
                    <ul>
                        {filteredAssignments.map((assignment) => (
                            <li key={assignment.id} className="assignment-item">
                                <h4>{new Date(assignment.date).toLocaleDateString("es-ES", {
                                    day: "2-digit",
                                    month: "short",
                                })}</h4>
                                <div>
                                    <p>{assignment.subject}</p>
                                    <p>{assignment.type}</p>
                                    <p>{assignment.time}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay entregas para el mes seleccionado.</p>
                )}
            </div>
        </div>
    );
}

export default Calendar;

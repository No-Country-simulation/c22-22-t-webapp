import React from "react";
import './DashboardStyles.css';

const MyClass = () => {
    return (
        <div className="my-class-container my-4">
            <h3>Mis Clases</h3>
            <div className="schedule-table">
                <div className="schedule-row">
                    <div className="schedule-header">Lunes</div>
                    <div className="schedule-header">Martes</div>
                    <div className="schedule-header">Miércoles</div>
                    <div className="schedule-header">Jueves</div>
                    <div className="schedule-header">Viernes</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">Lengua<br />13:20 - 14:40</div>
                    <div className="schedule-cell">Economía<br />13:20 - 14:40</div>
                    <div className="schedule-cell">Geografía<br />13:20 - 14:40</div>
                    <div className="schedule-cell">Lengua<br />13:20 - 14:40</div>
                    <div className="schedule-cell">Atletismo<br />13:20 - 14:40</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">Matemática<br />14:50 - 15:30</div>
                    <div className="schedule-cell">Música<br />14:50 - 15:30</div>
                    <div className="schedule-cell">Geografía<br />14:50 - 15:30</div>
                    <div className="schedule-cell">Matemática<br />14:50 - 15:30</div>
                    <div className="schedule-cell">Físico química<br />14:50 - 15:30</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">Inglés<br />15:30 - 17:00</div>
                    <div className="schedule-cell">Lengua<br />15:30 - 17:00</div>
                    <div className="schedule-cell">Arte<br />15:30 - 17:00</div>
                    <div className="schedule-cell">Economía<br />15:30 - 17:00</div>
                    <div className="schedule-cell">Economía<br />15:30 - 17:00</div>
                </div>
                <div className="schedule-row">
                    <div className="schedule-cell">Historia<br />17:00 - 18:20</div>
                    <div className="schedule-cell">Historia<br />17:00 - 18:20</div>
                    <div className="schedule-cell">Atletismo<br />17:00 - 18:20</div>
                    <div className="schedule-cell">Historia<br />17:00 - 18:20</div>
                    <div className="schedule-cell">Matemática<br />17:00 - 18:20</div>
                </div>
            </div>
        </div>
    );
};

export default MyClass;

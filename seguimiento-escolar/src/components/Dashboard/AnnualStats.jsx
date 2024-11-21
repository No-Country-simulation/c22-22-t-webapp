import React from 'react'
import './DashboardStyles.css';

function AnnualStats({ performance }) {
    const performanceArray = Object.entries(performance).map(([month, percentage]) => ({
        month,
        percentage
    }));

    return (
        <div className="annual-stats-container">
            <h3>Rendimiento anual</h3>
            <ul className="monthly-performance-list">
                {performanceArray.map((monthData, index) => (
                    <li key={index} className="monthly-performance-item">
                        <div className="progress-bar" style={{ height: `${monthData.percentage}%` }}></div>
                        <p>{monthData.month}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AnnualStats;

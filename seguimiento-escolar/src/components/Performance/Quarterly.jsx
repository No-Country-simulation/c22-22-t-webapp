import React from 'react';
import './Performance.css';
import { LineChart } from 'lucide-react';

const Quarterly = ({ data }) => {
    const months = Object.keys(data);
    const values = Object.values(data);
    const maxValue = Math.max(...values);

    return (
        <div className="annual-stats-container">
            <div className="flex items-center gap-2">
                <LineChart className="icon" size={24} />
                <h3>Rendimiento trimestral</h3>
            </div>
            <ul className="monthly-performance-list">
                {months.map((month, index) => (
                    <li key={month} className="monthly-performance-item">
                        <div
                            className="progress-bar"
                            style={{ height: `${(values[index] / maxValue) * 100}%` }}
                        />
                        <p>{month}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quarterly;
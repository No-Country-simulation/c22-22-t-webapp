import React from 'react';
import './Performance.css';

const Theme = ({ themeData }) => {
    const themes = Object.entries(themeData).map(([key, value]) => ({
        unit: key,
        value,
    }));

    return (
        <div className="theme-container">
            <h3>Rendimiento por temas</h3>
            <ul className="u-performance-theme">
                {themes.map(({ unit, value }) => (
                    <li key={unit} className="u-performance-bar">
                        <div
                            className="progress-bar"
                            style={{ height: `${(value / 10) * 100}%` }}
                        />
                        <p>{unit}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Theme;
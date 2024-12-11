import React from 'react';
import './Performance.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';


const Theme = ({ themeData }) => {
    const data = [
        { name: 'U 1', unidad: 8 },
        { name: 'U 2', unidad: 10 },
        { name: 'U 3', unidad: 4 },
        { name: 'U 4', unidad: 7 },
        { name: 'U 5', unidad: 5 },
        { name: 'U 6', unidad: 8 },
    ];

    return (
        <div className="theme-container">
            <h3>Rendimiento por temas</h3>
            <BarChart width={600} height={300} data={data} margin={0} >
                <XAxis dataKey="name" stroke="#3e75c9cb" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#red' }} />
                <Legend width={100} wrapperStyle={{ top: 4, right: 4, padding: '4px', backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '10px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="unidad" fill="#3e75c9cb" barSize={20} />
            </BarChart>
        </div>
    );
};

export default Theme;
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './DashboardStyles.css';

// Registrar elementos y plugins necesarios
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ attendance }) {
    const { present, absent, late } = attendance;

    // Datos del gráfico
    const data = {
        labels: ['Presente', 'Ausente', 'Tarde'],
        datasets: [
            {
                data: [present, absent, late],
                backgroundColor: ['#4caf50', '#f57c00', '#d32f2f'], // Colores: verde, naranja, rojo
                borderWidth: 0,
            },
        ],
    };

    // Opciones del gráfico
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Ocultamos la leyenda predeterminada
            },
            tooltip: {
                enabled: true,
            },
        },
        cutout: '70%', // Gráfico de dona con un gran espacio interno
    };

    // Cálculo del porcentaje de asistencia
    const total = present + absent + late;
    const attendancePercentage = Math.round((present / total) * 100);

    return (
        <div className="pie-chart-container">
            <h3>Asistencia</h3>
            <div className="chart-wrapper">
                <Pie data={data} options={options} />
                <div className="chart-percentage">
                    <h4>{attendancePercentage}%</h4>
                </div>
            </div>
            <ul className="chart-legend">
                <li>
                    <span className="dot green" />
                    Presente
                </li>
                <li>
                    <span className="dot orange" />
                    Ausente
                </li>
                <li>
                    <span className="dot red" />
                    Tarde
                </li>
            </ul>
        </div>
    );
}

export default PieChart;

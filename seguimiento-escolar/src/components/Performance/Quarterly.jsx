import React, { useState, useEffect } from 'react';
import './Performance.css';
import ReactApexChart from 'react-apexcharts';

const Quarterly = () => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: 'monthly-performance',
            height: 350,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 10
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.25,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.3,
                stops: [0, 100]
            }
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            labels: {
                style: {
                    fontSize: '12px',
                    colors: '#9c9c9c'
                }
            }
        },
        yaxis: {
            min: 0,
            max: 10,
            labels: {
                style: {
                    fontSize: '12px',
                    colors: '#9c9c9c'
                }
            }
        },
        tooltip: {
            enabled: true
        }
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: 'Rendimiento',
            data: [0, 4, 6, 5, 4, 6, 4, 3, 6, 8, 5]
        }
    ]);

    return (
        <div className="annual-stats-container">
            <div className="flex items-center gap-2">
                <h3>Rendimiento Trimestral</h3>
            </div>
            <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="line"
                height={350}
            />
        </div>
    );
};

export default Quarterly;

import React from 'react';
import '../components/Performance/Performance.css';
import Theme from '../components/Performance/Theme.jsx';
import Improvements from '../components/Performance/Improvements.jsx';
import Quarterly from '../components/Performance/Quarterly.jsx';
import Folder from '../components/Performance/Folder.jsx';

const performanceData = {
  theme: {
    u1: 9,
    u2: 4,
    u3: 3,
    u4: 5,
    u5: 2,
    u6: 6,
    u7: 7,
    u8: 8
  },
  improvements: {
    title: "Recibido",
    comments_summary: "El alumno demostró progreso en la interpretación histórica y argumentación crítica.",
    general_comments: [
      "Buena organización de ideas",
      "Análisis coherente en entregas",
      "Necesidad de mejorar la ortografía"
    ]
  },
  quarterly: {
    Feb: 5,
    Mar: 6,
    Abr: 7,
    May: 4,
    Jun: 5,
    Jul: 7,
    Ago: 6,
    Sep: 8,
    Oct: 5,
    Nov: 6,
    Dic: 7
  },
  folder: [
    {
      title: "Economía regional",
      class: "I"
    },
    {
      title: "Factores productivos",
      class: "II"
    },
    {
      title: "Análisis de factores políticos, ético, cultural, económico",
      class: "III"
    },
    {
      title: "Operaciones básicas de organización",
      class: "IV"
    },
    {
      title: "Interpretación de datos",
      class: "V"
    }
  ]
};

const AcademicPerformance = () => {
  return (
    <div className="academic-performance-container mx-auto">
      <header>
        <i className="bi bi-graph-up-arrow"></i>
        <p>Rendimiento Académico</p>
      </header>
      <h1>Historia</h1>
      <div className='first-section'>
        <Theme themeData={performanceData.theme} />
        <Improvements data={performanceData.improvements} />
      </div>
      <Quarterly data={performanceData.quarterly} />
      <Folder items={performanceData.folder} />
    </div>
  );
}

export default AcademicPerformance;

import React from "react";
import './AboutUs.css'

const ToolsData = () => {
    return (
        <section className="third-about-section">
            <h2>Con conexión academica, podrás:</h2>
            <ul>
                <li>
                    <i class="bi bi-bullseye"></i>
                    <p>Establecer metas y objetivos claros para el aprendizaje.</p>
                </li>
                <li>
                    <i class="bi bi-people-fill"></i>
                    <p>Fomentar una comunicación efectiva entre familias y docentes.</p>
                </li>
                <li>
                    <i class="bi bi-file-earmark-text-fill"></i>
                    <p>Acceder a reportes detallados que impulsan la toma de decisiones informadas.</p>
                </li>
            </ul>
        </section>
    );
}

export default ToolsData;
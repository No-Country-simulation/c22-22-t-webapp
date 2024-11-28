import React from "react";
import './AboutUs.css'

const AboutData = () => {
    return (
        <section className="second-about-section">
            <article>
                <div className="text-container">
                    <h1>Conexión académica</h1>
                    <p>
                        Fue creado como una herramienta que conecta a estudiantes,
                        padres y docentes para potenciar el aprendizaje y el desarrollo académico.
                        Nuestra plataforma de seguimiento y rendimiento escolar te ofrece
                        una forma sencilla y efectiva de monitorear el progreso educativo,
                        identificar áreas de mejora y celebrar logros.
                    </p>
                </div>
                <div className="images-container">
                    <img src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/30-fun-team-building-games-phpQbtbjV" alt="" />
                    <img src="https://img.freepik.com/foto-gratis/retrato-tres-amigos-graduados-sonrientes-batas-graduacion-campus-universitario-diploma_496169-1363.jpg" alt="" />
                    <img src="https://ibles-content.tinkercad.com/static/tinkercad/marketing/classrooms/hero-classrooms.jpg?width=824&auto=webp&" alt="" />
                </div>
            </article>
        </section>
    );
}

export default AboutData;
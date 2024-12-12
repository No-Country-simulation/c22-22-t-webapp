import React from 'react';
import './Performance.css';

const Improvements = ({ data }) => {
    return (
        <div className="improvements-container">
            <h2>Área de mejoras y fortalezas</h2>
            <div className="status">
                <h2>Título</h2>
                <div>
                    <i class="bi bi-dash-circle-fill"></i>
                    <p>
                        {data.title}
                    </p>
                </div>
            </div>
            <div className="comments-a">
                <h2>Comentarios resumidos</h2>
                <p>{data.comments_summary}</p>
            </div>
            <div className="comments-b">
                <h2>Comentarios generales</h2>
                <ul>
                    {data.general_comments.map((comment, index) => (
                        <li>
                            <i class="bi bi-check-circle"></i>
                            <p key={index}>{comment}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// function Improvements({ improvements }) {
//     return (
//         <div className="improvements-container">
//             <h3>Área de mejoras y fortalezas</h3>
//             <p className="status">{improvements.title}</p>
//             <p>{improvements.comments_summary}</p>
//             <ul>
//                 {improvements.general_comments.map((comment, index) => (
//                     <li key={index}>{comment}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

export default Improvements;

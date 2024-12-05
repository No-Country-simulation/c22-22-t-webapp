import React from 'react';
import './Performance.css';

const Improvements = ({ data }) => {
    return (
        <div className="improvements-container">
            <h3>Área de mejoras y fortalezas</h3>
            <div className="status">
                <h2>Título:</h2>
                <p>
                {/* <i class="bi bi-dash-circle-fill"></i> */}
                    {data.title}
                    </p>
            </div>
            <div className="comments">
                <p>Comentarios resumidos</p>
                <p>{data.comments_summary}</p>
            </div>
            <div>
                <p>Comentarios generales</p>
                <ul>
                    {data.general_comments.map((comment, index) => (
                        <li key={index}>{comment}</li>
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

import React from 'react';
import './Community.css'

function AllAverages() {
    const students = [
        { id: 1, name: 'Mathilda Bell', average: 9, subject: 'Matemática', progress: 90, image: 'https://cdn.openart.ai/published/WZUWU6aBgwzyfaFGBewT/R4YVdH_p_6Uhf_256.webp' },
        { id: 2, name: 'Marion Figueroa', average: 8.5, subject: 'Arte', progress: 85, image: 'https://media.muckrack.com/profile/images/8471734/rosesheinerman.jpeg.256x256_q100_crop-smart.jpg' },
        { id: 3, name: 'Lee Barrett', average: 10, subject: 'Mejor compañero', progress: 100, image: 'https://media.muckrack.com/profile/images/10301670/michael-pincus.jpeg.256x256_q100_crop-smart.jpg' },
        { id: 4, name: 'Joseph Brooks', average: 10, subject: 'Literatura', progress: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkyxwO5ZSC-_fVIwHnlBpUcfJxwKL821W6XQ&s' },
    ];

    return (
        <div className='all-averages-container'>
            <h2 className='title'>Mejores promedios</h2>
            <p>3er trimestre</p>
            <table className='table-container'>
                <thead>
                    <tr>
                        <th>°</th>
                        <th>Nombre</th>
                        <th>Promedio</th>
                        <th>Asignatura</th>
                        <th>%</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td className='d-flex align-items-center'>
                                <div className='student-img-container mx-2'>
                                    <img src={student.image} alt={student.name} />
                                </div>
                                <span>
                                    {student.name}
                                </span>
                            </td>
                            <td>{student.average}</td>
                            <td>{student.subject}</td>
                            <td>
                                <div className='progress-circle'>
                                    <span>{student.progress}%</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllAverages;

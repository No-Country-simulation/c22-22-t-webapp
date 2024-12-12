import React from 'react';
import './Community.css'; // Asegúrate de definir los estilos aquí

function DigitalTools() {
    const tools = [
        { id: 1, name: 'Slay', url: 'slayschool.com', logo: 'https://cdn.prod.website-files.com/651fdc93c87a9d5daab9e0cb/6520a2dad0cc90859390dfc2_SLAY-logo.png' },
        { id: 2, name: 'Consejos Generales para Estudiar', url: '', logo: '' },
        { id: 3, name: 'Goconqr', url: 'goconqr.com/es', logo: 'https://edutools.tec.mx/sites/default/files/styles/tecnologias_thumbnail/public/2023-03/encabezado_0.png.webp?itok=oCgrDcLh' },
        { id: 4, name: 'Quizlet', url: 'quizlet.com/ar', logo: 'https://logowik.com/content/uploads/images/quizlet4701.jpg' },
    ];

    return (
        <div className='digital-tools-container my-4 mx-auto w-auto'>
            <h2 className='tools-title'>Herramientas digitales</h2>
            <div className='tools-grid'>
                {tools.map((tool) => (
                    <div key={tool.id} className='tool-card'>
                        <div className='tool-card-header'>
                            {tool.logo ? (
                                <img src={tool.logo} alt={tool.name} className='tool-logo' />
                            ) : (
                                <div className='tool-placeholder'>{tool.name.charAt(0)}</div>
                            )}
                        </div>
                        <div className='tool-card-body'>
                            <h3 className='tool-name'>{tool.name}</h3>
                            {tool.url && <p className='tool-url'>{tool.url}</p>}
                        </div>
                        <div className='tool-card-footer'>
                            <i className='bi bi-bookmark tool-icon'></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DigitalTools;

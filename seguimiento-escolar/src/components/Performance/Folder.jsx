import React from 'react';
import './Performance.css';
import { Printer, MoreHorizontal, FileText } from 'lucide-react';

const Folder = ({ items }) => {
    return (
        <div className="student-stats-container">
            <h3>Carpeta Digital</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="assignment-item">
                        <div className="left">
                            <FileText className="icon" size={20} />
                            <h4>{item.title}</h4>
                        </div>
                        <div className="right">
                            <p>Clase {item.class}</p>
                            <div className='gap-2'>
                                <a className="icon border-0 rounded p-2 m-1 pointer" href='https://www.caixabankpc.com/documents/444417/444673/Ejemplo.pdf/4b4d16a7-23ed-d861-4835-e2e7555d6abb?t=1644391351393' target='_blank' download >
                                    <Printer size={18} />
                                </a>
                                {/* <button className="icon border-0 rounded p-2">
                                    <MoreHorizontal size={18} />
                                </button> */}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Folder;
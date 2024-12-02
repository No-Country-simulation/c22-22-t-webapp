import React from 'react';
import './UpcomingEventsCard.css';

function UpcomingEventsCard({ name, description, image, date }) {
    return (
        <div className='upcoming-events-card-container'>
            <div className='event-images'>
                <img src={image} alt={name} />
                {/* <img src={`path_to_images/${image2}`} alt={name} /> */}
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p><strong>Fecha:</strong> {date}</p>
        </div>
    );
}

export default UpcomingEventsCard;

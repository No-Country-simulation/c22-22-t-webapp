import React from 'react'
import './Community.css'

function BestAverage() {
    return (
        <div className='best-average-container my-4 mx-auto w-auto'>
            <header className='d-flex m-4 align-items-center'>
                <h3 className='mx-3'>MEJOR PROMEDIO 5TO AÑO</h3>
                <i class="bi bi-calendar-week-fill mx-3"></i>
            </header>
            <h2>Bandera Nacional</h2>
            <div className='image-container'>
                <img src="https://media.volinspire.com/images/4b/db/3d/4bdb3d0d3cd94b67b0f8ac14d56b6844cc135c63_profile.jpg" alt="" />
                <i class="bi bi-trophy-fill"></i>
            </div>
            <p>Sarah Martins</p>
            <div className='positions-container'>
                <div className='position'>
                    <span className='position-rank'>2ND</span>
                    <div className='student-info'>
                        <div className='student-img-container'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiBzdD8LI0GFgvZoum68wNz8KPn49NxHUgQ&s' alt='Nimi Martins' />
                        </div>
                        <span className='student-name'>Nimi Martins</span>
                    </div>
                    <span className='student-score'>9.50</span>
                </div>
                <div className='position'>
                    <span className='position-rank'>3RD</span>
                    <div className='student-info'>
                        <div className='student-img-container'>
                            <img src='https://media.muckrack.com/profile/images/90321/sara-custer.jpeg.256x256_q100_crop-smart.jpg' alt='Yomi Ndu' />
                        </div>
                        <span className='student-name'>Yomi Ndu</span>
                    </div>
                    <span className='student-score'>8.75</span>
                </div>
            </div>
        </div>
    )
}

export default BestAverage
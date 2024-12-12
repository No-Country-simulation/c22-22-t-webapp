import React from 'react'
import BigCalendar from '../components/Community/BigCalendar.jsx'
import AllAverages from '../components/Community/AllAverages.jsx'
import BestAverage from '../components/Community/BestAverage.jsx'
import DigitalTools from '../components/Community/DigitalTools.jsx'

function Community() {
  return (
    <div className='community-section mx-auto'>
      <h1 className='m-4'>Comunidad</h1>
      <BigCalendar />
      <div className='d-flex my-4 row'>
        <AllAverages />
        <BestAverage />
      </div>
      <DigitalTools />
    </div>
  )
}

export default Community
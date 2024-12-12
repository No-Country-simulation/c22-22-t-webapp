import React from 'react'
import './Community.css'
import { Calendar as UIDatePicker } from "react-calendar";

function BestAverage() {

    return (
        <div className='big-calendar-section'>
            <div className="calendar-wrapper">
                <UIDatePicker
                    mode="single"
                    className="rounded-md border"
                />
            </div>
        </div>
    )
}

export default BestAverage
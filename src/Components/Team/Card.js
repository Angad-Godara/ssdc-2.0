import React from 'react'
import './Card.css'
import Member from './Member'

function Card() {
    return (
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <Member />
                </div>
            </div>
            <div class="face face2">
                <img className='outer' src={"https://ssdc-sliet.github.io/assets/img/Students/Bhavesh%20Soni.jpg"} alt='Profile Pic' />
            </div>
        </div>
    )
}

export default Card
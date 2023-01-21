import React, { useState } from 'react'
import './Card.css'
import Member from './Member'
import MemberDetail from './MemberDetail'

function Card() {

    const [open, setopen] = useState(true)

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={(open) ? "card" : "card open"}>
                <div className="front-facing">
                    <Member setopen={setopen} />
                </div>
                <div className="back-facing" onClick={() => setopen(true)}>
                    <MemberDetail className="back-facing" />
                </div>
            </div >
        </div>
    )
}

export default Card
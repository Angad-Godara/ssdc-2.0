import React, { useState } from 'react'
import './Card.css'
import Member from './Member'
import MemberDetail from './MemberDetail'

function Card({ fac, photoURL, aim, name, github, linkedin, email, post, contact, web, passoutYear, headPost }) {

    const [open, setopen] = useState(true)

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={(open) ? "card" : "card open"}>
                <div className="front-facing">
                    <Member setopen={setopen} fac={fac}
                        name={name}
                        github={github}
                        passoutYear={passoutYear}
                        linkedin={linkedin}
                        email={email}
                        photoURL={photoURL}
                        post={post}
                        web={web}
                        contact={contact}
                        headPost={headPost}
                    />
                </div>
                <div className="back-facing" onClick={() => setopen(true)}>
                    <MemberDetail className="back-facing"
                        aim={aim}
                    />
                </div>
            </div >
        </div>
    )
}

export default Card
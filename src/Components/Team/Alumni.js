import React from 'react'
import './Team.css'
import Card from './Card'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'
import { selectAlumni } from '../../Features/alumniSlice'

function Alumni() {
    const alumni = useSelector(selectAlumni)
    return (
        <div className='teamContainer'>
            <div className='team__core'>
                <h2 className='team__title' style={{ color: 'orange' }}>Alumni</h2>
                <p>SSDC alumni are former members of a SSDC club who have since moved on but still maintain a connection to the club and may provide ongoing support or guidance.</p>
                <div className='teamWrapper'>
                    {alumni?.map((obj, i) => {
                        return <Card key={i}
                            fac={true}
                            aim={obj.aim}
                            name={obj.name}
                            web={obj.web}
                            contact={obj.contact}
                            email={obj.email}
                            photoURL={obj.photoURL}
                            post={obj.post}
                        />
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Alumni
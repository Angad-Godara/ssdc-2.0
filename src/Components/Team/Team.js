import React from 'react'
import './Team.css'
import Card from './Card'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'
import { selectTeam } from '../../Features/teamSlice'

function Team() {

    const { mentors, faculties, coreTeam, members } = useSelector(selectTeam)

    return (
        <div className='teamContainer'>
            <div className='team__core'>
                <h2 className='team__title' style={{ color: 'orange' }}>Faculty Advisors</h2>
                <p>A core team is a group of individuals who are responsible for the success of a specific project or organization. These individuals typically have a specific set of skills and experience that make them well-suited for their roles.The core team is responsible for making key decisions and ensuring that the project or organization is on track to meet its goals.</p>
                <div className='teamWrapper'>
                    {faculties?.map((obj, i) => {
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
            <div className='team__core'>
                <h2 className='team__title' style={{ color: 'red' }}>Mentors</h2>
                <p>A core team is a group of individuals who are responsible for the success of a specific project or organization. These individuals typically have a specific set of skills and experience that make them well-suited for their roles.The core team is responsible for making key decisions and ensuring that the project or organization is on track to meet its goals.</p>
                <div className='teamWrapper'>
                    {mentors?.map((obj, i) => {
                        return <Card key={i}
                            fac={true}
                            aim={obj.aim}
                            name={obj.name}
                            web={obj.web}
                            contact={obj.contact}
                            email={obj.email}
                            photoURL={obj.photoURL}
                            post={'mentor'}
                        />
                    })}
                </div>
            </div>
            <div className='team__core'>
                <h2 className='team__title'>Core Team</h2>
                <p>A core team is a group of individuals who are responsible for the success of a specific project or organization. These individuals typically have a specific set of skills and experience that make them well-suited for their roles.The core team is responsible for making key decisions and ensuring that the project or organization is on track to meet its goals.</p>
                <div className='teamWrapper'>
                    {coreTeam?.map((obj, i) => {
                        return <Card key={i}
                            aim={obj.aim}
                            name={obj.name}
                            github={obj.github}
                            linkedin={obj.linkedin}
                            email={obj.email}
                            photoURL={obj.photoURL}
                            post={'core'}
                            fac={false}
                        />
                    })}
                </div>
            </div>
            <div className='team__members'>
                <h2 className='team__title' style={{ color: '#32d234' }}>Members</h2>
                <p>A member refers to an individual who belongs to a specific group, organization, or association. Members may also have certain responsibilities within the organization, such as participating in meetings or events, and may be eligible to hold leadership positions or vote on important decisions.</p>
                <div className='teamWrapper'>
                    {members?.map((obj, i) => {
                        return <Card key={i}
                            aim={obj.aim}
                            name={obj.name}
                            github={obj.github}
                            linkedin={obj.linkedin}
                            email={obj.email}
                            photoURL={obj.photoURL}
                            post={'member'}
                            fac={false}
                        />
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Team
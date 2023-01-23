import React from 'react'
import './Team.css'
import Card from './Card'
import Footer from '../Footer/Footer'

function Team() {
    return (
        <div className='teamContainer'>
            <div className='team__core'>
                <h2 className='team__title' style={{ color: 'orange' }}>Faculty Advisors</h2>
                <p>A core team is a group of individuals who are responsible for the success of a specific project or organization. These individuals typically have a specific set of skills and experience that make them well-suited for their roles.The core team is responsible for making key decisions and ensuring that the project or organization is on track to meet its goals.</p>
                <div className='teamWrapper'>
                    <Card fac={true} />
                    <Card fac={true} />
                </div>
            </div>
            <div className='team__core'>
                <h2 className='team__title' style={{ color: 'red' }}>Mentors</h2>
                <p>A core team is a group of individuals who are responsible for the success of a specific project or organization. These individuals typically have a specific set of skills and experience that make them well-suited for their roles.The core team is responsible for making key decisions and ensuring that the project or organization is on track to meet its goals.</p>
                <div className='teamWrapper'>
                    <Card fac={true} />
                    <Card fac={true} />
                </div>
            </div>
            <div className='team__core'>
                <h2 className='team__title'>Core Team</h2>
                <p>A core team is a group of individuals who are responsible for the success of a specific project or organization. These individuals typically have a specific set of skills and experience that make them well-suited for their roles.The core team is responsible for making key decisions and ensuring that the project or organization is on track to meet its goals.</p>
                <div className='teamWrapper'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className='team__members'>
                <h2 className='team__title' style={{ color: '#32d234' }}>Members</h2>
                <p>A member refers to an individual who belongs to a specific group, organization, or association. Members may also have certain responsibilities within the organization, such as participating in meetings or events, and may be eligible to hold leadership positions or vote on important decisions.</p>
                <div className='teamWrapper'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Team
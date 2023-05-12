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
                <p>Faculty advisors play a crucial role in the success of our club. They provide guidance and support to the club's members, help with event planning and logistics, and offer valuable insights and expertise. With their help, our club creates a more engaging and rewarding experience for its members and make a positive impact on the college community.</p>
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
                <p> Mentors bring real-world experience and expertise to the table, and can offer guidance and advice to help club members develop their skills and reach their goals. With a mentor's help, club members can gain a deeper understanding of the industry, explore new technologies and trends, and prepare themselves for successful careers in their field of interest.</p>
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
                <p>A core team is a group of individuals who are responsible for the success of a specific project or club. These individuals typically have a specific set of skills and experience that make them well-suited for their roles.The core team is responsible for making key decisions and ensuring that the club is on track to meet its goals.</p>
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
                <p>The members are the backbone of the club. Their enthusiasm and passion for technology and coding drive the club's activities, events, and initiatives. By sharing their knowledge, skills, and creativity, club members create a supportive and collaborative community that fosters learning, growth, and innovation. With their dedication and hard work, club members can make a meaningful impact on their college, their community, and their own personal and professional development.</p>
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
import React from 'react'
import './ProjectCard.css'
import { BiBookBookmark } from 'react-icons/bi'
import { AiOutlineStar } from 'react-icons/ai'

function ProjectCard() {
    return (
        <div className='projectcard'>
            <div className='project__wrapper'>
                <div className='project__link'>
                    <BiBookBookmark size={'15px'} /><h4>Amazon Clone</h4>
                </div>
                <div className='project__desc'>Clone of the biggest E-Commerce website</div>
                <div className='stack__and__all'>
                    <div className='techstacks'>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
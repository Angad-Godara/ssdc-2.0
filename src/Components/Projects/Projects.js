import React from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects() {
    return (
        <div className='projects'>
            <div className='projects__container'>
                {/* <div className='projects__wrapper'> */}
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                {/* </div> */}
            </div>
        </div>
    )
}

export default Projects
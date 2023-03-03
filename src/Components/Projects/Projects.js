import React from 'react'
import { useSelector } from 'react-redux'
import { selectProjects } from '../../Features/projectsSlice'
import Footer from '../Footer/Footer'
import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects() {
    const projects = useSelector(selectProjects)

    return (
        <div className='projects'>
            <div className='projects__container'>
                <div>
                    {projects?.map((data, i) => {
                        return <ProjectCard key={i} owner={data.owner} repo={data.repo} />
                    })}
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Projects
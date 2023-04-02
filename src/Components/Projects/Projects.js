import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProjects, setProjectsData } from '../../Features/projectsSlice'
import Footer from '../Footer/Footer'
import ProjectCard from './ProjectCard'
import './Projects.css'
import { HashLoader } from 'react-spinners'

function Projects() {

    const { projects, projectsData } = useSelector(selectProjects)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchrepo = async (owner, repo) => {
            const [repoRes, langRes] = await Promise.all([
                fetch(`https://api.github.com/repos/${owner}/${repo}`).then(res => res.json()),
                fetch(`https://api.github.com/repos/${owner}/${repo}/languages`).then(res => res.json()),
            ]);

            return {
                repo,
                owner,
                desc: repoRes.description,
                languages: Object.keys(langRes),
            };
        }

        const fetchprojects = async () => {
            const projectData = await Promise.all(
                projects?.map((project) => {
                    return fetchrepo(project.owner, project.repo);
                })
            );
            dispatch(setProjectsData(projectData));
        }

        if (projects) {
            setLoading(true);
            fetchprojects();
            setLoading(false);
        }
    }, [projects])

    return (
        <div className='projects'>
            <div className='projects__container'>
                {loading ?
                    <div className='projects__spinner__wrapper'>
                        <HashLoader color="#37474f" />
                    </div>
                    :
                    <div className='projectCard__container'>
                        {projectsData?.map((data, i) => {
                            return <ProjectCard key={i} owner={data.owner} repo={data.repo} desc={data.desc} languages={data.languages} />
                        })}
                    </div>
                }
            </div>
            <Footer />
        </div >
    )
}

export default Projects
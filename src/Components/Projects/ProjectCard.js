import React, { useEffect, useState } from 'react'
import './ProjectCard.css'
import { BiBookBookmark } from 'react-icons/bi'

function ProjectCard({ owner, repo }) {

    const [desc, setdesc] = useState(null)
    const [languages, setlanguages] = useState(null)

    useEffect(() => {
        const fetchrepo = () => {
            fetch(`https://api.github.com/repos/${owner}/${repo}`)
                .then(async res => {
                    const result = await res.json()
                    setdesc(result.description)
                })

            fetch(`https://api.github.com/repos/${owner}/${repo}/languages`)
                .then(async res => {
                    const result = await res.json()
                    setlanguages(Object.keys(result))
                })
        }

        return fetchrepo
    }, [])

    return (
        <div className='projectcard'>
            <div className='project__wrapper'>
                <div className='project__link'>
                    <BiBookBookmark size={'15px'} /><a target={'_blank'} href={`https://github.com/${owner}/${repo}`}>{repo}</a>
                </div>
                <div className='project__desc'>{desc ? desc : 'NA'}</div>
                <div className='stack__and__all'>
                    <div className='techstacks'>
                        {languages?.map(((lang, i) => {
                            return <p key={i}>{lang}</p>
                        }))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
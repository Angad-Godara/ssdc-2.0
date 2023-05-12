import React, { useEffect, useState } from 'react'
import './ProjectCard.css'
import { BiBookBookmark } from 'react-icons/bi'

function ProjectCard({ owner, repo, desc, languages }) {
    return (
        <div className='projectcard'>
            <div className='project__wrapper'>
                <div className='project__link'>
                    <BiBookBookmark size={'15px'} /><a target={'_blank'} href={`https://github.com/${owner}/${repo}`}>{repo}</a>
                </div>
                <div className='project__desc'>{desc ? desc.substr(0, 60) + '...' : 'NA'}</div>
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
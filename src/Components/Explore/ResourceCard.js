import React from 'react'
import './Resource.css'

function ResourceCard({ title, desc, url }) {
    return (
        <div className='rscard__wrapper'>
            <div className='rsheading'>
                {title}
            </div>
            <div className='rssummary'>
                {desc}
            </div>
            <div className='rsbenifits'>
                <p> </p>
            </div>
            <div className='rsstart'>
                <button><a href={url} target='_blank'>Start Exploring</a></button>
            </div>
        </div>
    )
}

export default ResourceCard
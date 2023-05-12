import React, { useState } from 'react'
import { MdOutlineNavigateBefore } from 'react-icons/md';
import './Accordian.css'
import { FaCode } from 'react-icons/fa' // CP
import { FaLaptopCode } from 'react-icons/fa'   //WebD
import { GiGears } from 'react-icons/gi'    //ML
import { MdSecurity } from 'react-icons/md' //Cybersec

function Accordian({ title, ico, img, imgsrc, text, textsrc }) {

    const [open, setopen] = useState(false);

    return (
        <div className='item'>
            <h4 className='acc__title' onClick={() => setopen(!open)}>
                <div>
                    {ico === 'cp' ? <FaCode /> : (ico === 'webd' ? <FaLaptopCode /> : (ico === 'ml' ? <GiGears /> : <MdSecurity />))}
                </div>
                <div>
                    {title}
                </div>
                <span className={open ? 'closedarr' : 'openarr'}>
                    <MdOutlineNavigateBefore />
                </span>
            </h4>
            <div className={open ? 'accordcontent openacc' : 'accordcontent'}>
                {text == 't' ? <p>{textsrc}</p> : <></>}
                {img == 't' ? <img className='text__work__image' src={imgsrc} alt={title} /> : <></>}
            </div>
        </div>
    )
}

export default Accordian
import React from 'react'
import './Navbar.css'
import { AiOutlineStar } from 'react-icons/ai'

function Navbar() {
    return (
        <div className='nav__container'>
            <div className='options__container'>
                <div className='nav__options'>
                    <div className='nav__option'>
                        <img className='nav__logo' src={'https://raw.githubusercontent.com/Angad-Godara/ssdc-web-dev/main/public/ssdcLogo.jpg'} alt='logo' />
                    </div>
                    <div className='nav__option'>
                        <a href="/home" className="option__link">Explore</a>
                    </div>
                    <div className='nav__option'>
                        <a href="/" className="option__link">Team</a>
                    </div>
                    <div className='nav__option'>
                        <a href="/" className="option__link">Projects</a>
                    </div>
                    <div className='nav__option'>
                        <a href="/" className="option__link">Alumni</a>
                    </div>
                </div>
                <div className='nav__member'>
                    <div className='nav__member__option'>
                        <AiOutlineStar size={'16px'} />
                        <span style={{ paddingBottom: '2px' }} className='nav__member__option__link'>Members</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar

// Alumni
// Project
// Team
// Explore
// https://leetcode.com/
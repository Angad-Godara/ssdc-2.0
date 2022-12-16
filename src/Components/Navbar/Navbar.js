import React from 'react'
import './Navbar.css'
import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Navbar() {

    // console.log(window.screen.height);
    const sw = window.screen.width;

    return (
        <div className='nav__container'>
            <div className='options__container'>
                <div className='nav__options'>
                    <div className='nav__option'>
                        <img className='nav__logo' src={'https://raw.githubusercontent.com/Angad-Godara/ssdc-web-dev/main/public/ssdcLogo.jpg'} alt='logo' />
                    </div>
                    <div className='nav__option'>
                        <Link to="/home" className="option__link">Explore</Link>
                    </div>
                    <div className='nav__option'>
                        <Link to="/" className="option__link">Team</Link>
                    </div>
                    <div className='nav__option'>
                        <Link to="/" className="option__link">Projects</Link>
                    </div>
                    <div className='nav__option'>
                        <Link to="/" className="option__link">Alumni</Link>
                    </div>
                </div>
                <div className='nav__member'>
                    <div className='nav__member__option'>
                        <AiOutlineStar size={sw < '400px' ? '16px' : sw > '300px' ? '10px' : '7px'} />
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
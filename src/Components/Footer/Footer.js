import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='footer__body'>
            <div className='footer__wrapper'>
                <div className='footer__links'>
                    <div className='footer__option'>
                        Copyright &copy; {year}
                    </div>
                    <div className='footer__option'>
                        <Link to="/" className="option__link">Explore</Link>
                    </div>
                    <div className='footer__option'>
                        <Link to="/team" className="option__link">Team</Link>
                    </div>
                    <div className='footer__option'>
                        <Link to="/projects" className="option__link">Projects</Link>
                    </div>
                    <div className='footer__option'>
                        <Link to="/alumni" className="option__link">Alumni</Link>
                    </div>
                    <div className='footer__option'>
                        <Link to="/privacy" className="option__link">Privacy Policy</Link>
                    </div>
                </div>
                <div className='footer__country'>
                    <span style={{ fontWeight: '500' }}>SLIET</span>
                    <img alt='SlietLlogo' style={{ height: '1.3rem' }} src='SlietLogo.jpg' />
                </div>
            </div>
        </div>
    )
}

export default Footer
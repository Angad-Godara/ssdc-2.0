import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footer__body'>
            <div className='footer__wrapper'>
                <div className='footer__links'>
                    <div className='footer__option'>
                        Copyright &copy; SSDC
                    </div>
                    <div className='footer__option'>
                        <a href="/" className="option__link">Explore</a>
                    </div>
                    <div className='footer__option'>
                        <a href="/" className="option__link">Team</a>
                    </div>
                    <div className='footer__option'>
                        <a href="/" className="option__link">Projects</a>
                    </div>
                    <div className='footer__option'>
                        <a href="/" className="option__link">Alumni</a>
                    </div>
                    <div className='footer__option'>
                        <a href="/" className="option__link">Privacy Policy</a>
                    </div>
                </div>
                <div className='footer__country'>
                    <span style={{ paddingRight: '5px', fontWeight: '500' }}>SLIET</span>
                    <img style={{ height: '1.3rem' }} src='http://administration.sliet.ac.in/files/2014/08/Black-300x300.jpg' />
                </div>
            </div>
        </div>
    )
}

export default Footer
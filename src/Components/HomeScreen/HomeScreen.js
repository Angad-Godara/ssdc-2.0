import React from 'react'
import './HomeScreen.css'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function HomeScreen() {
    return (
        <div className='HomeScreen'>
            <div className='landing__page'>
                <div className='landing__page__header'>
                    <div className='landing__background'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='landing__background__rvs'></div>
                    <div className='inner'>
                        <div className="landing__nav">
                            <img className='landing__nav__logo' alt="Loading" src="https://raw.githubusercontent.com/Angad-Godara/ssdc-web-dev/main/public/ssdcLogo.jpg" />
                            <div className="landing__nav__list">
                                <Link to="/" className='landing__nav__list__item'>Explore</Link>
                                <Link to="/contests" className='landing__nav__list__item'>Contests</Link>
                                <Link to="/" className='landing__nav__list__item'>Team</Link>
                                <Link to="/login" className='landing__nav__list__item'>SignIn</Link>
                            </div>
                        </div>
                        <div className='container'>
                            <div style={{ flex: '1 1' }}>
                                <img alt="Loading" src="https://raw.githubusercontent.com/Angad-Godara/ssdc-2.0/master/public/tablet.png" className='landing__tablet' />
                            </div>
                            <div className='container__text'>
                                <h1>SSDC Welcome You</h1>
                                <p>Our Club is the only coding club of Sant Longowal Institute of Engineering and Technology. We welcomes you to our website.</p>
                                <Link to='/register' className='container__button'>Create Account {'>'}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeScreen
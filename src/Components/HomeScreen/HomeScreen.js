import React from 'react'
import './HomeScreen.css'
import Footer from '../Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../Features/userSlice'
import { auth } from '../../firebase'

function HomeScreen() {

    const navigate = useNavigate();

    const user = useSelector(selectUser)

    const Logout = (e) => {
        // e.preventDefault()
        if (user) {
            console.log(user)
            auth.signOut();
        } else {
            navigate('/login')
        }
    }

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
                            <img className='landing__nav__logo' alt="Loading" src="https://raw.githubusercontent.com/Angad-Godara/ssdc-2.0/master/public/NewLogoColor.png" />
                            <div className="landing__nav__list">
                                <Link to="/" className='landing__nav__list__item'>Explore</Link>
                                <Link to="/contests" className='landing__nav__list__item'>Contests</Link>
                                <Link to="/" className='landing__nav__list__item'>Team</Link>
                                <Link to={user ? "/" : "/login"} onClick={Logout} className='landing__nav__list__item'>{user ? 'LogOut' : 'SignIn'}</Link>
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
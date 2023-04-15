import React from 'react'
import './HomeScreen.css'
import Footer from '../Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../Features/userSlice'
import { auth } from '../../firebase'
import Hometext from '../HomeText/Hometext'
import { TypeAnimation } from 'react-type-animation';
import { brgrOpen, brgrClose, selectUserMenu } from '../../Features/userMenu'
import { AiOutlineClose } from 'react-icons/ai'

function HomeScreen() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { brgrMenu } = useSelector(selectUserMenu)

    const user = useSelector(selectUser)

    const Logout = (e) => {
        if (user) {
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
                            <img className='landing__nav__logo' alt="Loading" src="https://raw.githubusercontent.com/Angad-Godara/ssdc-web-dev/main/public/ssdcLogo.jpg" />
                            <div className="landing__nav__list">
                                <Link to="/home" className='landing__nav__list__item'>Explore</Link>
                                <Link to="/contests" className='landing__nav__list__item'>Contests</Link>
                                <Link to="/team" className='landing__nav__list__item'>Team</Link>
                                <Link to={user ? "/" : "/login"} onClick={Logout} className='landing__nav__list__item'>{user ? 'LogOut' : 'SignIn'}</Link>
                            </div>
                            <div onClick={() => dispatch(brgrOpen(!brgrMenu))} className='landing__nav__list__item hms__brgr__open'>Menu</div>
                        </div>
                        <div className='container'>
                            <div style={{ flex: '1 1' }}>
                                <img alt="Loading" src="./tablet.png" className='landing__tablet' />
                            </div>
                            <div className='container__text'>
                                <h1>SSDC Welcome You</h1>
                                <p>Our Club is the only coding club of Sant Longowal Institute of Engineering and Technology. We welcomes you to our website.</p>
                                {!user ? <Link to='/register' className='container__button'>Create Account {'>'}</Link> : <></>}
                            </div>
                        </div>
                        <div className='welcome__text__animation'>
                            <TypeAnimation
                                sequence={[
                                    `We Code </>`, // Types 'One'
                                    1000, // Waits 1s
                                    'We Eat!'
                                    ,
                                    2000,
                                    'We Sleep!',
                                    3000,
                                    'We Repeat!',
                                    4000,
                                ]}
                                wrapper='h1'
                                cursor={true}
                                repeat={Infinity}
                                speed="20"
                                style={{ fontSize: '1.5em' }}
                            />
                        </div>
                    </div>
                </div>
                {/* burger nav starts here */}
                <div className={brgrMenu ? 'brgr__wrapper open__brgr' : 'brgr__wrapper'}>
                    <div className='close__icon'>
                        <AiOutlineClose size={'20px'} onClick={() => {
                            dispatch(brgrClose())
                        }} />
                    </div>
                    <div className='brgr__item'>
                        {(user) ?
                            <Link to='/user'>
                                <img className='brgr__user' src={user?.photoURL} alt='U' />
                            </Link>
                            :
                            <div style={{ textAlign: 'center', margin: '10px 0 10px 0' }}>
                                <Link to='/login' className='login__button'>LogIn</Link>
                                <p>or</p>
                                <Link to='/register' className='login__button'>Sign Up</Link>
                            </div>
                        }
                    </div>
                    <div className='brgr__item'>
                        <Link to={user ? "/explore" : '/home'} className="option__link">Explore</Link>
                    </div>
                    <div className='brgr__item'>
                        <Link to="/contests" className="option__link">Contests</Link>
                    </div>
                    <div className='brgr__item'>
                        <Link to="/team" className="option__link">Team</Link>
                    </div>
                    <div className='brgr__item'>
                        <Link to="/projects" className="option__link">Projects</Link>
                    </div>
                    <div className='brgr__item'>
                        <Link to="/alumni" className="option__link">Alumni</Link>
                    </div>
                    <div className='brgr__item'>
                        <Link to="/privacy" className="option__link">Privacy Policy</Link>
                    </div>
                    {(user)
                        ?
                        <div div className='brgr__item'>
                            <Link to='#' onClick={Logout} className="option__link">Log Out</Link>
                        </div>
                        :
                        <></>
                    }
                </div >
            </div>
            <Hometext />
            <Footer />
        </div>
    )
}

export default HomeScreen
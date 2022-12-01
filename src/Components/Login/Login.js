import React from 'react'
import './Login.css'
import { AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login__wrapper'>
            <div className='login__container'>
                <div className='login__form__wrapper'>
                    <img className='login__logo' src={'https://raw.githubusercontent.com/Angad-Godara/ssdc-web-dev/main/public/ssdcLogo.jpg'}
                        alt='SSDC' />
                    <form className='login__form'>
                        <span>
                            <input type="text" placeholder='Username or E-mail' />
                        </span>
                        <span>
                            <input type="password" placeholder='Password' />
                        </span>
                    </form>
                    <button className='login__button'>Sign In</button>
                    <div className='login__actions'>
                        <Link to='/register'>Forgot Password?</Link>
                        <Link to='/register'>Sign Up</Link>
                    </div>
                    <div className='auth__options'>
                        <p>or you can sign in with</p>
                        <div className='login__options'>
                            <AiFillGoogleCircle className='logo__google login__option__logos' size={'30'} />
                            <AiFillGithub className='logo__github login__option__logos' size={'30'} />
                            <BsLinkedin className='logo__linkedin login__option__logos' size={'25'} style={{ borderRadius: '50%' }} />
                            <BsFacebook className='logo__facebook login__option__logos' size={'25'} />
                        </div>
                    </div>
                    <div className='welcome__note'>
                        <h3>Welcome to SSDC</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

// <AiFillGoogleCircle />  Google icon
// <AiFillGithub /> Github
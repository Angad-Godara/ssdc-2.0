import React from 'react'
import './Register.css'
import { AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'

function Register() {
    return (
        <div className='register__wrapper'>
            <div className='register__container'>
                <div className='register__form__wrapper'>
                    <img className='register__logo' src={'https://raw.githubusercontent.com/Angad-Godara/ssdc-web-dev/main/public/ssdcLogo.jpg'}
                        alt='SSDC' />
                    <form className='register__form'>
                        <span>
                            <input type="text" placeholder='Username' />
                        </span>
                        <span>
                            <input type={'text'} placeholder='Password' />
                        </span>
                        <span>
                            <input type="password" placeholder='Confirm password' />
                        </span>
                        <span>
                            <input type={'email'} placeholder='E-mail' />
                        </span>
                    </form>
                    <button className='register__button'>Sign Up</button>
                    <div className='register__actions'>
                        Have an account?<a href='/' className='register__signin'>Sign In</a>
                    </div>
                    <div className='auth__options'>
                        <p>or you can sign in with</p>
                        <div className='register__options'>
                            <AiFillGoogleCircle className='logo__google register__option__logos' size={'30'} />
                            <AiFillGithub className='logo__github register__option__logos' size={'30'} />
                            <BsLinkedin className='logo__linkedin register__option__logos' size={'25'} style={{ borderRadius: '50%' }} />
                            <BsFacebook className='logo__facebook register__option__logos' size={'25'} />
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

export default Register
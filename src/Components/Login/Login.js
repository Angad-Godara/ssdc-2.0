import React from 'react'
import './Login.css'

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
                        <a href='#'>Forgot Password?</a>
                        <a href='#'>Sign Up</a>
                    </div>
                    <div className='oauth__options'>
                        <p>or you can sign in with</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
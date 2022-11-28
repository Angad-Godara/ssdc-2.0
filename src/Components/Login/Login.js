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
                            <input type="text" placeholder='Username or Email' />
                        </span>
                        <span>
                            <input type="text" placeholder='Password' />
                        </span>
                    </form>
                    <button className='login__button'>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Login
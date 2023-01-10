import React, { useRef, useState } from 'react'
import './Register.css'
import { AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { auth, googleProvider, githubProvider, facebookProvider, twitterProvider } from '../../firebase'

function Register() {

    const usernameRef = useRef(null)
    const emailRef = useRef(null);
    const [password, setpassword] = useState(null);
    const [cnfpassword, setcnfpassword] = useState(null);

    const register = () => {
        auth.createUserWithEmailAndPassword(emailRef.current.value, cnfpassword)
            .then((authUser) => {
                console.log(authUser)
            }).catch((error) => {
                alert(error.message)
            })
    }

    const googleLogin = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => console.log(result))
            .catch((error) => {
                alert(error.message)
            })
    }
    const githubLogin = () => {
        auth.signInWithPopup(githubProvider)
            .then((result) => console.log(result))
            .catch((error) => {
                alert(error.message)
            })
    }
    const facebookLogin = () => {
        auth.signInWithPopup(facebookProvider)
            .then((result) => console.log(result))
            .catch((error) => {
                alert(error.message)
            })
    }
    const twitterLogin = () => {
        auth.signInWithPopup(twitterProvider)
            .then((result) => console.log(result))
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div className='register__wrapper'>
            <div className='register__container'>
                <div className='register__form__wrapper'>
                    <img className='register__logo' src={'https://raw.githubusercontent.com/Angad-Godara/ssdc-web-dev/main/public/ssdcLogo.jpg'}
                        alt='SSDC' />
                    <form className='register__form'>
                        <span>
                            {/* Username */}
                            <input ref={usernameRef} type="text" placeholder='Username' />
                        </span>
                        <span>
                            {/* Password */}
                            <input onChange={(e) => {
                                setpassword(e.target.value)
                            }} type={'password'} placeholder='Password' />
                        </span>
                        <span>
                            {/* Confirm Password */}
                            <input onChange={(e) => {
                                setcnfpassword(e.target.value)
                            }} type={'password'} placeholder='Confirm password' />
                        </span>
                        <span>
                            {/* Email */}
                            <input ref={emailRef} type={'email'} placeholder='E-mail' />
                        </span>
                    </form>
                    <button disabled={password !== cnfpassword} onClick={register} className={(password !== cnfpassword) ? 'register__button__disabled' : 'register__button'}>Sign Up</button>
                    <div className='register__actions'>
                        Have an account?<Link to='/login' className='register__signin'>Sign In</Link>
                    </div>
                    <div className='auth__options'>
                        <p>or you can sign in with</p>
                        <div className='register__options'>
                            <AiFillGoogleCircle onClick={googleLogin} className='logo__google register__option__logos' size={'30'} />
                            <AiFillGithub onClick={githubLogin} className='logo__github register__option__logos' size={'30'} />
                            <BsLinkedin onClick={twitterLogin} className='logo__linkedin register__option__logos' size={'25'} style={{ borderRadius: '50%' }} />
                            <BsFacebook onClick={facebookLogin} className='logo__facebook register__option__logos' size={'25'} />
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
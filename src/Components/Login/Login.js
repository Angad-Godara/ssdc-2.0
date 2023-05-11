import React, { useRef, useState } from 'react'
import './Login.css'
import { AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { auth, googleProvider, githubProvider, facebookProvider, twitterProvider } from '../../firebase';
import db from '../../firebase'

function Login() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, seterror] = useState("");

    const store = (authUser) => {

        // pending checkblocks 

        // if user exists previously
        db
            .collection('users')
            .doc(authUser?.uid)
            .onSnapshot(snap => {
                if (snap.data()) {
                    return;
                } else {
                    // updating db
                    db
                        .collection('users')
                        .doc(authUser?.uid)
                        .set({
                            email: authUser?.email,
                            username: authUser?.displayName,
                            photoURL: authUser?.photoURL,
                            mstatus: 'NA',
                        })
                }
            })
    }

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
        }).catch((error) => {
            seterror("Invalid Credentials")
            // seterror(error.message)
        })

    }

    const googleLogin = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                store(result.user)
            })
            .catch((error) => {
                seterror("Invalid Credentials")
                // seterror(error.message)
            })
    }
    const githubLogin = () => {
        auth.signInWithPopup(githubProvider)
            .then((result) => {
                store(result.user)
            })
            .catch((error) => {
                seterror("Invalid Credentials")
                // seterror(error.message)
            })
    }
    const facebookLogin = () => {
        auth.signInWithPopup(facebookProvider)
            .then((result) => {
                store(result.user)
            })
            .catch((error) => {
                seterror("Invalid Credentials")
                // seterror(error.message)
            })
    }
    const twitterLogin = () => {
        auth.signInWithPopup(twitterProvider)
            .then((result) => {
                store(result.user)
            })
            .catch((error) => {
                seterror("Invalid Credentials")
                // seterror(error.message)
            })
    }

    return (
        <div className='login__wrapper'>
            <div className='login__container'>
                <div className='login__form__wrapper'>
                    <img className='login__logo' src={'./logo.png'}
                        alt='SSDC' />
                    <form className='login__form'>
                        <span>
                            <input onChange={() => {
                                if (error) {
                                    seterror("");
                                }
                            }} ref={emailRef} style={error ? { borderColor: "rgb(250, 17, 17)" } : {}} type="text" placeholder='E-mail' autoComplete="on" />
                        </span>
                        <span>
                            <input onChange={() => {
                                if (error) {
                                    seterror("");
                                }
                            }} ref={passwordRef} style={error ? { borderColor: "rgb(250, 17, 17)" } : {}} type="password" placeholder='Password' autoComplete="on" />
                        </span>
                        {error ? <p>{error}</p> : <p></p>}
                    </form>
                    <button onClick={login} className='login__button'>Sign In</button>
                    <div className='login__actions'>
                        <Link to='/forgotpassword'>Forgot Password?</Link>
                        <Link to='/register'>Sign Up</Link>
                    </div>
                    <div className='auth__options'>
                        <p>or you can sign in with</p>
                        <div className='login__options'>
                            <AiFillGoogleCircle onClick={googleLogin} className='logo__google login__option__logos' size={'30'} />
                            <AiFillGithub onClick={githubLogin} className='logo__github login__option__logos' size={'30'} />
                            <BsLinkedin onClick={twitterLogin} className='logo__linkedin login__option__logos' size={'25'} style={{ borderRadius: '50%' }} />
                            <BsFacebook onClick={facebookLogin} className='logo__facebook login__option__logos' size={'25'} />
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
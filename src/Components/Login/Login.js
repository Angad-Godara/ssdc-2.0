import React, { useRef, useState } from 'react'
import './Login.css'
import { AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { auth, googleProvider, githubProvider, facebookProvider, twitterProvider } from '../../firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../Features/userSlice';

function Login() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, seterror] = useState("");
    const dispatch = useDispatch();

    const store = async (authUser) => {

        // pending checkblocks 

        // if user exists previously
        const token = await fetch(`${process.env.REACT_APP_SERVER}/auth/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                uuid: authUser.uid,
                email: authUser?.email,
                username: authUser?.displayName,
                photoURL: authUser?.photoURL,
            })
        })
        if (token.status === 200) {
            const jwtTokenData = await token.json();
            if (jwtTokenData.success) {
                dispatch(login({
                    uid: authUser?.uid,
                    photoURL: jwtTokenData?.photoURL,
                    username: jwtTokenData?.username,
                    email: jwtTokenData?.email,
                    mstatus: jwtTokenData?.mstatus,
                }))
                localStorage.setItem("jwttoken", jwtTokenData.authtoken)
            }
        } else {
            const jwtTokenData = await token.json();
            auth.signOut();
            dispatch(logout())
            alert(jwtTokenData.error)
        }
    }

    const loginfunc = (isLogin = false) => {
        if (isLogin?.loginClick) {
            auth.signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            ).then((authUser) => {
                store(authUser);
            }).catch((error) => {
                seterror("Invalid Credentials")
                // seterror(error.message)
            })
        }
    }

    const googleLogin = (e) => {
        e.preventDefault();
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                store(result.user)
            })
            .catch((error) => {
                seterror("Invalid Credentials")
                // seterror(error.message)
            })
    }
    const githubLogin = (e) => {
        e.preventDefault();
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
                    <button onClick={() => loginfunc({ loginClick: true })} className='login__button'>Sign In</button>
                    <div className='login__actions'>
                        <Link to='/forgotpassword'>Forgot Password?</Link>
                        <Link to='/register'>Sign Up</Link>
                    </div>
                    <div className='auth__options'>
                        <p>or you can sign in with</p>
                        <div className='login__options'>
                            <AiFillGoogleCircle onClick={googleLogin} className='logo__google login__option__logos' size={'30'} />
                            <AiFillGithub onClick={githubLogin} className='logo__github login__option__logos' size={'30'} />
                            {/* <BsLinkedin onClick={twitterLogin} className='logo__linkedin login__option__logos' size={'25'} style={{ borderRadius: '50%' }} />
                            <BsFacebook onClick={facebookLogin} className='logo__facebook login__option__logos' size={'25'} /> */}
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
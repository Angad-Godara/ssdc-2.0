import React, { useRef, useState, useEffect } from 'react'
import './Register.css'
import { AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import db, { auth, googleProvider, githubProvider, facebookProvider, twitterProvider } from '../../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Features/userSlice'

function Register() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])


    const defaultURL = "https://raw.githubusercontent.com/SSDC-SLIET/ssdc-web-dev/main/public/ssdcLogo.jpg";

    const emailRef = useRef(null);
    const [username, setusername] = useState(null);
    const [password, setpassword] = useState(null);
    const [cnfpassword, setcnfpassword] = useState(null);

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

    const register = () => {
        auth.createUserWithEmailAndPassword(emailRef.current.value, cnfpassword)
            .then((authUser) => {
                db
                    .collection('users')
                    .doc(authUser?.user.uid)
                    .set({
                        email: authUser.user.email,
                        username: username,
                        photoURL: defaultURL,
                        mstatus: 'NA',
                    })
            }).catch((error) => {
                alert(error.message)
            })
    }

    const googleLogin = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                store(result.user)
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    const githubLogin = () => {
        auth.signInWithPopup(githubProvider)
            .then((result) => {
                store(result.user)
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    const facebookLogin = () => {
        auth.signInWithPopup(facebookProvider)
            .then((result) => {
                store(result.user)
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    const twitterLogin = () => {
        auth.signInWithPopup(twitterProvider)
            .then((result) => {
                store(result.user)
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div className='register__wrapper'>
            <div className='register__container'>
                <div className='register__form__wrapper'>
                    <img className='register__logo' src={'./logo.png'}
                        alt='SSDC' />
                    <form className='register__form'>
                        <span>
                            {/* Username */}
                            <input onChange={(e) => {
                                setusername(e.target.value)
                            }} type="text" placeholder='Username' autoComplete='on' />
                        </span>
                        <span>
                            {/* Password */}
                            <input onChange={(e) => {
                                setpassword(e.target.value)
                            }} type={'password'} placeholder='Password' autoComplete='on' />
                        </span>
                        <span>
                            {/* Confirm Password */}
                            <input onChange={(e) => {
                                setcnfpassword(e.target.value)
                            }} type={'password'} placeholder='Confirm password' autoComplete='on' />
                        </span>
                        <span>
                            {/* Email */}
                            <input ref={emailRef} type={'email'} placeholder='E-mail' autoComplete='on' />
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
                            {/* <BsLinkedin onClick={twitterLogin} className='logo__linkedin register__option__logos' size={'25'} style={{ borderRadius: '50%' }} />
                            <BsFacebook onClick={facebookLogin} className='logo__facebook register__option__logos' size={'25'} /> */}
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
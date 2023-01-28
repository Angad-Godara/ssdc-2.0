import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import './ForgotPassword.css'

function ForgotPassword() {

    const [email, setemail] = useState(null);
    const [errors, setErrors] = useState(null);
    const [sent, setsent] = useState(false);
    const [btn, setBtn] = useState(true);

    const isEmail = (email) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    const resetPassword = (e) => {
        e.preventDefault();
        auth.sendPasswordResetEmail(email)
            .then(() => {
                setsent(true);
                setBtn(false)
            })
            .catch(error => {
                switch (error.code) {
                    case 'auth/user-not-found':
                        setErrors('Please enter your registered email only!')
                        break;
                    default:
                        setErrors('invalid email')
                }
            })
        setTimeout(() => {
            setBtn(true)
        }, 5000);
    }

    const validateEmail = () => {

        let errors = null;

        if (!isEmail(email)) {
            errors = "Invalid email";
        }

        setErrors(errors);
    };

    return (
        <div className='forgot__wrapper'>
            {sent
                ?
                <div className='verify__container'>
                    <div className="running">
                        <div className="outer">
                            <div className="body">
                                <div className="arm behind"></div>
                                <div className="arm front"></div>
                                <div className="leg behind"></div>
                                <div className="leg front"></div>
                            </div>
                        </div>
                    </div>
                    <h1>Please Check your mail, We have sent a Reset password link in there</h1>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                        <button disabled={!btn} className={(!btn) ? 'inactive' : 'active'} onClick={resetPassword}>Resend</button>
                        <button className='active'><Link to='/'>Cancel</Link></button>
                    </div>
                    {!btn && <h5 className='alert'>Kindly wait for 30 seconds</h5>}
                </div>
                :
                <div className='forgot__container'>
                    <div className='forgot__form__wrapper'>
                        <img className='forgot__logo' src={'./NewLogoColor.png'}
                            alt='SSDC' />
                        <form className='login__form'>
                            <span>
                                <input onChange={(e) => {
                                    setErrors('Invalid email')
                                    setemail(e.target.value)
                                }} type="text" onKeyUp={validateEmail} placeholder='Enter your email here' autoComplete="on" />
                            </span>
                            <span
                                style={{
                                    color: "red",
                                    fontSize: '14px',
                                    zIndex: errors ? '-1' : '1',
                                    textAlign: 'center'
                                }}
                                className={errors ? 'showErr' : ''}
                            >
                                {errors || !email ? errors : '✅'}
                            </span>
                        </form>
                        <button onClick={resetPassword} disabled={errors || !email ? true : false} className={errors || !email ? 'register__button__disabled' : 'login__button'}>Send Reset Link</button>
                    </div>
                </div>
            }
        </div >
    )
}

export default ForgotPassword
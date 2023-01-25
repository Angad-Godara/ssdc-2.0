import React, { useState } from 'react'
import { auth } from '../../firebase';
import './VerifyEmail.css'

function VerifyEmail() {

    const [btn, setBtn] = useState(true);

    const verifyemail = (e) => {
        e.preventDefault();

        setBtn(false);
        auth.currentUser.sendEmailVerification()
            .catch(err => alert(err));

        setTimeout(() => {
            setBtn(true)
        }, 5000);
    }

    const cancel = () => {
        auth.signOut();
    }

    return (
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

            <h1>Please Check your mail, We have sent an Email for verification purposes</h1>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                <button disabled={!btn} className={(!btn) ? 'inactive' : 'active'} onClick={verifyemail}>Send</button>
                <button className='active' onClick={cancel}>Cancel</button>
            </div>
            {!btn && <h5 className='alert'>Kindly wait for 30 seconds</h5>}
        </div >
    )
}

export default VerifyEmail
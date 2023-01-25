import React, { useEffect } from 'react'
import { auth } from '../../firebase';

function VerifyEmail() {

    const verifyemail = (e) => {
        e.preventDefault();
        auth.currentUser.sendEmailVerification()
            .catch(err => alert(err));
    }

    useEffect(() => {
        const unsubscribe = () => (auth.currentUser.reload())
        return unsubscribe;
    }, [auth.currentUser.emailVerified])

    return (
        <div>
            <h1>Please Check your mail, We have sent an Email for verification purposes</h1>
            <button onClick={verifyemail}>Send</button>
        </div>
    )
}

export default VerifyEmail
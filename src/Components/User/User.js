import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../Features/userSlice';
import { auth } from '../../firebase';
import './user.css'

function User() {

    const history = useNavigate()
    const user = useSelector(selectUser)

    return (
        <div>User
            <button onClick={() => {
                auth.signOut();
                history('/')
            }}> Logout </button>
            <h1>{user?.username}</h1>
            <h1>{user?.email}</h1>
            <h1>{user?.uid}</h1>
            <img className="user__avatar" src={user?.photoURL} alt="" />
        </div>
    )
}

export default User
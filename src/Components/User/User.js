import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../../Features/userSlice';
import { auth } from '../../firebase';
import './user.css'

function User() {

    const dispatch = useDispatch();
    const history = useNavigate()
    const user = useSelector(selectUser)

    return (
        <div>User
            <button onClick={() => {
                auth.signOut();
                dispatch(logout)
                history('/login')
            }}> Logout </button>
            <h1>{user.username}</h1>
            <h1>{user.email}</h1>
            <h1>{user.uid}</h1>
            <img className="user__avatar" src={user?.photoURL} alt="" />
        </div>
    )
}

export default User
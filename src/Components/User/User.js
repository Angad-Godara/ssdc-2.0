import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../Features/userSlice';
import db, { auth, storage } from '../../firebase';
import { FiEdit2 } from 'react-icons/fi'
import './user.css'
import ProfileUpdateForm from './ProfileUpdate/ProfileUpdateForm';

function User() {

    const history = useNavigate()
    const user = useSelector(selectUser)

    const [file, setfile] = useState(null);

    const checkFile = (e) => {
        if (e.target.files[0].size / (1048576) >= 2) {
            alert('Size limit exceeded')
            e.target.value = null
            return;
        }
        setfile(e.target.files[0])
    }

    const upload = () => {
        // pending catches

        const imageRef = ref(storage, `members/${user.email}`)
        uploadBytes(imageRef, file)
            .then((result) => {
                getDownloadURL(result.ref).then(url => {
                    db
                        .collection('users')
                        .doc(user?.uid)
                        .update({
                            photoURL: url
                        })
                        .catch((err) => alert(err))
                })
                alert('uploaded')
            })
            .catch(err => {
                alert('Please try again later!')
                console.log(err)
            })
    }

    return (
        <div className='profile__wrapper'>
            <div className='profile__header'>
                <div className='bg__wrapper'>
                    <div></div>
                </div>
                <div className='profile__upper'>
                    <div className='avatar__wrapper'>
                        <img src={user?.photoURL} alt='USER' />
                        <div>
                            <div className='edit__btn'> <FiEdit2 size={'12px'} /> Edit</div>
                        </div>
                    </div>
                    <h3>{user?.username}</h3>
                </div>
            </div>
            <div className='profile__main profile__pg__container'>
                <div className='profile__left'></div>
                <div className='profile__right'>
                    <ProfileUpdateForm />
                </div>
            </div>

            {/* <div>User
                <button onClick={() => {
                    auth.signOut();
                    history('/')
                }}> Logout </button>
                <h1>{user?.username}</h1>
                <h1>{user?.email}</h1>
                <h1>{user?.uid}</h1>
                <img className="user__avatar" src={user?.photoURL} alt="" />
                <input type={'file'} onChange={checkFile} />
                <button disabled={!file} onClick={upload}>upload</button>
            </div> */}
        </div>
    )
}

export default User
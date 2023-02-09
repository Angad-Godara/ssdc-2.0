import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../Features/userSlice';
import db, { auth, storage } from '../../firebase';
import { FiEdit2 } from 'react-icons/fi'
import './user.css'
import ProfileUpdateForm from './ProfileUpdate/ProfileUpdateForm';
import PreviewImg from './ProfileUpdate/PreviewImg';
import Footer from '../Footer/Footer';
import { selectMember } from '../../Features/isMemberSlice';
import ContributeForm from './Contribute/ContributeForm';
import { loadContributions } from '../../Features/ContributeSlice';

function User() {

    const dispatch = useDispatch();

    const user = useSelector(selectUser)
    const member = useSelector(selectMember)
    const [open, setopen] = useState(false)
    const [file, setfile] = useState(null);
    const [preveiw, setPreveiw] = useState(null)
    const [left, setleft] = useState('basicInfo')

    const checkFile = (e) => {
        if (e.target.files[0].size / (1048576) >= 2) {
            alert('Size limit exceeded')
            e.target.value = null
            return;
        }
        setPreveiw(URL.createObjectURL(e.target.files[0]))
        setfile(e.target.files[0])
    }

    const closeit = () => {
        if (open) {
            setopen(false);
            return;
        }
        return;
    }

    const resetImg = () => {
        setfile(null);
        setPreveiw(null);
    }

    const upload = () => {

        if (!file) {
            alert('Invalid upload');
            return;
        }

        // pending catches
        const imageRef = ref(storage, `members/${user?.email}`)
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
                closeit();
            })
            .catch(err => {
                alert('Please try again later!')
                console.log(err)
            })
    }


    useEffect(() => {
        const fetchContirbutions = () => {
            db
                .collection('members')
                .doc(auth.currentUser.uid)
                .collection('projects__contributions')
                .onSnapshot(snapshot => {
                    dispatch(loadContributions(snapshot.docs.map((snap) => ({
                        owner: snap.data().owner,
                        repo: snap.data().repo,
                        status: snap.data().status,
                    }))))
                })
        }
        return fetchContirbutions
    }, [user])

    return (
        <div className='profile__wrapper'>
            <div className={(open) ? 'dialog__wrapper' : 'dialog__wrapper closeprev'}>
                <div className='dialog__container'>
                    <PreviewImg checkFile={checkFile} preveiw={preveiw} upload={upload} resetImg={resetImg} dft={user?.photoURL} closeit={closeit} />
                </div>
            </div>

            <div className='profile__header'>
                <div className='bg__wrapper'>
                    <div></div>
                </div>
                <div className='profile__upper'>
                    <div className='avatar__wrapper'>
                        <img src={user?.photoURL} alt='USER' />
                        <div>
                            <div className='edit__btn' onClick={() => setopen(true)}> <FiEdit2 size={'12px'} /> Edit</div>
                        </div>
                    </div>
                    <h3>{member ? member.name : user?.username}</h3>
                </div>
            </div>
            <div className='profile__main profile__pg__container'>
                <div className='profile__left'>
                    <div onClick={() => setleft('basicInfo')} className={left === 'basicInfo' ? 'upd__menu__item addblue' : 'upd__menu__item'}>
                        Basic Info
                    </div>
                    <div onClick={() => setleft('contribute')} className={left === 'contribute' ? 'upd__menu__item addblue' : 'upd__menu__item'}>
                        Contribute
                    </div>
                </div>
                <div className='profile__right'>
                    {left === 'basicInfo' && <ProfileUpdateForm />}
                    {left === 'contribute' && <ContributeForm />}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default User
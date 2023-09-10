// User Screen component consiting of images edit and two tabs

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../Features/userSlice';
import { FiEdit2 } from 'react-icons/fi'
import './user.css'
import ProfileUpdateForm from './ProfileUpdate/ProfileUpdateForm';
import PreviewImg from './ProfileUpdate/PreviewImg';
import Footer from '../Footer/Footer';
import { selectMember, setMember, updateMember } from '../../Features/isMemberSlice';
import ContributeForm from './Contribute/ContributeForm';
import { loadContributions } from '../../Features/contributeSlice';

function User() {

    const dispatch = useDispatch();

    const user = useSelector(selectUser)
    const member = useSelector(selectMember)
    const [open, setopen] = useState(false)
    const [file, setfile] = useState(null);
    const [preveiw, setPreveiw] = useState(null)
    const [left, setleft] = useState('basicInfo')
    const jwt = localStorage.getItem("jwttoken");

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

    const upload = async () => {

        if (!file) {
            alert('Invalid upload');
            return;
        }

        // pending catches
        // Sending img to backend for URL updation in DB
        const formData = new FormData();
        formData.append('img', file);

        const getImgURL = await fetch(`${process.env.REACT_APP_SERVER}/user/updateImg`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${jwt}`,
            },
            body: formData,
        })
    }


    useEffect(() => {
        const fetchUserDetails = async () => {
            const getMember = await fetch(`${process.env.REACT_APP_SERVER}/user/getUser`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            })
    
            const data = await getMember.json();
            dispatch(setMember({
                name: data?.name,
                aim: data?.aim,
                linkedin: data?.linkedin,
                github: data?.github,
                leetcode: data?.leetcode,
                codechef: data?.codechef,
                codeforces: data?.codeforces,
                web: data?.web,
                regd: data?.regd,
                gender: data?.gender,
                branch: data?.branch
            }));
        }
        
        const fetchContirbutions = async () => {
            const contriData = await fetch(`${process.env.REACT_APP_SERVER}/user/getContributions`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${jwt}`
                }
            })

            const contriRes = await contriData.json();
            // console.log(contriRes);
            dispatch(loadContributions(contriRes.map((data) => ({
                owner: data.owner,
                repo: data.repo,
                status: data.status
            }))))


            // db
            //     .collection('members')
            //     .doc(auth?.currentUser?.uid)
            //     .collection('projects__contributions')
            //     .onSnapshot(snapshot => {
            //         dispatch(loadContributions(snapshot.docs.map((snap) => ({
            //             owner: snap.data().owner,
            //             repo: snap.data().repo,
            //             status: snap.data().status,
            //         }))))
            //     })
        }
        fetchContirbutions();
        fetchUserDetails();
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
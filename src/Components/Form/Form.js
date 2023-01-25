import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL, connectStorageEmulator } from 'firebase/storage';
import { selectUser } from '../../Features/userSlice';
import db, { storage } from '../../firebase';
import './Form.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Register() {

    const user = useSelector(selectUser);
    const [file, setfile] = useState(null)
    const [url, seturl] = useState(null)
    const [fn, setfn] = useState(null)
    const [sn, setsn] = useState(null)
    const [lkd, setlkd] = useState(null)
    const [git, setgit] = useState(null)
    const [post, setpost] = useState('member')

    const navigate = useNavigate()

    const upload = (e) => {
        e.preventDefault();

        if (!file) {
            alert('Invalid upload');
            return;
        }

        // pending catches
        const imageRef = ref(storage, `members/${user?.email}`)
        uploadBytes(imageRef, file)
            .then((result) => {
                getDownloadURL(result.ref).then(url => {
                    seturl(url)
                    db
                        .collection('users')
                        .doc(user?.uid)
                        .update({
                            photoURL: url,
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

    const checkFile = (e) => {
        e.preventDefault();
        if (e.target.files[0].size / (1048576) >= 2) {
            alert('Size limit exceeded')
            e.target.value = null
            return;
        }
        setfile(e.target.files[0])
        console.log(post)
    }

    const submitform = (e) => {
        e.preventDefault();
        db
            .collection('requests')
            .doc(user?.uid)
            .set({
                email: user?.email,
                photoURL: url,
                name: `${fn} ${sn}`,
                github: git,
                linkedin: lkd,
                post: post,
            }).catch(err => console.log(err))

        db
            .collection('users')
            .doc(user?.uid)
            .update({
                appliedMembership: true
            })
        alert('Submitted successfully')
        navigate('/');
    }

    return (
        <div className='form__body'>
            {(!user?.appliedMembership)
                ?
                <form className="form__container">
                    <div className="form__title">
                        <h1>Application Form</h1>
                    </div>
                    <div className="form__panel">
                        <input type="text" onChange={(e) => setfn(e.target.value)} name="first_name" required placeholder="First Name*"></input>
                        <input type="text" onChange={(e) => setsn(e.target.value)} name="last_name" required placeholder="Last Name*"></input>
                        <input type="text" onChange={(e) => setlkd(e.target.value)} name="linkedin" required placeholder="LinkedIn Id*"></input>
                        <input type="text" onChange={(e) => setgit(e.target.value)} name="github" required placeholder="Github Id*"></input>

                        <div className="member_type">
                            <label htmlFor="position"><p>What you are?*</p></label>
                            <select className='position' onChange={(e) => setpost(e.target.value)} name="position" id="position">
                                <option className='form__select__option' value="member">Member</option>
                                <option className='form__select__option' value="core">Core Member</option>
                            </select>
                        </div>

                        <div className="form__upload_img">
                            <label htmlFor="img"><p>Upload your image* :</p></label>
                            <input onChange={checkFile} type="file" name="img" id="img" accept="image/*"></input>
                            <button onClick={upload}>Confirm Img</button>
                        </div>
                    </div>
                    <div className="form__buttons">
                        <button type="submit" disabled={!url && !post} onClick={submitform} className={(url) ? "form__btn" : 'form__btn disabledbtn'}> Submit</button>
                        <button type="reset" className="form__btn">Reset</button>
                    </div>
                </form>
                :
                <h3>
                    Already Applied
                </h3>
            }
        </div >
    );
}
export default Register;
import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { selectUser } from '../../Features/userSlice';
import db, { storage } from '../../firebase';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileImage } from 'react-icons/ai'
import { BsUpload } from 'react-icons/bs'

function AlumniForm() {
    const user = useSelector(selectUser);
    const [file, setfile] = useState(null)
    const [url, seturl] = useState(null)
    const [fn, setfn] = useState(null)
    const [sn, setsn] = useState(null)
    const [lkd, setlkd] = useState(null)
    const [passoutYear, setpassoutYear] = useState(null)
    const [branch, setbranch] = useState('GCS')
    const [web, setweb] = useState(null)
    const [aim, setaim] = useState(null)
    const [check, setcheck] = useState(false)
    const [gender, setgender] = useState('male')
    const [fileE, setfileE] = useState(null);

    const navigate = useNavigate()

    const upload = (e) => {
        e.preventDefault();

        if (!file) {
            alert('Invalid upload');
            return;
        }

        // pending catches
        const imageRef = ref(storage, `alumni/${user?.email}`)
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
                        .catch((err) => {
                            setfileE(err)
                        })

                    setfileE(null)
                })
            })
            .catch(err => {
                setfileE("Can't upload file at the moment")
                console.log(err)
            })
    }

    const checkFile = (e) => {
        e.preventDefault();
        if (e.target.files[0].size / (1048576) >= 3) {
            setfileE('Size limit exceeded')
            e.target.value = null
            return;
        }
        setfile(e.target.files[0])
        setfileE(null)
    }

    const submitform = (e) => {
        e.preventDefault();
        db
            .collection('alumni__requests')
            .doc(user?.uid)
            .set({
                email: user?.email,
                photoURL: url,
                name: `${fn} ${sn ? sn : ""}`,
                passoutYear: passoutYear,
                linkedin: lkd,
                post: 'alumni',
                branch: branch,
                web: web,
                aim: aim,
                gender: gender,
            }).catch(err => console.log(err))

        db
            .collection('users')
            .doc(user?.uid)
            .update({
                mstatus: 'Applied'
            })
        alert('Submitted successfully')
        navigate('/');
    }

    const [fnEE, setfnE] = useState(null)
    const [lkdE, setlkdE] = useState(null)
    const [passoutYearE, setpassoutYearE] = useState(null)
    const [branchE, setbranchE] = useState(null)
    const [aimE, setaimE] = useState(null)
    const [genderE, setgenderE] = useState(null)


    const handleValidation = (evnt) => {
        const passwordInputValue = evnt.target.value.trim();
        const FieldName = evnt.target.name;
        const passwordLength = passwordInputValue.length;
        let errMsg = "";
        if (passwordLength === 0) {
            errMsg = `It is mandatory`;
        } else {
            errMsg = "";
        }

        if (FieldName === 'first_name') {
            if (errMsg !== "")
                setfnE(errMsg)
            else
                setfnE(null)
        } else if (FieldName === 'linkedin') {
            if (errMsg !== "")
                setlkdE(errMsg)
            else
                setlkdE(null)
        } else if (FieldName === 'passoutYear') {
            if (errMsg !== "")
                setpassoutYearE(errMsg)
            else
                setpassoutYearE(null)
        } else if (FieldName === 'branch') {
            if (errMsg !== "")
                setbranchE(errMsg)
            else
                setbranchE(null)
        } else if (FieldName === 'aim') {
            if (errMsg !== "")
                setaimE(errMsg)
            else
                setaimE(null)
        } else if (FieldName === 'gender') {
            if (errMsg !== "")
                setgenderE(errMsg)
            else
                setgenderE(null)
        }
    }

    return (
        <div className='form__body'>
            {(user?.mstatus === 'NA')
                ?
                <form onSubmit={submitform} className="form__container">
                    <div className="form__title">
                        <h2>Alumni Form</h2>
                    </div>
                    <div className="form__panel">

                        <input onKeyUp={(e) => handleValidation(e)} type="text" onChange={(e) => setfn(e.target.value)} name="first_name" required placeholder="First Name*"></input>
                        {(fnEE) ? <p className='input__errors'>{fnEE}</p> : <div className='input__errors'></div>}
                        <input onKeyUp={(e) => handleValidation(e)} type="text" onChange={(e) => setsn(e.target.value)} name="last_name" placeholder="Last Name"></input>
                        <input onKeyUp={(e) => handleValidation(e)} type="text" onChange={(e) => setlkd(e.target.value)} name="linkedin" required placeholder="LinkedIn Id*"></input>
                        {(lkdE) ? <p className='input__errors'>{lkdE}</p> : <div className='input__errors'></div>}
                        <input onKeyUp={(e) => handleValidation(e)} type="text" onChange={(e) => setpassoutYear(e.target.value)} name="passoutYear" required placeholder="Passout Year*"></input>
                        {(passoutYearE) ? <p className='input__errors'>{passoutYearE}</p> : <div className='input__errors'></div>}
                        <input onKeyUp={(e) => handleValidation(e)} type="text" onChange={(e) => setweb(e.target.value)} name="web" placeholder="Portfolio, Website (if any)"></input>
                        <textarea onKeyUp={(e) => handleValidation(e)} onChange={(e) => setaim(e.target.value)} name="aim" required placeholder="Something you wanna say to juniors (in 1 or 2 lines max)...We would love to hear"></textarea>
                        {(aimE) ? <p className='input__errors'>{aimE}</p> : <div className='input__errors'></div>}

                        <div className="member_type mem">
                            <label htmlFor="position1"><p>Gender*</p></label>
                            <select defaultValue="male" name='gender' required onChange={(e) => setgender(e.target.value)} className='position1' type={'text'}>
                                <option value="male" className='form__select__option' >male</option>
                                <option value="female" className='form__select__option' >female</option>
                                <option value="other" className='form__select__option' >other</option>
                            </select>
                            {(genderE) ? <p className='input__errors'>{genderE}</p> : <div className='input__errors'></div>}
                        </div>
                        <div className="member_type mem">
                            <label htmlFor="position1"><p>Branch*</p></label>
                            <select defaultValue="GCS" name='branch' required onChange={(e) => setbranch(e.target.value)} className='position1' type={'text'}>
                                <option value="GCS" className='form__select__option' >GCS</option>
                                <option value="GEC" className='form__select__option' >GEC</option>
                                <option value="GEE" className='form__select__option' >GEE</option>
                                <option value="GIN" className='form__select__option' >GIN</option>
                                <option value="GCH" className='form__select__option' >GCT</option>
                                <option value="GFT" className='form__select__option' >GFT</option>
                                <option value="GME" className='form__select__option' >GME</option>
                            </select>
                            {(branchE) ? <p className='input__errors'>{branchE}</p> : <div className='input__errors'></div>}
                        </div>

                        <div className={url ? 'form__upload_img uploaded' : "form__upload_img"}>
                            <label htmlFor='avatar_uploader'>
                                <AiOutlineFileImage />
                                &nbsp; Choose Avatar
                            </label>
                            <input accept='image/*' required onKeyUp={(e) => handleValidation(e)} onChange={checkFile} id='avatar_uploader' type={'file'} />
                            <div onClick={upload}><BsUpload size={'15px'} /> Upload</div>
                        </div>
                        {(fileE) ? <p className='input__errors'>{fileE}</p> : <div className='input__errors'></div>}
                    </div>
                    <label className='check' htmlFor='check'>
                        <input required accept="image/*" onKeyUp={(e) => handleValidation(e)} onChange={(e) => setcheck(e.target.checked)} name='check' type={'checkbox'} />
                        <span>I agree that all the information provided above is true.</span>
                    </label>
                    <div className="form__buttons">
                        <button type="submit" disabled={!url || !check || fnEE || passoutYearE || lkdE || branchE || aimE} className={(!(!url || !check || fnEE || passoutYearE || lkdE || branchE || aimE)) ? "form__btn" : 'form__btn disabledbtn'}> Submit</button>
                        <button type="reset" className="form__btn">Reset</button>
                    </div>
                </form>
                :
                <div className='already__applied'>
                    <h3>
                        Already Applied
                    </h3>
                </div>
            }
        </div >
    );
}

export default AlumniForm
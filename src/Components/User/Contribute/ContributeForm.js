import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectContributions, setCurrentContribution } from '../../../Features/contributeSlice'
import { selectMember } from '../../../Features/isMemberSlice'
import db, { auth } from '../../../firebase'
import './ContributeForm.css'
import PrevContributions from './PrevContributions'

function ContributeForm() {

    const member = useSelector(selectMember)
    const [open, setopen] = useState(-1);
    const dispatch = useDispatch();
    const contributions = useSelector(selectContributions);

    const [reponame, setreponame] = useState('');
    const [repoverf, setrepoverf] = useState(false)
    const [ssdcContri, setssdcContri] = useState(null);
    const [gituser, setgituser] = useState('');
    const jwt = localStorage.getItem('jwttoken');

    const [globalchange, setglobalchange] = useState(false)

    const repoverification = async (e) => {
        e.preventDefault()

        if (!repoverf) {
            await fetch(`https://api.github.com/repos/${contributions.currentContribution?.owner ? contributions.currentContribution?.owner : member?.github}/${reponame}`)
                .then(async response => {
                    const res = await response.json()
                    if (res?.message === 'Not Found') {
                        alert('Please enter valid details')
                    } else
                        setrepoverf(true)
                }).catch(error => {
                    alert('Invalid request')
                    console.log(error)
                })
        } else {
            if (!globalchange)
                setglobalchange(true);
            dispatch(setCurrentContribution({
                repo: reponame,
            }))
            save(e, open)
        }
    }

    const requestContribution = async () => {

        const gitData = await fetch(`${process.env.REACT_APP_SERVER}/user/contribute`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                owner: (contributions.currentContribution?.owner ? contributions.currentContribution?.owner : member?.github),
                repo: contributions.currentContribution?.repo,
                ssdcContri: contributions.currentContribution.ssdcContri,
                projectCount: (member?.project__count ? member.project__count : 0)
            })
        })

        const res = await gitData.json();
        setglobalchange(false);
        setssdcContri("");
        setreponame("");
        alert("Request added to queue");
        console.log("Api request: ", res);

        // storing the request

        // checking whether the record exists previously or not?
        // var docRef = db.collection("project__requests").doc(`owner>${contributions.currentContribution?.owner ? contributions.currentContribution?.owner : member?.github}>repo>${contributions.currentContribution.repo}`)
        // docRef.get().then((doc) => {
        //     if (doc.exists) {
        //         alert('This request already exists');
        //     } else {
        //         db
        //             .collection('project__requests')
        //             .doc(`owner>${contributions.currentContribution?.owner ? contributions.currentContribution?.owner : member?.github}>repo>${contributions.currentContribution.repo}`)
        //             .set({
        //                 owner: (contributions.currentContribution?.owner ? contributions.currentContribution?.owner : member?.github),
        //                 repo: contributions.currentContribution?.repo,
        //                 ssdcContri: contributions.currentContribution.ssdcContri,
        //                 // uid: auth.currentUser.uid,
        //                 status: 'requested',
        //                 count: (member?.project__count ? member.project__count : 0)
        //             })
        //             .then(res => {
        //                 db
        //                     .collection('members')
        //                     .doc(auth?.currentUser?.uid)
        //                     .collection('projects__contributions')
        //                     .doc(`owner>${contributions.currentContribution?.owner ? contributions.currentContribution?.owner : member?.github}>repo>${contributions.currentContribution.repo}`)
        //                     .set({
        //                         owner: (contributions.currentContribution?.owner ? contributions.currentContribution?.owner : member?.github),
        //                         repo: contributions.currentContribution?.repo,
        //                         ssdcContri: contributions.currentContribution.ssdcContri,
        //                         status: 'requested',
        //                         count: (member?.project__count ? member.project__count : 0)
        //                     })
        //                     .then(res => alert('Added to requests'))
        //                     .catch(error => alert(error))
        //             })
        //             .catch(error => alert(error))
        //     }
        // }).catch((error) => {
        //     console.log("Internal error:", error);
        // });
    }

    const save = (e) => {
        e.preventDefault();
        setopen(-1);
    }


    return (
        <div className='ProfileUpdateForm ContributeForm'>
            {(!member.name)
                ?
                <h2>Only Members Allowed</h2>
                :
                <>
                    <>
                        <PrevContributions />
                    </>
                    <div className='update__form__title'>Add contributions</div>
                    {(open === 'gitname')
                        ?
                        <div className='update__form__row update__open'>
                            <div className='left__upd'>Owner's Github</div>
                            <div className='right__upd'>
                                <input type={'text'} defaultValue={contributions.currentContribution?.owner ? contributions.currentContribution?.owner : member?.github}
                                    placeholder={"Owner's Github User Name"}
                                    onChange={async (e) => {
                                        setgituser(e.target.value)
                                    }} />
                                <div className='update__buttons'>
                                    <button onClick={async (e) => {
                                        dispatch(setCurrentContribution({
                                            owner: gituser,
                                        }))
                                        save(e, open)
                                        if (!globalchange)
                                            setglobalchange(true);
                                    }} className='save__upd'>Save</button>
                                    <button onClick={() => setopen(-1)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='update__form__row'>
                            <div className='col1'>
                                <div className='left__upd'>Owner's Github</div>
                                <div className='right__upd'>{contributions.currentContribution?.owner ? contributions.currentContribution?.owner : member?.github}</div>
                                <div onClick={() => setopen('gitname')} className='right__corner__wrapper'>
                                    <span className='right__corner'>Edit</span>
                                </div>
                            </div>
                        </div >}

                    {(open === 'name')
                        ?
                        <div className='update__form__row update__open'>
                            <div className='left__upd'>Repo-Name</div>
                            <div className='right__upd'>
                                <input type={'text'} placeholder={'Github Repo Name'} defaultValue={contributions.currentContribution?.repo && contributions.currentContribution?.repo}
                                    onChange={async (e) => {
                                        setreponame(e.target.value)
                                        if (repoverf)
                                            setrepoverf(false)
                                    }} />
                                <div className='update__buttons'>
                                    <button onClick={async (e) => repoverification(e)} className='save__upd'>{repoverf ? 'Save' : 'Verify'}</button>
                                    <button onClick={() => setopen(-1)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='update__form__row'>
                            <div className='col1'>
                                <div className='left__upd'>Repo-Name</div>
                                <div className='right__upd'>{contributions.currentContribution?.repo ? contributions.currentContribution?.repo : '🤷'}</div>
                                <div onClick={() => setopen('name')} className='right__corner__wrapper'>
                                    <span className='right__corner'>Edit</span>
                                </div>
                            </div>
                        </div >}

                    {/* Idea: how SSDC helped you for this? */}
                    {(open === 'help')
                        ?
                        <div className='update__form__row update__open'>
                            <div className='left__upd'>How SSDC....</div>
                            <div className='right__upd'>
                                <textarea onChange={(e) => {
                                    setssdcContri(e.target.value)
                                }} placeholder='How SSDC helps you doing this....(mentors, environment, culture, etc.)' defaultValue={contributions.currentContribution?.ssdcContri && contributions.currentContribution?.ssdcContri} />
                                <div className='update__buttons'>
                                    <button onClick={(e) => {
                                        dispatch(setCurrentContribution({
                                            ssdcContri: ssdcContri
                                        }))
                                        save(e, open)
                                        if (!globalchange)
                                            setglobalchange(true);
                                    }} className='save__upd'>Save</button>
                                    <button onClick={() => setopen(-1)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='update__form__row'>
                            <div className='col1'>
                                <div className='left__upd'>How SSDC...</div>
                                <div className='right__upd'>{contributions.currentContribution?.ssdcContri ? contributions.currentContribution?.ssdcContri : '🤷'}</div>
                                <div onClick={() => setopen('help')} className='right__corner__wrapper'>
                                    <span className='right__corner'>Edit</span>
                                </div>
                            </div>
                        </div >
                    }
                    <div className='button__wrapper'>
                        <button disabled={(!member?.github && !contributions.currentContribution?.owner) || !contributions.currentContribution?.repo || !contributions.currentContribution?.ssdcContri} className={(globalchange && !((!member.github && !contributions.currentContribution?.owner) || !contributions.currentContribution?.repo || !contributions.currentContribution?.ssdcContri)) ? '' : 'nochange'} onClick={globalchange ? requestContribution : undefined}>Submit Request</button>
                    </div>
                </>
            }
        </div>
    )
}

export default ContributeForm
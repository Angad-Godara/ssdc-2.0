import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../Features/userSlice'
import './ProfileUpdateForm.css'
import { CgAdd } from 'react-icons/cg'

function ProfileUpdateForm() {

    const user = useSelector(selectUser);

    const [name, setname] = useState(user?.username);
    const [open, setopen] = useState(-1);

    const save = (e, target) => {
        e.preventDefault();
        console.log(target);
        setopen(-1);
    }

    return (
        <div className='ProfileUpdateForm'>
            <div className='update__form__title'>Basic Info</div>
            {(open == 'name')
                ?
                <div className='update__form__row update__open'>
                    <div className='left__upd'>Name</div>
                    <div className='right__upd'>
                        <input type={'text'} defaultValue={user?.username} />
                        <div className='update__buttons'>
                            <button onClick={(e) => save(e, open)} className='save__upd'>Save</button>
                            <button onClick={() => setopen(-1)}>Cancel</button>
                        </div>
                    </div>
                </div>
                :
                <div className='update__form__row'>
                    <div className='col1'>
                        <div className='left__upd'>Name</div>
                        <div className='right__upd'>{user.username}</div>
                        <div onClick={() => setopen('name')} className='right__corner__wrapper'>
                            <span className='right__corner'>Edit</span>
                        </div>
                    </div>
                </div >
            }

            {(open == 'gender')
                ?
                <div className='update__form__row update__open'>
                    <div className='left__upd'>Gender</div>
                    <div className='right__upd'>
                        <select type={'text'} defaultValue={'male'}>
                            <option value={'male'} >Male</option>
                            <option value={'female'} >Female</option>
                            <option value={'other'} >Other</option>
                        </select>
                        <div className='update__buttons'>
                            <button onClick={(e) => save(e, open)} className='save__upd'>Save</button>
                            <button onClick={() => setopen(-1)}>Cancel</button>
                        </div>
                    </div>
                </div>
                :
                <div className='update__form__row'>
                    <div className='col1'>
                        <div className='left__upd'>Gender</div>
                        <div className='right__upd'>{'Male'}</div>
                        <div onClick={() => setopen('gender')} className='right__corner__wrapper'>
                            <span className='right__corner'>Edit</span>
                        </div>
                    </div>
                </div >
            }
            {(open == 'aim')
                ?
                <div className='update__form__row update__open'>
                    <div className='left__upd'>Summary</div>
                    <div className='right__upd'>
                        <textarea placeholder='Tell us about yourself (interests, experience, etc.)' />
                        <div className='update__buttons'>
                            <button onClick={(e) => save(e, open)} className='save__upd'>Save</button>
                            <button onClick={() => setopen(-1)}>Cancel</button>
                        </div>
                    </div>
                </div>
                :
                <div className='update__form__row'>
                    <div className='col1'>
                        <div className='left__upd'>Summary</div>
                        <div className='right__upd'>{user.username}</div>
                        <div onClick={() => setopen('aim')} className='right__corner__wrapper'>
                            <span className='right__corner'>Edit</span>
                        </div>
                    </div>
                </div >
            }
            {(open == 'lkd')
                ?
                <div className='update__form__row update__open'>
                    <div className='left__upd'>LinkedIn Profile</div>
                    <div className='right__upd'>
                        <input type={'text'} placeholder='LinkedIn profile link' />
                        <div className='update__buttons'>
                            <button onClick={(e) => save(e, open)} className='save__upd'>Save</button>
                            <button onClick={() => setopen(-1)}>Cancel</button>
                        </div>
                    </div>
                </div>
                :
                <div className='update__form__row'>
                    <div className='col1'>
                        <div className='left__upd'>LinkedIn Profile</div>
                        <div className='right__upd'>{user.username}</div>
                        <div onClick={() => setopen('lkd')} className='right__corner__wrapper'>
                            <span className='right__corner'>Edit</span>
                        </div>
                    </div>
                </div >
            }

            {(open == 'git')
                ?
                <div className='update__form__row update__open'>
                    <div className='left__upd'>Github Profile</div>
                    <div className='right__upd'>
                        <input type={'text'} placeholder='Github profile link' />
                        <div className='update__buttons'>
                            <button onClick={(e) => save(e, open)} className='save__upd'>Save</button>
                            <button onClick={() => setopen(-1)}>Cancel</button>
                        </div>
                    </div>
                </div>
                :
                <div className='update__form__row'>
                    <div className='col1'>
                        <div className='left__upd'>Github Profile</div>
                        <div className='right__upd'>{user.username}</div>
                        <div onClick={() => setopen('git')} className='right__corner__wrapper'>
                            <span className='right__corner'>Edit</span>
                        </div>
                    </div>
                </div >
            }

            {(open == 'ltc')
                ?
                <div className='update__form__row update__open'>
                    <div className='left__upd'>Leetcode Profile</div>
                    <div className='right__upd'>
                        <input type={'text'} placeholder='Leetcode profile link' />
                        <div className='update__buttons'>
                            <button onClick={(e) => save(e, open)} className='save__upd'>Save</button>
                            <button onClick={() => setopen(-1)}>Cancel</button>
                        </div>
                    </div>
                </div>
                :
                <div className='update__form__row'>
                    <div className='col1'>
                        <div className='left__upd'>Leetcode Profile</div>
                        <div className='right__upd'>{user.username}</div>
                        <div onClick={() => setopen('ltc')} className='right__corner__wrapper'>
                            <span className='right__corner'>Edit</span>
                        </div>
                    </div>
                </div >
            }

            {(open == 'cc')
                ?
                <div className='update__form__row update__open'>
                    <div className='left__upd'>Codechef Profile</div>
                    <div className='right__upd'>
                        <input type={'text'} placeholder='Codechef profile link' />
                        <div className='update__buttons'>
                            <button onClick={(e) => save(e, open)} className='save__upd'>Save</button>
                            <button onClick={() => setopen(-1)}>Cancel</button>
                        </div>
                    </div>
                </div>
                :
                <div className='update__form__row'>
                    <div className='col1'>
                        <div className='left__upd'>Codechef Profile</div>
                        <div className='right__upd'>{user.username}</div>
                        <div onClick={() => setopen('cc')} className='right__corner__wrapper'>
                            <span className='right__corner'>Edit</span>
                        </div>
                    </div>
                </div >
            }

            {(open == 'cf')
                ?
                <div className='update__form__row update__open'>
                    <div className='left__upd'>Codeforces Profile</div>
                    <div className='right__upd'>
                        <input type={'text'} placeholder='Codeforces profile link' />
                        <div className='update__buttons'>
                            <button onClick={(e) => save(e, open)} className='save__upd'>Save</button>
                            <button onClick={() => setopen(-1)}>Cancel</button>
                        </div>
                    </div>
                </div>
                :
                <div className='update__form__row'>
                    <div className='col1'>
                        <div className='left__upd'>Codeforces Profile</div>
                        <div className='right__upd'>{user.username}</div>
                        <div onClick={() => setopen('cf')} className='right__corner__wrapper'>
                            <span className='right__corner'>Edit</span>
                        </div>
                    </div>
                </div >
            }

            {(open == 'web')
                ?
                <div className='update__form__row update__open'>
                    <div className='left__upd'>Website</div>
                    <div className='right__upd'>
                        <input type={'text'} placeholder='Your blog, portfolio, etc.' />
                        <div className='update__buttons'>
                            <button onClick={(e) => save(e, open)} className='save__upd'>Save</button>
                            <button onClick={() => setopen(-1)}>Cancel</button>
                        </div>
                    </div>
                </div>
                :
                <div className='update__form__row'>
                    <div className='col1'>
                        <div className='left__upd'>Website</div>
                        <div className='right__upd'>{user.username}</div>
                        <div onClick={() => setopen('web')} className='right__corner__wrapper'>
                            <span className='right__corner'>Edit</span>
                        </div>
                    </div>
                </div >
            }


            {/* ACADEMICS */}

            <div className='update__form__title'>Academics</div>
            {(open == 'branch')
                ?
                <div className='update__form__row update__open'>
                    <div className='left__upd'>Branch</div>
                    <div className='right__upd'>
                        <select type={'text'} defaultValue={'GCS'}>
                            <option value={'GCS'} >GCS</option>
                            <option value={'GEC'} >GEC</option>
                            <option value={'GEE'} >GEE</option>
                            <option value={'GIN'} >GIN</option>
                            <option value={'GCH'} >GCH</option>
                            <option value={'GFT'} >GFT</option>
                            <option value={'GME'} >GME</option>
                        </select>
                        <div className='update__buttons'>
                            <button onClick={(e) => save(e, open)} className='save__upd'>Save</button>
                            <button onClick={() => setopen(-1)}>Cancel</button>
                        </div>
                    </div>
                </div>
                :
                <div className='update__form__row'>
                    <div className='col1'>
                        <div className='left__upd'>Branch</div>
                        <div className='right__upd'>{user.username}</div>
                        <div onClick={() => setopen('branch')} className='right__corner__wrapper'>
                            <span className='right__corner'>Edit</span>
                        </div>
                    </div>
                </div >
            }
            {(open == 'regd')
                ?
                <div className='update__form__row update__open'>
                    <div className='left__upd'>Registration No.</div>
                    <div className='right__upd'>
                        <input type={'text'} placeholder="SLIET's Registeration No" />
                        <div className='update__buttons'>
                            <button onClick={(e) => save(e, open)} className='save__upd'>Save</button>
                            <button onClick={() => setopen(-1)}>Cancel</button>
                        </div>
                    </div>
                </div>
                :
                <div className='update__form__row'>
                    <div className='col1'>
                        <div className='left__upd'>Registration No.</div>
                        <div className='right__upd'>{user.username}</div>
                        <div onClick={() => setopen('regd')} className='right__corner__wrapper'>
                            <span className='right__corner'>Edit</span>
                        </div>
                    </div>
                </div >
            }

            {/* Technical Skils */}

            {/* <div className='update__form__title'>Skills</div>
            {(open == 'skills')
                ?
                <div className='update__form__row update__open'>
                    <div className='left__upd'>Technical Skills</div>
                    <div className='right__upd'>
                        <div className='skills'>
                            <input type='text' placeholder='skill' />
                            <select type={'text'} defaultValue={'Intermediate'}>
                                <option value={'Conversant'} >Conversant</option>
                                <option value={'Beginner'} >Beginner</option>
                                <option value={'Intermediate'} >Intermediate</option>
                                <option value={'Advanced'} >Advanced</option>
                            </select>
                        </div>
                        <div className='update__buttons'>
                            <button onClick={(e) => save(e, open)} className='save__upd'>Save</button>
                            <button onClick={() => setopen(-1)}>Cancel</button>
                        </div>
                    </div>
                </div>
                :
                <div className='update__form__row'>
                    <div className='col1'>
                        <div className='left__upd'>Skills</div>
                        <div className='skills__show'>
                            <span className='skill'>Data Structures and algorithms</span>
                            <span className='level'>Intermediate</span>
                            <CgAdd className='add__skill' onClick={() => setopen('skills')} size={'20px'} />
                        </div>
                        <div onClick={() => setopen('skills')} className='right__corner__wrapper'>
                            <span className='right__corner'>Edit</span>
                        </div>
                    </div>
                </div >
            } */}


        </div >
    )
}

export default ProfileUpdateForm
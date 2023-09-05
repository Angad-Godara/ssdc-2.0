import React from 'react'
import './Navbar.css'
import { useEffect, useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../Features/userSlice'
import { BiExit } from 'react-icons/bi'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { auth } from '../../firebase'
import { selectUserMenu, open, brgrOpen, brgrClose } from '../../Features/userMenu'
import { selectMember } from '../../Features/isMemberSlice'
import { AiOutlineClose } from 'react-icons/ai'

function Navbar() {

    const [sw, setsw] = useState(window.screen.width)
    const user = useSelector(selectUser)
    const member = useSelector(selectMember)
    const { userMenu, brgrMenu } = useSelector(selectUserMenu)
    const dispatch = useDispatch();

    useEffect(() => {
        setsw(window.screen.width);
    }, [sw, userMenu])

    const Logout = (e) => {
        auth.signOut();
    }

    return (
        <>
            <div className='nav__container'>
                <div className='options__container'>
                    <div className='nav__options'>
                        <Link to='/' className='nav__option'>
                            <img className='nav__logo' src={'./logo.png'} alt='logo' />
                        </Link>
                        <div className='nav__option'>
                            <Link to={user ? "/explore" : '/home'} className="option__link">Explore</Link>
                        </div>
                        <div className='nav__option'>
                            <Link to="/team" className="option__link">Team</Link>
                        </div>
                        <div className='nav__option'>
                            <Link to="/projects" className="option__link">Projects</Link>
                        </div>
                        <div className='nav__option'>
                            <Link to="/alumni" className="option__link">Alumni</Link>
                        </div>
                        <div className='nav__option'>
                            <Link to="/contests" className="option__link">Contests</Link>
                        </div>
                    </div>
                    <div className='nav__member'>
                        {
                            (!user || user?.mstatus === 'Applied' || user?.mstatus === 'verified' || user?.mstatus === 'alm__verified' || user?.mstatus === 'core__verified')
                                ?
                                <></>
                                :
                                <div style={{ marginRight: '10px' }}>
                                    <Link to='/alumniform' className='nav__member__option'>
                                        <AiOutlineStar size={sw < 450 ? '10px' : (sw > 300 ? '12px' : '7px')} />
                                        <span style={{ paddingBottom: '2px' }} className='nav__member__option__link'>Alumni</span>
                                    </Link>
                                </div>
                        }
                        {
                            (!user || user?.mstatus === 'Applied' || user?.mstatus === 'verified' || user?.mstatus === 'alm__verified' || user?.mstatus === 'core__verified')
                                ?
                                <></>
                                :
                                <div style={{ marginRight: '10px' }}>
                                    <Link to='/form' className='nav__member__option'>
                                        <AiOutlineStar size={sw < 450 ? '10px' : (sw > 300 ? '12px' : '7px')} />
                                        <span style={{ paddingBottom: '2px' }} className='nav__member__option__link'>Members</span>
                                    </Link>
                                </div>
                        }

                    </div>
                    {(user)
                        ?
                        <div className='user'>
                            <img onClick={() => dispatch(open(!userMenu))} src={user?.photoURL} alt='U' />
                            <div className={userMenu ? 'drop__menu__arrow' : 'hide__arrow'}></div>
                            <ul className={userMenu ? 'user__menu__wrapper open__menu' : ' user__menu__wrapper'}>
                                <Link to='/user'>
                                    <li className='user__info'>
                                        <div>
                                            <img className='drop__item__logo' src={user?.photoURL} alt='U' />
                                            <p className='drop__item__text'>{member?.name ? member?.name : user?.username}</p>
                                        </div>
                                    </li>
                                </Link>
                                <Link to='/privacy'>
                                    <li className='drop__item'>
                                        <MdOutlinePrivacyTip className='drop__item__logo' size={20} />
                                        <p className='drop__item__text'>Privacy Policy</p>
                                    </li>
                                </Link>
                                <li onClick={Logout} className='drop__item'>
                                    <BiExit className='drop__item__logo' size={20} />
                                    <p className='drop__item__text'>Log Out</p>
                                </li>
                            </ul>
                        </div>
                        :
                        <></>
                    }
                </div>
                <div className='onsmall'>
                    <div className='onsmall__item'>
                        {user ?
                            <Link to='/user'><img className='onsmall__user' src={user?.photoURL} alt='U' /></Link>
                            :
                            <>
                            </>
                        }
                    </div>
                    <div className='onsmall__item'>
                        <Link to='/'><img className='nav__logo' src={'./logo.png'} alt='logo' /></Link>
                    </div>
                    <div className='open__brgr__btn'>
                        <GiHamburgerMenu size={'20px'} onClick={() => {
                            dispatch(brgrOpen(!brgrMenu));
                        }} />
                    </div>
                </div>
            </div >

            {/* burger nav starts here */}
            <div className={brgrMenu ? 'brgr__wrapper open__brgr' : 'brgr__wrapper'}>
                <div className='close__icon'>
                    <AiOutlineClose size={'20px'} onClick={() => {
                        dispatch(brgrClose())
                    }} />
                </div>
                <div className='brgr__item'>
                    {(user) ?
                        <Link to='/user'>
                            <img className='brgr__user' src={user?.photoURL} alt='U' />
                            <p><b>{member ? member?.name : user?.username}</b></p>
                        </Link>
                        :
                        <div style={{ textAlign: 'center', margin: '10px 0 10px 0' }}>
                            <Link to='/login' className='login__button'>LogIn</Link>
                            <p>or</p>
                            <Link to='/register' className='login__button'>Sign Up</Link>
                        </div>
                    }
                </div>
                <div className='brgr__item'>
                    <Link to={user ? "/explore" : '/home'} className="option__link">Explore</Link>
                </div>
                <div className='brgr__item'>
                    <Link to="/contests" className="option__link">Contests</Link>
                </div>
                <div className='brgr__item'>
                    <Link to="/team" className="option__link">Team</Link>
                </div>
                <div className='brgr__item'>
                    <Link to="/projects" className="option__link">Projects</Link>
                </div>
                <div className='brgr__item'>
                    <Link to="/alumni" className="option__link">Alumni</Link>
                </div>
                <div className='brgr__item'>
                    <Link to="/privacy" className="option__link">Privacy Policy</Link>
                </div>
                {
                    (!user || user?.mstatus === 'Applied' || user?.mstatus === 'verified' || user?.mstatus === 'alm__verified' || user?.mstatus === 'core__verified')
                        ?
                        <></>
                        :
                        <div className='brgr__item'>
                            <Link to='/alumniform' className='nav__member__option'>
                                <AiOutlineStar size={sw < 450 ? '10px' : (sw > 300 ? '12px' : '7px')} />
                                <span style={{ paddingBottom: '2px' }} className='nav__member__option__link'>Alumni</span>
                            </Link>
                        </div>
                }
                {

                    (!user || user?.mstatus === 'Applied' || user?.mstatus === 'verified' || user?.mstatus === 'alm__verified' || user?.mstatus === 'core__verified')
                        ?
                        <></>
                        :
                        <div className='brgr__item'>
                            <Link to='/form' className='nav__member__option'>
                                <AiOutlineStar size={sw < 450 ? '10px' : (sw > 300 ? '12px' : '7px')} />
                                <span style={{ paddingBottom: '2px' }} className='nav__member__option__link'>Members</span>
                            </Link>
                        </div>
                }

                {(user)
                    ?
                    <div className='brgr__item'>
                        <Link to='#' onClick={Logout} className="option__link">Log Out</Link>
                    </div>
                    :
                    <></>
                }
            </div >

        </>
    )
}

export default Navbar
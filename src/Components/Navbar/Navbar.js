import React from 'react'
import './Navbar.css'
import { useEffect, useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Features/userSlice'
import { BiExit } from 'react-icons/bi'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import { auth } from '../../firebase'

function Navbar() {

    const [sw, setsw] = useState(window.screen.width)
    const user = useSelector(selectUser)
    const [userMenu, setuserMenu] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        setsw(window.screen.width);
    }, [sw, userMenu])

    const Logout = (e) => {
        auth.signOut();
        navigate('/')
    }

    return (
        <div className='nav__container'>
            <div className='options__container'>
                <div className='nav__options'>
                    <div className='nav__option'>
                        <img className='nav__logo' src={'./NewLogoColor.png'} alt='logo' />
                    </div>
                    <div className='nav__option'>
                        <Link to={user ? "/explore" : '/home'} className="option__link">Explore</Link>
                    </div>
                    <div className='nav__option'>
                        <Link to="/team" className="option__link">Team</Link>
                    </div>
                    <div className='nav__option'>
                        <Link to="/" className="option__link">Projects</Link>
                    </div>
                    <div className='nav__option'>
                        <Link to="/" className="option__link">Alumni</Link>
                    </div>
                </div>
                <div className='nav__member'>
                    {
                        user ?
                            <div className='nav__member__option'>
                                <AiOutlineStar size={sw < 450 ? '10px' : (sw > 300 ? '12px' : '7px')} />
                                <span style={{ paddingBottom: '2px' }} className='nav__member__option__link'>Members</span>
                            </div>
                            :
                            <></>
                    }

                </div>
                {(user)
                    ?
                    <div className='user'>
                        <img onClick={() => setuserMenu(!userMenu)} src={user?.photoURL} alt='U' />
                        <div className={userMenu ? 'drop__menu__arrow' : 'hide__arrow'}></div>
                        <ul className={userMenu ? 'user__menu__wrapper open__menu' : ' user__menu__wrapper'}>
                            <li className='user__info'>
                                <div>
                                    <img className='drop__item__logo' src={user?.photoURL} alt='U' />
                                    <p className='drop__item__text'>{user?.username}</p>
                                </div>
                            </li>
                            <li className='drop__item'>
                                <MdOutlinePrivacyTip className='drop__item__logo' size={20} />
                                <p className='drop__item__text'>Privacy Policy</p>
                            </li>
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
        </div >
    )
}

export default Navbar

// Alumni
// Project
// Team
// Explore
// https://leetcode.com/
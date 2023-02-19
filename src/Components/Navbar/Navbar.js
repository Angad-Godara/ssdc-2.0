import React from 'react'
import './Navbar.css'
import { useEffect, useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../Features/userSlice'
import { BiExit } from 'react-icons/bi'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import { auth } from '../../firebase'
import { selectUserMenu, open } from '../../Features/userMenu'
import { selectMember } from '../../Features/isMemberSlice'

function Navbar() {

    const [sw, setsw] = useState(window.screen.width)
    const user = useSelector(selectUser)
    const member = useSelector(selectMember)
    const userMenu = useSelector(selectUserMenu)
    const dispatch = useDispatch();

    useEffect(() => {
        setsw(window.screen.width);
    }, [sw, userMenu])

    const Logout = (e) => {
        auth.signOut();
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
                        <Link to="/projects" className="option__link">Projects</Link>
                    </div>
                    <div className='nav__option'>
                        <Link to="/alumni" className="option__link">Alumni</Link>
                    </div>
                </div>
                <div className='nav__member'>
                    {
                        (!user || user?.mstatus === 'Applied' || user?.mstatus === 'verified')
                            ?
                            <></>
                            :
                            <Link to='/form' className='nav__member__option'>
                                <AiOutlineStar size={sw < 450 ? '10px' : (sw > 300 ? '12px' : '7px')} />
                                <span style={{ paddingBottom: '2px' }} className='nav__member__option__link'>Members</span>
                            </Link>
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
                                        <p className='drop__item__text'>{member ? member?.name : user?.username}</p>
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
        </div >
    )
}

export default Navbar
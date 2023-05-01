import React from "react";
import { useState, useEffect, useRef } from "react";
import "./ContestScreen.css";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment/moment";
import Footer from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../Features/userSlice";
import { auth } from "../../firebase";
import ImageSlider from "../Carousel/ImageSlider";
import { RingLoader } from "react-spinners";
import { brgrOpen, brgrClose, selectUserMenu } from '../../Features/userMenu'
import { AiOutlineClose } from 'react-icons/ai'

function ContestScreen() {
  const [loading, setloading] = useState(true);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const [contests, setContests] = useState([]);
  const [query, setquery] = useState("all");
  const [contestFilter, setcontestFilter] = useState("All Contests");
  const [filterMenuOpen, setFilterMenuOpen] = useState(0);
  const filterMenuRef = useRef();
  const dispatch = useDispatch();
  const { brgrMenu } = useSelector(selectUserMenu)

  useEffect(() => {
    const getContests = async (siteName) => {
      setloading(true);
      try {
        const response = await fetch("https://kontests.net/api/v1/" + siteName);
        const data = await response.json();
        const cntst = data.map((contest) => ({
          name: contest.name,
          link: contest.url,
          start_time: contest?.start_time,
          duration: contest.duration,
          status: contest.status,
        }));
        setContests(cntst);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };

    let closeFilterOnOutSideClick = (e) => {
      if (!filterMenuRef.current.contains(e.target)) {
        setFilterMenuOpen(0);
      }
    };
    document.addEventListener("mousedown", closeFilterOnOutSideClick);

    getContests(query);
  }, [query]);

  const Logout = (e) => {
    setloading(true);
    e.preventDefault();
    if (user) {
      auth.signOut();
    } else {
      navigate("/login");
    }
    setloading(false);
  };

  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h === 1 ? " hour " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute " : " minutes ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
  }

  return (
    <div className="ContestScreen">
      <>
        <div className="landing__page__header">
          <div className="landing__background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="inner">
            <div className="landing__nav">
              <img
                className="landing__nav__logo"
                alt="Loading"
                src="https://raw.githubusercontent.com/Angad-Godara/ssdc-web-dev/main/public/ssdcLogo.jpg"
              />
              <div className="landing__nav__list">
                <Link to="/" className="landing__nav__list__item">
                  Explore
                </Link>
                <Link to="/contests" className="landing__nav__list__item">
                  Contests
                </Link>
                <Link to="/team" className="landing__nav__list__item">
                  Team
                </Link>
                <Link
                  to={user ? "/" : "/login"}
                  onClick={Logout}
                  className="landing__nav__list__item"
                >
                  {user ? "LogOut" : "SignIn"}
                </Link>
              </div>
              <div onClick={() => dispatch(brgrOpen(!brgrMenu))} className='landing__nav__list__item hms__brgr__open'>Menu</div>
            </div>
            <ImageSlider use={"contest"} />
          </div>
        </div>
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
          {(user)
            ?
            <div div className='brgr__item'>
              <Link to='#' onClick={Logout} className="option__link">Log Out</Link>
            </div>
            :
            <></>
          }
        </div >
      </>
      <div className="contest__table">
        <div className="list__buttons">
          <button
            className={query === "all" ? "active__button" : ""}
            onClick={() => setquery("all")}
          >
            ALL
          </button>
          <button
            className={query === "codeforces" ? "active__button" : ""}
            onClick={() => setquery("codeforces")}
          >
            Codeforces
          </button>
          <button
            className={query === "code_chef" ? "active__button" : ""}
            onClick={() => setquery("code_chef")}
          >
            Codechef
          </button>
          <button
            className={query === "leet_code" ? "active__button" : ""}
            onClick={() => setquery("leet_code")}
          >
            LeetCode
          </button>
          <button
            className={query === "hacker_earth" ? "active__button" : ""}
            onClick={() => setquery("hacker_earth")}
          >
            Hacker Earth
          </button>
        </div>
        <div className="dropdown" ref={filterMenuRef}>
          <button
            className="dropbtn"
            onClick={() => setFilterMenuOpen(!filterMenuOpen)}
          >
            {contestFilter} <span className="ham"></span>
          </button>
          <div
            className="dropdown-content"
            style={{ display: filterMenuOpen ? "block" : "none" }}
          >
            <button
              className={query === `all` ? `active__button` : ""}
              onClick={() => {
                setcontestFilter("All Contests");
                setquery("all");
                setFilterMenuOpen(0);
              }}
            >
              All Contests
            </button>
            <button
              className={query === `codeforces` ? `active__button` : ""}
              onClick={() => {
                setcontestFilter("Codeforces");
                setquery("codeforces");
                setFilterMenuOpen(0);
              }}
            >
              Codeforces
            </button>
            <button
              className={query === `code_chef` ? `active__button` : ""}
              onClick={() => {
                setcontestFilter("CodeChef");
                setquery("code_chef");
                setFilterMenuOpen(0);
              }}
            >
              Codechef
            </button>
            <button
              className={query === `leet_code` ? `active__button` : ""}
              onClick={() => {
                setcontestFilter("LeetCode");
                setquery("leet_code");
                setFilterMenuOpen(0);
              }}
            >
              LeetCode
            </button>
            <button
              className={query === `hacker_earth` ? `active__button` : ""}
              onClick={() => {
                setcontestFilter("HackerEarth");
                setquery("hacker_earth");
                setFilterMenuOpen(0);
              }}
            >
              Hacker Earth
            </button>
          </div>
        </div>

        <div className="table__wrapper">
          {loading ? (
            <div className="contest__spinner__wrapper">
              <RingLoader color="#37474f" />
            </div>
          ) : (
            <div className="table">
              {contests.map(
                ({ name, link, start_time, duration, status }, i) => {
                  return (
                    <div key={link + i} className="list__row">
                      <span className="grid__item">
                        {moment(start_time).format("MMMM Do YYYY, h:mm:ss a")}
                      </span>
                      <a
                        className="contest__link grid__item"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {name}
                      </a>
                      <span className="grid__item">
                        {secondsToHms(duration)}
                      </span>
                      {status === "CODING" ? (
                        <span
                          className="grid__item"
                          style={{
                            color: "rgb(255, 51, 0)",
                            fontWeight: "500",
                          }}
                        >
                          It's Live
                        </span>
                      ) : (
                        <span
                          className="grid__item"
                          style={{ color: "#009933", fontWeight: "500" }}
                        >
                          You're Early
                        </span>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContestScreen;

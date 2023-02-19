import './App.css';
import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Register from './Components/Register/Register';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import ContestScreen from './Components/ContestScreen/ContestScreen'
import { auth } from './firebase';
import { logout, login, selectUser } from './Features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import User from './Components/User/User';
import db from './firebase';
import Explore from './Components/Explore/Explore';
import Team from './Components/Team/Team';
import Form from './Components/Form/Form';
import { selectUserMenu, close } from './Features/userMenu'
import VerifyEmail from './Components/Register/VerifyEmail';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import { setMember } from './Features/isMemberSlice';
import { setCore, setMembers, setFaculties, setMentors } from './Features/teamSlice';
import ForgotPassword from './Components/Login/ForgotPassword';
import Projects from './Components/Projects/Projects';
import Alumni from './Components/Team/Alumni';

function App() {

  const dispatch = useDispatch();
  const userMenu = useSelector(selectUserMenu)
  const user = useSelector(selectUser)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {

        // fetching user from db
        db
          .collection('users')
          .doc(authUser?.uid)
          .onSnapshot(snap => {
            dispatch(login({
              uid: authUser?.uid,
              photoURL: snap.data()?.photoURL,
              username: snap.data()?.username,
              email: snap.data()?.email,
              mstatus: snap.data()?.mstatus,
            }))

            if (snap.data()?.mstatus === 'verified') {
              db
                .collection('members')
                .doc(authUser?.uid)
                .onSnapshot(snap => {
                  dispatch(setMember({
                    aim: snap.data()?.aim,
                    branch: snap.data()?.branch,
                    email: snap.data()?.email,
                    gender: snap.data()?.gender,
                    github: snap.data()?.github,
                    linkedin: snap.data()?.linkedin,
                    name: snap.data()?.name,
                    photoURL: snap.data()?.photoURL,
                    post: snap.data()?.post,
                    regd: snap.data()?.regd,
                    web: snap.data()?.web,
                    leetcode: snap.data().leetcode,
                    codechef: snap.data().codechef,
                    codeforces: snap.data().codeforces,
                  }))
                })
            }

          })

      } else {
        dispatch(logout())
      }
    })

    const fetchTeam = () => {
      db
        .collection('core')
        .onSnapshot(snapshot => {
          dispatch(setCore(snapshot.docs.map((snap) => ({
            aim: snap.data().aim,
            github: snap.data().github,
            linkedin: snap.data().linkedin,
            email: snap.data().email,
            name: snap.data().name,
            photoURL: snap.data().photoURL,
          }))))
        })


      //  change this to 'member for card changes into admin hands else leave it
      db
        .collection('members')
        .onSnapshot(snapshot => {
          dispatch(setMembers(snapshot.docs.map((snap) => ({
            aim: snap.data().aim,
            github: snap.data().github,
            linkedin: snap.data().linkedin,
            email: snap.data().email,
            name: snap.data().name,
            photoURL: snap.data().photoURL,
          }))))
        })

      db
        .collection('faculties')
        .onSnapshot(snapshot => {
          dispatch(setFaculties(snapshot.docs.map((snap) => ({
            aim: snap.data().aim,
            contact: snap.data().contact,
            web: snap.data().web,
            email: snap.data().email,
            name: snap.data().name,
            post: snap.data().post,
            photoURL: snap.data().photoURL,
          }))))
        })

      db
        .collection('faculties')
        .onSnapshot(snapshot => {
          dispatch(setMentors(snapshot.docs.map((snap) => ({
            aim: snap.data().aim,
            github: snap.data().github,
            linkedin: snap.data().linkedin,
            email: snap.data().email,
            name: snap.data().name,
            photoURL: snap.data().photoURL,
          }))))
        })
    }

    return unsubscribe, fetchTeam;
  }, [])

  return (
    <div onClick={() => {
      if (userMenu)
        dispatch(close())
    }} className="App">
      {(!user)
        ?
        <Routes>
          <Route exact path="/register" element={
            <div className='login__register'>
              <Navbar />
              <Register />
              <Footer />
            </div>
          } />
          <Route exact path="/login" element={
            <div className='login__register'>
              <Navbar />
              <Login />
              <Footer />
            </div>
          } />
          <Route path="/home" element={
            <HomeScreen />
          } />
          <Route path="/team" element={
            <>
              <Navbar />
              <Team />
            </>
          } />
          <Route path="/alumni" element={
            <>
              <Navbar />
              <Alumni />
            </>
          } />
          <Route path="/contests" element={
            <ContestScreen />
          } />
          <Route
            path="*"
            element={<Navigate to="/home" />}
          />
          <Route path="/privacy" element={
            <>
              <PrivacyPolicy />
            </>
          } />
          <Route path="/projects" element={
            <>
              <Projects />
            </>
          } />
          <Route path='/forgotpassword' element={
            <>
              <Navbar />
              <ForgotPassword />
            </>
          } />
        </Routes>
        :

        (auth?.currentUser?.emailVerified)
          ?
          <Routes>
            <Route path="/contests" element={
              <ContestScreen />
            } />
            <Route path='/user' element={
              <>
                <Navbar />
                <User />
              </>
            } />
            <Route path="/" element={
              <>
                <Navbar />
                <Explore />
              </>
            } />
            <Route path="/explore" element={
              <>
                <Navbar />
                <Explore />
              </>
            } />
            <Route path="/team" element={
              <>
                <Navbar />
                <Team />
              </>
            } />
            <Route exact path='/form' element={
              <>
                <Navbar />
                <Form />
                <Footer />
              </>
            } />
            <Route path="/privacy" element={
              <>
                <PrivacyPolicy />
              </>
            } />
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
            <Route path="/projects" element={
              <>
                <Navbar />
                <Projects />
              </>
            } />
          </Routes>
          :
          <Routes>
            <Route path='/register' element={
              <>
                <VerifyEmail />
              </>
            } />
            <Route
              path="*"
              element={<Navigate to="/register" />}
            />
          </Routes>

      }
    </div >
  );
}

export default App;
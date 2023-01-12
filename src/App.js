import './App.css';
import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Register from './Components/Register/Register';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import ContestScreen from './Components/ContestScreen/ContestScreen'
import { auth } from './firebase';
import { logout, login } from './Features/userSlice';
import { useDispatch } from 'react-redux';
import User from './Components/User/User';
import db from './firebase';
import Explore from './Components/Explore/Explore';
import Team from './Components/Team/Team';

function App() {

  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // using db
        db
          .collection('users')
          .doc(authUser?.uid)
          .onSnapshot(snap => {
            dispatch(login({
              uid: authUser?.uid,
              photoURL: snap.data().photoURL,
              username: snap.data().username,
              email: snap.data().email
            }))
          })
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [])

  return (
    <div className="App">
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
        <Route path="/contests" element={
          <ContestScreen />
        } />
        <Route path='/user' element={
          <User />
        } />
        <Route path="/" element={
          <HomeScreen />
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
      </Routes>
    </div >
  );
}

export default App;
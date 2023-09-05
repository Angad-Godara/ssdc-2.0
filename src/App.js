import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Register from "./Components/Register/Register";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import ContestScreen from "./Components/ContestScreen/ContestScreen";
import { auth } from "./firebase";
import { logout, login, selectUser } from "./Features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import User from "./Components/User/User";
import Explore from "./Components/Explore/Explore";
import Team from "./Components/Team/Team";
import Form from "./Components/Form/Form";
import { selectUserMenu, close, brgrClose } from "./Features/userMenu";
import VerifyEmail from "./Components/Register/VerifyEmail";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import { setMember } from "./Features/isMemberSlice";
import ForgotPassword from "./Components/Login/ForgotPassword";
import Projects from "./Components/Projects/Projects";
import { setProjects } from "./Features/projectsSlice";
import Alumni from "./Components/Team/Alumni";
import { SyncLoader } from "react-spinners";
import AlumniForm from "./Components/Form/AlumniForm";

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  const { userMenu, brgrMenu } = useSelector(selectUserMenu);
  const user = useSelector(selectUser);

  useEffect(() => {

    // To fetch Team: No login required------------------------------------------
    // const fetchTeam = async () => {
    //   const getTeam = await fetch(
    //     `${process.env.REACT_APP_SERVER}/open/getCore`,
    //     {
    //       method: "GET",
    //     }
    //   );
    //   // Status handlling to be added later---
    //   const resTeam = await getTeam.json();
    //   dispatch(
    //     setCore(
    //       resTeam?.map((snap) => ({
    //         aim: snap.aim,
    //         github: snap.github,
    //         linkedin: snap.linkedin,
    //         email: snap.email,
    //         name: snap.name,
    //         photoURL: snap.photoURL,
    //         headPost: snap.headPost,
    //       }))
    //     )
    //   );

    //   //  change this to 'member for card changes into admin hands else leave it

    //   // To fetch Members: No login required----------------------------------------
    //   const getMembers = await fetch(
    //     `${process.env.REACT_APP_SERVER}/open/getMembers`,
    //     {
    //       method: "GET",
    //     }
    //   );

    //   const resMembers = await getMembers.json();
    //   dispatch(setMembers(
    //     resMembers.map((snap) => ({
    //       aim: snap.aim,
    //       github: snap.github,
    //       linkedin: snap.linkedin,
    //       email: snap.email,
    //       name: snap.name,
    //       photoURL: snap.photoURL,
    //     })))
    //   )

    //     // To fetch Faculties: No login required-------------------------------------
    //   const getFaculties = await fetch(`${process.env.REACT_APP_SERVER}/open/getFaculties`, {
    //     method: "GET"
    //   })

    //   const resFaculties = await getFaculties.json();
    //   dispatch(
    //     setFaculties(
    //       resFaculties.map((snap) => ({
    //         aim: snap.aim,
    //         contact: snap.contact,
    //         web: snap.web,
    //         email: snap.email,
    //         name: snap.name,
    //         post: snap.post,
    //         photoURL: snap.photoURL,
    //       }))
    //     )
    //   );

    //     // to fetch Mentors: No login required------------------------------------------
    //   const getMentors = await fetch(`${process.env.REACT_APP_SERVER}/open/getMentors`, {
    //     method: "GET"
    //   })

    //   const resMentors = await getMentors.json();
    //   dispatch(
    //     setMentors(
    //       resMentors.map((snap) => ({
    //           aim: snap.aim,
    //           github: snap.github,
    //           linkedin: snap.linkedin,
    //           email: snap.email,
    //           name: snap.name,
    //           photoURL: snap.photoURL,
    //       }))
    //     )
    //   )

    //     // To fetch Alumnis: No login required---------------------------------------
    //   const getAlumnis = await fetch(`${process.env.REACT_APP_SERVER}/open/getAlumnis`, {
    //     method: "GET"
    //   })

    //   const resAlumnis = await getAlumnis.json();
    //   dispatch(
    //     setAlumni(
    //       resAlumnis.map((snap) => ({
    //         aim: snap.aim,
    //           passoutYear: snap.passoutYear,
    //           linkedin: snap.linkedin,
    //           email: snap.email,
    //           name: snap.name,
    //           photoURL: snap.photoURL,
    //           post: snap.post,
    //           github: snap.github,
    //       }))
    //     )
    //   )
    // };

    // to fetch projects: No login required---------------------------------------------
    // const fetchProjects = async () => {
    //   const getProjects = await fetch(`${process.env.REACT_APP_SERVER}/open/getProjects`, {
    //     method: "GET"
    //   })

    //   const resProjects = await getProjects.json();
    //   dispatch(
    //     setProjects(
    //       resProjects.map((snap) => ({
    //         owner: snap.owner,
    //         repo: snap.repo,
    //       }))
    //     )
    //   )
    // };

    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      setloading(true);

      if (authUser) {
        // fetching user from db
        if (!localStorage.getItem("jwttoken") || (localStorage.getItem("jwttoken") && !user)) {
          const token = await fetch(`${process.env.REACT_APP_SERVER}/auth/login`, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              uuid: authUser.uid
            })
          })

          const jwtTokenData = await token.json();
          dispatch(
            login({
              uid: authUser?.uid,
              photoURL: jwtTokenData?.photoURL,
              username: jwtTokenData?.username,
              email: jwtTokenData?.email,
              mstatus: jwtTokenData?.mstatus,
            }))
          localStorage.setItem("jwttoken", jwtTokenData.authtoken)
        }

        // db.collection("users")
        //   .doc(authUser?.uid)
        //   .onSnapshot((snap) => {
        //     dispatch(
        //       login({
        //         uid: authUser?.uid,
        //         photoURL: snap.data()?.photoURL,
        //         username: snap.data()?.username,
        //         email: snap.data()?.email,
        //         mstatus: snap.data()?.mstatus,
        //       })
        //     );

        //     if (snap.data()?.mstatus === "verified") {
        //       db.collection("members")
        //         .doc(authUser?.uid)
        //         .onSnapshot((snap) => {
        //           dispatch(
        //             setMember({
        //               aim: snap.data()?.aim,
        //               branch: snap.data()?.branch,
        //               email: snap.data()?.email,
        //               gender: snap.data()?.gender,
        //               github: snap.data()?.github,
        //               linkedin: snap.data()?.linkedin,
        //               name: snap.data()?.name,
        //               photoURL: snap.data()?.photoURL,
        //               post: snap.data()?.post,
        //               regd: snap.data()?.regd,
        //               web: snap.data()?.web,
        //               leetcode: snap.data()?.leetcode,
        //               codechef: snap.data()?.codechef,
        //               codeforces: snap.data()?.codeforces,
        //             })
        //           );
        //         });
        //     }

        //     if (snap.data()?.mstatus === "alm__verified") {
        //       db.collection("alumnis")
        //         .doc(authUser?.uid)
        //         .onSnapshot((snap) => {
        //           dispatch(
        //             setMember({
        //               aim: snap.data()?.aim,
        //               branch: snap.data()?.branch,
        //               email: snap.data()?.email,
        //               gender: snap.data()?.gender,
        //               github: snap.data()?.github,
        //               linkedin: snap.data()?.linkedin,
        //               name: snap.data()?.name,
        //               photoURL: snap.data()?.photoURL,
        //               post: snap.data()?.post,
        //               regd: snap.data()?.regd,
        //               web: snap.data()?.web,
        //               leetcode: snap.data()?.leetcode,
        //               codechef: snap.data()?.codechef,
        //               codeforces: snap.data()?.codeforces,
        //             })
        //           );
        //         });
        //     }
        //   });

        //   console.log(localStorage.getItem("jwttoken"));
      } else {
        dispatch(logout());
      }
      // fetchTeam();
      // fetchProjects();
      setloading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <>
      <div
        onClick={() => {
          if (userMenu) dispatch(close());

          if (brgrMenu) dispatch(brgrClose());
        }}
        className="App"
      >
        {loading ? (
          <div className="spinner__wrapper">
            <SyncLoader color="#37474f" />
          </div>
        ) : !user ? (
          <Routes>
            <Route
              exact
              path="/register"
              element={
                <div className="login__register">
                  <Navbar />
                  <Register />
                  <Footer />
                </div>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <div className="login__register">
                  <Navbar />
                  <Login />
                  <Footer />
                </div>
              }
            />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route
              path="/team"
              element={
                <>
                  <Navbar />
                  <Team />
                </>
              }
            />
            <Route
              path="/alumni"
              element={
                <>
                  <Navbar />
                  <Alumni />
                </>
              }
            />
            <Route path="/contests" element={<ContestScreen />} />
            <Route
              path="/privacy"
              element={
                <>
                  <PrivacyPolicy />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
            <Route
              path="/forgotpassword"
              element={
                <>
                  <Navbar />
                  <ForgotPassword />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <Navbar />
                  <Projects />
                </>
              }
            />
          </Routes>
        ) : auth?.currentUser?.emailVerified ? (
          <Routes>
            <Route path="/contests" element={<ContestScreen />} />
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Explore />
                </>
              }
            />
            <Route
              path="/user"
              element={
                <>
                  <Navbar />
                  <User />
                </>
              }
            />
            <Route
              path="/explore"
              element={
                <>
                  <Navbar />
                  <Explore />
                </>
              }
            />
            <Route
              path="/team"
              element={
                <>
                  <Navbar />
                  <Team />
                </>
              }
            />
            <Route
              path="/alumni"
              element={
                <>
                  <Navbar />
                  <Alumni />
                </>
              }
            />
            <Route
              exact
              path="/form"
              element={
                <>
                  <Navbar />
                  <Form />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/alumniform"
              element={
                <>
                  <Navbar />
                  <AlumniForm />
                  <Footer />
                </>
              }
            />
            <Route
              path="/privacy"
              element={
                <>
                  <PrivacyPolicy />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <Navbar />
                  <Projects />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/register"
              element={
                <>
                  <VerifyEmail />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/register" />} />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;

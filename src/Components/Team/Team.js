import React, { useEffect, useState } from "react";
import "./Team.css";
import Card from "./Card";
import Footer from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { selectTeam } from "../../Features/teamSlice";
import {
  setCore,
  setMembers,
  setFaculties,
  setMentors,
} from "../../Features/teamSlice";
import { SyncLoader } from "react-spinners";

function Team() {
  const dispatch = useDispatch();
  const { mentors, faculties, coreTeam, members } = useSelector(selectTeam);

  useEffect(() => {
    // To fetch Team: No login required------------------------------------------
    const fetchTeam = async () => {
      if (!coreTeam) {
        const getTeam = await fetch(
          `${process.env.REACT_APP_SERVER}/open/getCore`,
          {
            method: "GET",
          }
        );
        // Status handlling to be added later---
        const resTeam = await getTeam.json();
        dispatch(
          setCore(
            resTeam?.map((snap) => ({
              aim: snap.aim,
              github: snap.github,
              linkedin: snap.linkedin,
              email: snap.email,
              name: snap.name,
              photoURL: snap.photoURL,
              headPost: snap.headPost,
            }))
          )
        );
      }

      //  change this to 'member for card changes into admin hands else leave it

      // To fetch Members: No login required----------------------------------------
      if (!members) {
        const getMembers = await fetch(
          `${process.env.REACT_APP_SERVER}/open/getMembers`,
          {
            method: "GET",
          }
        );

        const resMembers = await getMembers.json();
        dispatch(
          setMembers(
            resMembers.map((snap) => ({
              aim: snap.aim,
              github: snap.github,
              linkedin: snap.linkedin,
              email: snap.email,
              name: snap.name,
              photoURL: snap.photoURL,
            }))
          )
        );
      }

      // To fetch Faculties: No login required-------------------------------------

      if (!faculties) {
        const getFaculties = await fetch(
          `${process.env.REACT_APP_SERVER}/open/getFaculties`,
          {
            method: "GET",
          }
        );
        const resFaculties = await getFaculties.json();
        dispatch(
          setFaculties(
            resFaculties.map((snap) => ({
              aim: snap.aim,
              contact: snap.contact,
              web: snap.web,
              email: snap.email,
              name: snap.name,
              post: snap.post,
              photoURL: snap.photoURL,
            }))
          )
        );
      }

      // to fetch Mentors: No login required------------------------------------------
      if (!mentors) {
        const getMentors = await fetch(
          `${process.env.REACT_APP_SERVER}/open/getMentors`,
          {
            method: "GET",
          }
        );

        const resMentors = await getMentors.json();
        dispatch(
          setMentors(
            resMentors.map((snap) => ({
              aim: snap.aim,
              github: snap.github,
              linkedin: snap.linkedin,
              email: snap.email,
              name: snap.name,
              photoURL: snap.photoURL,
            }))
          )
        );
      }
    };

    fetchTeam();
  }, []);

  return (
    <>
      {mentors && faculties && coreTeam && members ? (
        <div className="teamContainer">
          <div className="team__core">
            <h2 className="team__title" style={{ color: "orange" }}>
              Faculty Advisors
            </h2>
            <p>
              Faculty advisors play a crucial role in the success of our club.
              They provide guidance and support to the club's members, help with
              event planning and logistics, and offer valuable insights and
              expertise. With their help, our club creates a more engaging and
              rewarding experience for its members and make a positive impact on
              the college community.
            </p>
            <div className="teamWrapper">
              {faculties?.map((obj, i) => {
                return (
                  <Card
                    key={i}
                    fac={true}
                    aim={obj?.aim}
                    name={obj?.name}
                    web={obj?.web}
                    // contact={obj?.contact}
                    email={obj?.email}
                    photoURL={obj?.photoURL}
                    post={obj?.post}
                  />
                );
              })}
            </div>
          </div>
          <div className="team__core">
            <h2 className="team__title" style={{ color: "red" }}>
              Mentors
            </h2>
            <p>
              {" "}
              Mentors bring real-world experience and expertise to the table,
              and can offer guidance and advice to help club members develop
              their skills and reach their goals. With a mentor's help, club
              members can gain a deeper understanding of the industry, explore
              new technologies and trends, and prepare themselves for successful
              careers in their field of interest.
            </p>
            <div className="teamWrapper">
              {mentors?.map((obj, i) => {
                return (
                  <Card
                    key={i}
                    fac={true}
                    aim={obj?.aim}
                    name={obj?.name}
                    web={obj?.web}
                    contact={obj?.contact}
                    email={obj?.email}
                    photoURL={obj?.photoURL}
                    post={"mentor"}
                    linkedin={obj?.linkedin}
                  />
                );
              })}
            </div>
          </div>
          <div className="team__core">
            <h2 className="team__title">Core Team</h2>
            <p>
              A core team is a group of individuals who are responsible for the
              success of a specific project or club. These individuals typically
              have a specific set of skills and experience that make them
              well-suited for their roles.The core team is responsible for
              making key decisions and ensuring that the club is on track to
              meet its goals.
            </p>
            <div className="teamWrapper">
              {coreTeam &&
                coreTeam.length > 0 &&
                Array.from(coreTeam)
                  ?.sort((a, b) => a.name.localeCompare(b.name))
                  ?.map((obj, i) => {
                    return (
                      <Card
                        key={i}
                        aim={obj.aim}
                        name={obj.name}
                        github={obj.github}
                        linkedin={obj.linkedin}
                        email={obj.email}
                        photoURL={obj.photoURL}
                        post={"core"}
                        fac={false}
                        headPost={obj.headPost}
                      />
                    );
                  })}
            </div>
          </div>
          <div className="team__members">
            <h2 className="team__title" style={{ color: "#32d234" }}>
              Members
            </h2>
            <p>
              The members are the backbone of the club. Their enthusiasm and
              passion for technology and coding drive the club's activities,
              events, and initiatives. By sharing their knowledge, skills, and
              creativity, club members create a supportive and collaborative
              community that fosters learning, growth, and innovation. With
              their dedication and hard work, club members can make a meaningful
              impact on their college, their community, and their own personal
              and professional development.
            </p>
            <div className="teamWrapper">
              {members &&
                members.length > 0 &&
                Array.from(members)
                  ?.sort((a, b) => a.name.localeCompare(b.name))
                  ?.map((obj, i) => {
                    return (
                      <Card
                        key={i}
                        aim={obj.aim}
                        name={obj.name}
                        github={obj.github}
                        linkedin={obj.linkedin}
                        email={obj.email}
                        photoURL={obj.photoURL}
                        post={"member"}
                        fac={false}
                      />
                    );
                  })}
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="spinner__wrapper">
        <SyncLoader />
        </div>
      )}
    </>
  );
}

export default Team;

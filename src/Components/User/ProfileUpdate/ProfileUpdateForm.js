import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMember, updateMember } from "../../../Features/isMemberSlice";
import "./ProfileUpdateForm.css";
function ProfileUpdateForm() {
  const member = useSelector(selectMember);
  const [open, setopen] = useState(-1);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwttoken");

  const [name, setname] = useState("");
  const [aim, setaim] = useState("");
  const [lkd, setlkd] = useState("");
  const [git, setgit] = useState("");
  const [ltc, setltc] = useState("");
  const [cc, setcc] = useState("");
  const [cf, setcf] = useState("");
  const [web, setweb] = useState("");

  const [globalchange, setglobalchange] = useState(false);

  const save = (e) => {
    e.preventDefault();
    setopen(-1);
  };

  const updateProfile = async () => {
    const profileData = await fetch(
      `${process.env.REACT_APP_SERVER}/user/updateMember`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          aim: member?.aim,
          branch: member?.branch,
          gender: member?.gender,
          name: member?.name,
          github: member?.github,
          linkedin: member?.linkedin,
          post: member?.post,
          regd: member?.regd,
          web: member?.web,
          codechef: member?.codechef ? member?.codechef : "",
          leetcode: member?.leetcode ? member?.leetcode : "",
          codeforces: member?.codeforces ? member?.codeforces : "",
        }),
      }
    );

    const response = await profileData.json();
    if (response.success) {
      setglobalchange(false);
    }

    // db
    //     .collection('members')
    //     .doc(auth.currentUser.uid)
    //     .update({
    //         aim: member?.aim,
    //         branch: member?.branch,
    //         name: member?.name,
    //         github: member?.github,
    //         linkedin: member?.linkedin,
    //         post: member?.post,
    //         regd: member?.regd,
    //         web: member?.web,
    //         codechef: (member?.codechef ? member?.codechef : ''),
    //         leetcode: (member?.leetcode ? member?.leetcode : ''),
    //         codeforces: (member?.codeforces ? member?.codeforces : ''),
    //     })
    //     .then(() => alert('Updated Successfully'))
    //     .catch(error => console.log(error))
  };

  return (
    <div className="ProfileUpdateForm">
      {!member?.name ? (
        <h2>only members allowed</h2>
      ) : (
        <>
          <div className="update__form__title">Basic Info</div>
          {open == "name" ? (
            <div className="update__form__row update__open">
              <div className="left__upd">Name</div>
              <div className="right__upd">
                <input
                  type={"text"}
                  defaultValue={member?.name}
                  onChange={async (e) => {
                    setname(e.target.value);
                  }}
                />
                <div className="update__buttons">
                  <button
                    onClick={async (e) => {
                      dispatch(
                        updateMember({
                          name: name,
                        })
                      );
                      save(e, open);
                      if (!globalchange) setglobalchange(true);
                    }}
                    className="save__upd"
                  >
                    Save
                  </button>
                  <button onClick={() => setopen(-1)}>Cancel</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="update__form__row">
              <div className="col1">
                <div className="left__upd">Name</div>
                <div className="right__upd">{member?.name}</div>
                <div
                  onClick={() => setopen("name")}
                  className="right__corner__wrapper"
                >
                  <span className="right__corner">Edit</span>
                </div>
              </div>
            </div>
          )}

          {open == "gender" ? (
            <div className="update__form__row update__open">
              <div className="left__upd">Gender</div>
              <div className="right__upd">
                <select type={"text"} defaultValue={member?.gender}>
                  <option value={"Male"}>Male</option>
                  <option value={"Female"}>Female</option>
                  <option value={"Other"}>Other</option>
                </select>
                <div className="update__buttons">
                  <button onClick={(e) => save(e, open)} className="save__upd">
                    Save
                  </button>
                  <button onClick={() => setopen(-1)}>Cancel</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="update__form__row">
              <div className="col1">
                <div className="left__upd">Gender</div>
                <div className="right__upd">{member?.gender}</div>
                {/* <div onClick={() => setopen('gender')} className='right__corner__wrapper'>
                                    <span className='right__corner'>Edit</span>
                                </div> */}
              </div>
            </div>
          )}
          {open == "aim" ? (
            <div className="update__form__row update__open">
              <div className="left__upd">Summary</div>
              <div className="right__upd">
                <textarea
                  onChange={(e) => {
                    setaim(e.target.value);
                  }}
                  placeholder="Tell us about yourself (interests, experience, etc.)"
                  defaultValue={member?.aim}
                />
                <div className="update__buttons">
                  <button
                    onClick={(e) => {
                      dispatch(
                        updateMember({
                          aim: aim,
                        })
                      );
                      save(e, open);
                      if (!globalchange) setglobalchange(true);
                    }}
                    className="save__upd"
                  >
                    Save
                  </button>
                  <button onClick={() => setopen(-1)}>Cancel</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="update__form__row">
              <div className="col1">
                <div className="left__upd">Summary</div>
                <div className="right__upd">{member?.aim}</div>
                <div
                  onClick={() => setopen("aim")}
                  className="right__corner__wrapper"
                >
                  <span className="right__corner">Edit</span>
                </div>
              </div>
            </div>
          )}
          {open == "lkd" ? (
            <div className="update__form__row update__open">
              <div className="left__upd">LinkedIn Profile</div>
              <div className="right__upd">
                <input
                  onChange={(e) => {
                    setlkd(e.target.value);
                  }}
                  type={"text"}
                  defaultValue={member?.linkedin}
                  placeholder="LinkedIn profile link"
                />
                <div className="update__buttons">
                  <button
                    onClick={(e) => {
                      dispatch(
                        updateMember({
                          linkedin: lkd,
                        })
                      );
                      save(e, open);
                      if (!globalchange) setglobalchange(true);
                    }}
                    className="save__upd"
                  >
                    Save
                  </button>
                  <button onClick={() => setopen(-1)}>Cancel</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="update__form__row">
              <div className="col1">
                <div className="left__upd">LinkedIn Profile</div>
                <div className="right__upd">
                  <a target={"_blank"} href={member?.linkedin}>
                    {member?.linkedin}
                  </a>
                </div>
                <div
                  onClick={() => setopen("lkd")}
                  className="right__corner__wrapper"
                >
                  <span className="right__corner">Edit</span>
                </div>
              </div>
            </div>
          )}

          {open == "git" ? (
            <div className="update__form__row update__open">
              <div className="left__upd">Github Profile</div>
              <div className="right__upd">
                <input
                  onChange={(e) => {
                    setgit(e.target.value);
                  }}
                  type={"text"}
                  placeholder="Github profile link"
                  defaultValue={member?.github}
                />
                <div className="update__buttons">
                  <button
                    onClick={(e) => {
                      dispatch(
                        updateMember({
                          github: git,
                        })
                      );
                      save(e, open);
                      if (!globalchange) setglobalchange(true);
                    }}
                    className="save__upd"
                  >
                    Save
                  </button>
                  <button onClick={() => setopen(-1)}>Cancel</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="update__form__row">
              <div className="col1">
                <div className="left__upd">Github Profile</div>
                <div className="right__upd">
                  <a target={"_blank"} href={member?.github}>
                    {member?.github}
                  </a>
                </div>
                <div
                  onClick={() => setopen("git")}
                  className="right__corner__wrapper"
                >
                  <span className="right__corner">Edit</span>
                </div>
              </div>
            </div>
          )}

          {open == "ltc" ? (
            <div className="update__form__row update__open">
              <div className="left__upd">Leetcode Profile</div>
              <div className="right__upd">
                <input
                  onChange={(e) => {
                    setltc(e.target.value);
                  }}
                  type={"text"}
                  placeholder="Leetcode profile link"
                  defaultValue={member?.leetcode && member?.leetcode}
                />
                <div className="update__buttons">
                  <button
                    onClick={(e) => {
                      dispatch(
                        updateMember({
                          leetcode: ltc,
                        })
                      );
                      save(e, open);
                      if (!globalchange) setglobalchange(true);
                    }}
                    className="save__upd"
                  >
                    Save
                  </button>
                  <button onClick={() => setopen(-1)}>Cancel</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="update__form__row">
              <div className="col1">
                <div className="left__upd">Leetcode Profile</div>
                <div className="right__upd">
                  {member?.leetcode ? (
                    <a target={"_blank"} href={member?.leetcode}>
                      {member?.leetcode}
                    </a>
                  ) : (
                    "🤷"
                  )}
                </div>
                <div
                  onClick={() => setopen("ltc")}
                  className="right__corner__wrapper"
                >
                  <span className="right__corner">Edit</span>
                </div>
              </div>
            </div>
          )}

          {open == "cc" ? (
            <div className="update__form__row update__open">
              <div className="left__upd">Codechef Profile</div>
              <div className="right__upd">
                <input
                  onChange={(e) => {
                    setcc(e.target.value);
                  }}
                  type={"text"}
                  placeholder="Codechef profile link"
                  defaultValue={member?.codechef && member?.codechef}
                />
                <div className="update__buttons">
                  <button
                    onClick={(e) => {
                      dispatch(
                        updateMember({
                          codechef: cc,
                        })
                      );
                      save(e, open);
                      if (!globalchange) setglobalchange(true);
                    }}
                    className="save__upd"
                  >
                    Save
                  </button>
                  <button onClick={() => setopen(-1)}>Cancel</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="update__form__row">
              <div className="col1">
                <div className="left__upd">Codechef Profile</div>
                <div className="right__upd">
                  {member?.codechef ? (
                    <a target={"_blank"} href={member?.codechef}>
                      {member?.codechef}
                    </a>
                  ) : (
                    "🤷"
                  )}
                </div>
                <div
                  onClick={() => setopen("cc")}
                  className="right__corner__wrapper"
                >
                  <span className="right__corner">Edit</span>
                </div>
              </div>
            </div>
          )}

          {open == "cf" ? (
            <div className="update__form__row update__open">
              <div className="left__upd">Codeforces Profile</div>
              <div className="right__upd">
                <input
                  onChange={(e) => {
                    setcf(e.target.value);
                  }}
                  type={"text"}
                  placeholder="Codeforces profile link"
                  defaultValue={
                    member?.codeforces ? member?.codeforces : undefined
                  }
                />
                <div className="update__buttons">
                  <button
                    onClick={(e) => {
                      dispatch(
                        updateMember({
                          codeforces: cf,
                        })
                      );
                      save(e, open);
                      if (!globalchange) setglobalchange(true);
                    }}
                    className="save__upd"
                  >
                    Save
                  </button>
                  <button onClick={() => setopen(-1)}>Cancel</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="update__form__row">
              <div className="col1">
                <div className="left__upd">Codeforces Profile</div>
                <div className="right__upd">
                  {member?.codeforces ? (
                    <a target={"_blank"} href={member?.codeforces}>
                      {member?.codeforces}
                    </a>
                  ) : (
                    "🤷"
                  )}
                </div>
                <div
                  onClick={() => setopen("cf")}
                  className="right__corner__wrapper"
                >
                  <span className="right__corner">Edit</span>
                </div>
              </div>
            </div>
          )}

          {open == "web" ? (
            <div className="update__form__row update__open">
              <div className="left__upd">Website</div>
              <div className="right__upd">
                <input
                  onChange={(e) => {
                    setweb(e.target.value);
                  }}
                  type={"text"}
                  placeholder="Your blog, portfolio, etc."
                  defaultValue={member?.web && member?.web}
                />
                <div className="update__buttons">
                  <button
                    onClick={(e) => {
                      dispatch(
                        updateMember({
                          web: web,
                        })
                      );
                      save(e, open);
                      if (!globalchange) setglobalchange(true);
                    }}
                    className="save__upd"
                  >
                    Save
                  </button>
                  <button onClick={() => setopen(-1)}>Cancel</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="update__form__row">
              <div className="col1">
                <div className="left__upd">Website</div>
                <div className="right__upd">
                  {member?.web ? (
                    <a target={"_blank"} href={member?.web}>
                      {member?.web}
                    </a>
                  ) : (
                    "🤷"
                  )}
                </div>
                <div
                  onClick={() => setopen("web")}
                  className="right__corner__wrapper"
                >
                  <span className="right__corner">Edit</span>
                </div>
              </div>
            </div>
          )}

          {/* ACADEMICS */}

          <div className="update__form__title">Academics</div>
          {open == "branch" ? (
            <div className="update__form__row update__open">
              <div className="left__upd">Branch</div>
              <div className="right__upd">
                <select type={"text"} defaultValue={"GCS"}>
                  <option value={"GCS"}>GCS</option>
                  <option value={"GEC"}>GEC</option>
                  <option value={"GEE"}>GEE</option>
                  <option value={"GIN"}>GIN</option>
                  <option value={"GCH"}>GCT</option>
                  <option value={"GFT"}>GFT</option>
                  <option value={"GME"}>GME</option>
                </select>
                <div className="update__buttons">
                  <button onClick={(e) => save(e, open)} className="save__upd">
                    Save
                  </button>
                  <button onClick={() => setopen(-1)}>Cancel</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="update__form__row">
              <div className="col1">
                <div className="left__upd">Branch</div>
                <div className="right__upd">{member?.branch}</div>
                {/* <div onClick={() => setopen('branch')} className='right__corner__wrapper'>
                                    <span className='right__corner'>Edit</span>
                                </div> */}
              </div>
            </div>
          )}
          {open == "regd" ? (
            <div className="update__form__row update__open">
              <div className="left__upd">Registration No.</div>
              <div className="right__upd">
                <input type={"text"} placeholder="SLIET's Registeration No" />
                <div className="update__buttons">
                  <button onClick={(e) => save(e, open)} className="save__upd">
                    Save
                  </button>
                  <button onClick={() => setopen(-1)}>Cancel</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="update__form__row">
              <div className="col1">
                <div className="left__upd">Registration No.</div>
                <div className="right__upd">{member?.regd}</div>
                {/* <div onClick={() => setopen('regd')} className='right__corner__wrapper'>
                                    <span className='right__corner'>Edit</span>
                                </div> */}
              </div>
            </div>
          )}

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
        </>
      )}
      <div className="button__wrapper">
        <button
          className={globalchange ? "" : "nochange"}
          onClick={globalchange ? updateProfile : undefined}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default ProfileUpdateForm;

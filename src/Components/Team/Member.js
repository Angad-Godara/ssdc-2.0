import React from 'react'
import styled from 'styled-components'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineAim, AiOutlineLink } from 'react-icons/ai';

function Member({ setopen, fac }) {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <CardWrapper>
            <CardContainer
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
                <TopContainer>
                    <BgText>SSDC</BgText>
                    <CircleWrapper>
                        <Circle />
                    </CircleWrapper>
                    <MemberWrapper>
                        <Profile>
                            <img src={"https://ssdc-sliet.github.io/assets/img/Students/Bhavesh%20Soni.jpg"} alt='Profile Pic' />
                        </Profile>
                    </MemberWrapper>
                </TopContainer>
                <BottomContainer>
                    <DetailsContainer>
                        <SmallText>Member</SmallText>
                        <SpacedHorizontalConatiner>
                            <MediumText>Junior Tester</MediumText>
                        </SpacedHorizontalConatiner>
                        <SpacedHorizontalConatiner style={{ marginTop: '10px' }}>
                            <Connections>
                                {(fac)
                                    ?
                                    <div style={{ display: 'flex', alignItems: 'center', width: '100px', justifyContent: 'space-between' }}>
                                        <AiFillMail className='logo__mail' style={{ cursor: 'pointer', transition: 'all 0.5s' }} size={20} />
                                        <span>
                                            |
                                        </span>
                                        <AiOutlineLink className='logo__linkedin' style={{ cursor: 'pointer', transition: 'all 0.5s' }} size={20} />
                                    </div>
                                    :
                                    <>
                                        < AiFillGithub className='logo__github' style={{ cursor: 'pointer', transition: 'all 0.5s' }} size={20} />
                                        |
                                        <AiFillLinkedin className='logo__linkedin' style={{ cursor: 'pointer', transition: 'all 0.5s' }} size={20} />
                                        |
                                        <AiFillMail className='logo__mail' style={{ cursor: 'pointer', transition: 'all 0.5s' }} size={20} />
                                    </>
                                }
                            </Connections>
                            <CardButton style={{ marginLeft: 'auto', marginRight: '10px' }} onClick={() => setopen(false)}>
                                <AiOutlineAim />
                            </CardButton>
                        </SpacedHorizontalConatiner>
                    </DetailsContainer >
                </BottomContainer>
            </CardContainer >
        </CardWrapper >
    )
}

const CardWrapper = styled.div`
    width: 100%;
    perspective: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardContainer = styled(motion.div)`
    width: 285px;
    height: 370px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
    background-color: rgb(30 43 59);
    color: #fff;
    position: relative;
    cursor: grab;
`;

const SmallText = styled.div`
    font-size: 11px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
`

const CircleWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    border-top-right-radius: 25px;
`;

const Circle = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    top: -4.2em;
    right: -8em;
    z-index: 5;
    background-color: rgb(255 74 74);
    border-radius: 50%;
`

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1.2;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    padding: 1em 15px;
`;

const BottomContainer = styled.div`
    display: flex;
    text-align: start;
    flex: 0.8;
    padding: 0 1em 0 1em;
`

const BgText = styled.h1`
    color: #fff;
    text-transform: uppercase;
    margin-bottom: auto;
    margin-top: 0;
    z-index: 10;
    font-size: 40px;
    font-weight: 900;
`

const MemberWrapper = styled.div`
    width: 100%;
    height: 100%;
    top: 22%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Profile = styled(motion.div)`
    width: auto;  // for maintaining the aspect ratio of the image
    height: 150px;
    z-index: 99;
    user-select: none;
    margin: auto;

    img{
        height: 150px;
        width: 150px;
        user-select: none;
        border-radius: 50%;
    }

`

const DetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.5em 6px 0 6px;
    line-height: 1.4;
`

const MediumText = styled.div`
    font-size: 18px;
    color: #fff;
    font-weight: 800;
    text-transform: uppercase;
`

const Connections = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
`

const SpacedHorizontalConatiner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CardButton = styled.button`
    padding: 6px 8px;
    background-color: #fbbe01;
    color: #000;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    border: 3px solid transparent;
    outline: pointer;
    transition: all 290ms ease-in-out;
    border-radius: 8px;
    cursor: pointer;
    display:flex;
    align-items:center;

    &:hover{
        background-color: transparent;
        color: #fff;
        border: 3px solid #fbbe01;
    }
`

export default Member
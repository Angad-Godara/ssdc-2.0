import React from 'react'
import styled from 'styled-components'
// import AirJordan from '../../src/assets/images/air-jordan-transparent.png'
import ShoeDetails from './MemberDetail';
import { motion, useMotionValue, useTransform } from 'framer-motion'

function Member() {

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
                    <BgText>SSDC<SmallText>Since 2019</SmallText></BgText>
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
                    <ShoeDetails />
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
    height: 500px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
    background-color: #1d1f21;
    color: #fff;
    position: relative;
    cursor: grab;
`;

const SmallText = styled.div`
    font-size: 11px;
    color: 3fff;
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
    width: 350px;
    height: 350px;
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
    font-size: 70px;
    font-weight: 900;
`

const MemberWrapper = styled.div`
    width: 100%;
    height: 100%;
    top: 15%;
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
        width: auto;
        height: 100%;
        user-select: none;
        border-radius: 47%;
    }

`

export default Member
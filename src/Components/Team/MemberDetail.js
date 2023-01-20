import React from 'react'
import styled from 'styled-components'
import { motion, useMotionValue, useTransform } from 'framer-motion'

function MemberDetail() {

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
                    <MediumText style={{ marginTop: '10px' }}>Objective</MediumText>
                    <Objective>
                        <SmallText>I seek challenging opportunities and want to succeed in that environment. I want to excel in my field and want a highly rewarding
                            career. I want to use my skills and knowledge for personal and professional growth</SmallText>
                        <BackButton>Profile</BackButton>
                    </Objective>
                </TopContainer>
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

    --hue: 150;
    --primary: hsl(var(--hue), 50%, 50%);
    --white-1: hsl(0, 0%, 90%);
    --white-2: hsl(0, 0%, 80%);
    --dark: hsl(var(--hue), 25%, 10%);
    --grey: hsl(0, 0%, 50%);
`;

const CardContainer = styled(motion.div)`
    width: 285px;
    height: 370px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
    background-color: #1d1f21;
    color: #fff;
    position: relative;
    cursor: grab;
`;

const MediumText = styled.div`
    font-size: 22px;
    color: 3fff;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: auto;
    margin-top: 0;
    z-index: 10;
    text-decoration: underline;
`

const SmallText = styled.p`
    font-size: 15px;
    font-weight: 700;
`

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1.2;
    position: relative;
    align-items: center;
    padding: 1em 15px;
`;

const Objective = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;
    user-select: none;
    margin-Bottom: auto;
    padding: 20px;
`
const BackButton = styled.button`
    margin-top: 20px;
    font-family: inherit;
    font-weight: bold;
    color: var(--white-1);

    letter-spacing: 2px;

    padding: 9px 20px;
    border: 1px solid var(--grey);
    border-radius: 1000px;
    background: transparent;
    transition: .3s;
    z-index: 100;
    cursor: pointer;

    &:hover{
        color: var(--primary);
        background: hsla(var(--hue), 25%, 10%, .2);
        border-color: currentColor;
    }
`

export default MemberDetail
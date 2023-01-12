import React from 'react'
import styled from 'styled-components'
// import NikeImg from '../assets/images/nike-logo.png'

function MemberDetail() {
    return (
        <DetailsContainer>
            <SmallText>Member</SmallText>
            <SpacedHorizontalConatiner>
                <MediumText>Junior Tester</MediumText>
                {/* <MediumText>₹ 67,999 </MediumText> */}
            </SpacedHorizontalConatiner>
            <SpacedHorizontalConatiner style={{ marginTop: '20px' }}>
                <MediumText>LinkedIn | Mail</MediumText>
                <CardButton>
                    More
                </CardButton>
            </SpacedHorizontalConatiner>
            <SsdcLogo style={{ marginTop: '10px' }}>
                {/* <img src={"https://raw.githubusercontent.com/Angad-Godara/ssdc-2.0/master/public/NewLogoColor.png"} alt='logo' /> */}
            </SsdcLogo>
        </DetailsContainer >
    )
}

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
    color: 3fff;
    font-weight: 800;
    text-transform: uppercase;
`

const SmallText = styled.div`
    font-size: 11px;
    color: 3fff;
    font-weight: 700;
    text-transform: uppercase;
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

    &:hover{
        background-color: transparent;
        color: #fff;
        border: 3px solid #fbbe01;
    }
`

const SsdcLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: auto;
    height: 13px;
  }
`;

export default MemberDetail
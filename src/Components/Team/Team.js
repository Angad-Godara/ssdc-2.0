import React from 'react'
import './Team.css'
import styled from 'styled-components'
import Card from './Card'
import Member from './Member'

function Team() {
    return (
        <TeamWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </TeamWrapper>
    )
}

const TeamWrapper = styled.div`
    margin-top: 45px;
    max-width: 100vw;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 40px;
    grid-row-gap: 60px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 0;
`;

export default Team
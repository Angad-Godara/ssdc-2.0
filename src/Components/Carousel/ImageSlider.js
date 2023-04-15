import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

// the slider is used from react slick

function ImageSlider({ use }) {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    }

    return (
        <Container use={use}>
            <Carousel {...settings} use={use}>
                <Wrapper use={use}>
                    <img src='./Assets/Images/slider-01.jpg' />
                </Wrapper>
                <Wrapper use={use}>
                    <img src='./Assets/Images/slider-02.jpg' />
                </Wrapper>
                <Wrapper use={use}>
                    <img src='./Assets/Images/slider-03.jpg' />
                </Wrapper>
            </Carousel>
        </Container>
    )
}

export default ImageSlider

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: ${props => props.use !== 'contest' ? '60px' : '45px'};
    margin-top: ${props => props.use !== 'contest' ? '0' : '45px'};
    z-index: 6;
    `

// because I can easily style it myself
const Carousel = styled(Slider)`
    margin-top: 20px;
    min-width: ${props => props.use !== 'contest' ? '250px' : '100%'};
    max-width: ${props => props.use !== 'contest' ? '450px !important' : '100%'};
    .slick-list {
        overflow: hidden; // enables the visibility of adjacent slides when we are at a given slide
    }
    
    ul li button:before{
        font-size: 10px;
        color: #000;
        // for desiging the lower buttons(dot like)--> the inactive ones
        
    } 
    
    // li.slick-active button::before{
        //     color: white; // for making the active poster (lower dots) buttons like which color the active one will show
        // }
        
        .slick-arrow, .slick-next, .slick-prev{
            &:before{
                color: grey;
                border-radius: 50%;
            }
    }
    
    button {
        z-index: 1; //fosr showing up the left button
    }

`

const Wrapper = styled.div`
    cursor: pointer;
    text-align: center;
    max-width: ${props => props.use !== 'contest' ? '450px' : '100%'};
    
    outline: none;
    img{
        max-height: ${props => props.use !== 'contest' ? '250px' : '35vw'};
        min-height: ${props => props.use !== 'contest' ? '250px' : '200px'};
        width: auto;
        height: auto;
        object-fit: contain;
        border-radius: 4px;
        // box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px, rgb(9 30 66 / 8%) 0px 0px 0px 1px;
        transition-duration: all 500ms;
        margin-left: auto;
        margin-right: auto;
        outline: none;
    
        &:hover{
            cursor: grab;
        }

        &:active{
            cursor: grabbing
        }
    }
`
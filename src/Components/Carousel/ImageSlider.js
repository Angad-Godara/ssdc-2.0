import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

// the slider is used from react slick

function ImageSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    }

    return (
        <Container>
            <Carousel {...settings}>
                <Wrapper>
                    <img src='./Assets/Images/slider-01.jpg' />
                </Wrapper>
                <Wrapper>
                    <img src='./Assets/Images/slider-02.jpg' />
                </Wrapper>
                <Wrapper>
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
    margin-bottom: 60px;
`

// because I can easily style it myself
const Carousel = styled(Slider)`
    margin-top: 20px;
    min-width: 400px;
    max-width: 450px !important;
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
    max-width: 450px;
    
    outline: none;
    img{
        height: 300px;
        width: auto;
        object: contain;
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
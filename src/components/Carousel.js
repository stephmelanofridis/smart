import React from 'react';
import styled from 'styled-components';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import websiteData from '../utils/websiteData';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`
const Wrapper = styled.div`
    height: 100%;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    flex: 1;
    position: relative;
    max-width: 100vw;
    max-height: 100vh;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    color: white;
    margin: 50px 0px;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 5px;
    z-index: 1;
    position: absolute;
    top: 30%;
    left: 75%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    padding: 12px 24px;
    text-shadow: 2px 2px black;
`
const Button = styled.button`
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: black;
    color: white;
    font-size: 30px;
    font-weight: 700;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-shadow: 2px 2px #bb5352;
`

const Image = styled.img`
     max-width: 100vw;
     max-height: 100vh;
     overflow-x: hidden;

`
const Carousel = () => {
    return (
        <Container>
            <Arrow direction='left'>
                <KeyboardArrowLeftIcon />
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src={websiteData.carouselCombo1} />
                        <Description>Original collage artwork made from a variety of modern and vintage magazines.</Description>
                        <Button>SHOP NOW</Button>
                    </ImgContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right'>
                <KeyboardArrowRightIcon />
            </Arrow>
        </Container>
    )
}

export default Carousel
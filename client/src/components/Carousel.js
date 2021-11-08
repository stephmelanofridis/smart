import React, { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { medium } from '../responsive';
import websiteData from '../utils/websiteData';

const Container = styled.div`
    width: 100%;
    max-height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
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
    z-index: 2;
    ${medium({ width: '20px', height: '20px' })}
`
const Wrapper = styled.div`
    max-height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.carouselIndex * -100}vw);
`
const Slide = styled.div`
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
    position: relative;
    max-width: 100vw;
    max-height: 100vh;
`
const Image = styled.img`
    max-width: 100vw;
    max-height: 100vh;
    overflow-x: hidden;
`
const Description = styled.p`
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 6px;
    color: white;
    margin: 50px 0px;
    font-size: 35px;
    font-weight: 400;
    letter-spacing: 5px;
    z-index: 1;
    position: absolute;
    top: 30%;
    left: 75%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    padding: 12px 24px;
    text-shadow: 2px 2px black;
    ${medium({ fontSize: '15px', letterSpacing: '2px' })}
`

const Carousel = () => {

    const [carouselIndex, setCarouselIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === 'left') {
            setCarouselIndex(0)
        } else {
            setCarouselIndex(1)
        }
    }

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <KeyboardArrowLeftIcon />
            </Arrow>
            <Wrapper carouselIndex={carouselIndex}>
                <Slide>
                    <ImgContainer>
                        <Image src={websiteData.carouselCombo1} />
                        <Description>We sell original collage artwork made from a variety of modern and vintage magazines.</Description>
                    </ImgContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src={websiteData.carouselCombo2} />
                        <Description>Shop our range of restored antique furniture.</Description>
                    </ImgContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick('right')}>
                <KeyboardArrowRightIcon />
            </Arrow>
        </Container>
    )
}

export default Carousel
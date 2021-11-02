import React from 'react';
import styled from 'styled-components';
import websiteData from '../utils/websiteData';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 70vh;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Description = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const ButtonContainer = styled.div`
    display: flex;
    margin-top: 30px;
`
const Button = styled.button`
    color: black;
    font-weight; bold;
    padding: 15px;
    border: 3px solid var(--lightpink);
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: var(--white);
    } 
`

const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={websiteData.placeholder} />
                </ImgContainer>
                <InfoContainer>
                    <Title>Product Title</Title>
                    <Description>Product Description</Description>
                    <Price>$50</Price>
                    <ButtonContainer>
                        <Button>Add to cart</Button>
                    </ButtonContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
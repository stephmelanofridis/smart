import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import websiteData from '../utils/websiteData';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'black'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
`
const TopTexts = styled.div`

`
const TopText = styled.span`
    cursor: pointer;
    margin: 0px 10px;
    color: var(--darkpink);
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;  
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;

`
const Image = styled.img`
    width: 200px;
`
const Details = styled.span`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200px;
    padding-bottom: 25px;
`
const RemoveProduct = styled.div`
   padding: 20px; 
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    padding: 20px;
    margin: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
   font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' && '500'};
    font-size: ${props => props.type === 'total' && '24px'};
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const SummaryButton = styled.button`
    font-size: 20px;
    width: 100%;
    padding: 10px;
    background-color: var(--richblack);
    color: var(--white);
    font-weight: 600;
    cursor: pointer;
`

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Cart</TopText>
                        <TopText>Your Wishlist</TopText>
                    </TopTexts>
                    <TopButton type='filled'>Checkout</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={websiteData.placeholder} />
                                <Details>
                                    <ProductName>Product:</ProductName>
                                    <ProductId>ID:</ProductId>
                                </Details>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <RemoveProduct>Remove</RemoveProduct><RemoveCircleOutlineIcon />
                                    </ProductAmountContainer>
                                    <ProductPrice>$20</ProductPrice>
                                </PriceDetail>
                            </ProductDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src={websiteData.placeholder} />
                                <Details>
                                    <ProductName>Product:</ProductName>
                                    <ProductId>ID:</ProductId>
                                </Details>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <RemoveProduct>Remove</RemoveProduct><RemoveCircleOutlineIcon />
                                    </ProductAmountContainer>
                                    <ProductPrice>$20</ProductPrice>
                                </PriceDetail>
                            </ProductDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal:</SummaryItemText>
                            <SummaryItemPrice>$30</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Postage:</SummaryItemText>
                            <SummaryItemPrice>$10</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText>Total:</SummaryItemText>
                            <SummaryItemPrice>$40</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>Proceed to payment</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
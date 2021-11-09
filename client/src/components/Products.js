import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as Constants from '../utils/constants';
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    width: 70%;
    height: 70vh;
    position: relative;
    left: 20vh;
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

function Products() {
    const [data, setData] = useState({ products: [] });

    useEffect(() => {
        const fetchData = async () => {
            const queryResult = await axios.post(
                Constants.GRAPHQL_API, {
                query: Constants.GET_PRODUCTS_QUERY
            }
            );

            const result = queryResult.data.data;
            setData({ products: result.products })
        };

        fetchData();
    })

    return (
        <>
            {data.products.map(item => (
                <Wrapper>
                    <ImgContainer>
                        <Image key={item.Image} alt={item.title} src={`images/${item.image}`} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title key={item.Title}>{item.title}</Title>
                        <Description key={item.description}>{item.description}</Description>
                        <Price key={item.price}>${item.price}</Price>
                        <ButtonContainer>
                            <Button>Add to cart</Button>
                        </ButtonContainer>
                    </InfoContainer>
                </Wrapper>
            ))}
        </>
    )

}

export default Products
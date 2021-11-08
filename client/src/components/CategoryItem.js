import React from 'react';
import styled from 'styled-components';
import { large } from '../responsive';

const Container = styled.div`
flex: 1;
margin: 60px;
height: 70vh;
position: relative;
${large({ margin: '30px' })}

`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
background-color: rgba(0, 0, 0, 0.9);
${large({ height: '50vh' })}
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: black;
font-size: 20px;
letter-spacing: 5px;
text-shadow: 2px 2px white;
${large({ fontSize: '15px' })}
`
const Title = styled.h1`
font-weight: 700;
background-color: rgba(255, 255, 255, 0.8);
border-radius: 6px;
padding: 0px 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.8);
${large({ position: 'absolute', top: '30%' })}
`
const Button = styled.button`
background-color: black;
color: white;
font-size: 30px;
margin-top: 25px;
padding: 12px 24px;
border: none;
cursor: pointer;
border-radius: 5px;
text-shadow: 2px 2px #bb5352;
box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.7), 0 6px 20px 0 rgba(255, 255, 255, 0.7);
`

const CategoryItem = ({ item }) => {

    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>Browse</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
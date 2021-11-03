import React from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    min-height: 30vh;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin-top: 50px;
`
const Title = styled.h1`
    font-family: courier-prime, monospace;
    font-weight: 400;
    font-style: normal;
    font-style: normal;
    font-size: 70px;
    text-align: center;
    text-shadow: 0 0 3px var(--darkpink), 0 0 5px var(--white);
    margin-bottom: 20px;
`
const Description = styled.div`
    color: var(--darkpink);
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
`
const InputContainer = styled.div`
    color: var(--white);
    width: 30%;
    height: 40px;
    background-color: var(--white);
    display: flex;
    justify-content: space-between;
    margin: 20px;
`
const Input = styled.input`
    color: var(--white);
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    color: var(--white);
    flex: 1;
    border: none;
    background-color: var(--darkpink);
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Join the mailing list</Title>
            <Description>Keep up to date with new creations and sale items.</Description>
            <InputContainer>
                <Input placeholder='Enter your email address' />
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
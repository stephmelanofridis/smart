import React from 'react';
import styled from 'styled-components';
import websiteData from '../utils/websiteData';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${websiteData.landingImage}) center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: var(--white);
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    width: 40%
    border: none;
    padding: 15px 20px;
    background-color: var(--darkpink);
    color: var(--white);
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Register</Title>
                <Form>
                    <Input placeholder='Name' />
                    <Input placeholder='Last Name' />
                    <Input placeholder='Email' />
                    <Input placeholder='Username' />
                    <Input placeholder='Password' />
                    <Input placeholder='Confirm Password' />
                </Form>
                <ButtonContainer>
                    <Agreement>By creating an account, you verify that you have read and agree to the following Terms and Conditions</Agreement>
                    <Button>Create Account</Button>
                </ButtonContainer>
            </Wrapper>
        </Container>
    )
}

export default Register
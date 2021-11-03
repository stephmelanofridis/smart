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
    width: 25%;
    background-color: var(--white);
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: var(--darkpink);
    color: var(--white);
    margin-bottom: 10px;
`
const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    color: var(--darkpink);
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <Form>
                    <Input placeholder='Username' />
                    <Input placeholder='Password' />
                    <ButtonContainer>
                        <Button>Login</Button>
                    </ButtonContainer>

                    <LinkContainer>
                        <Link>Forgot password</Link>
                        <Link>Create a new account</Link>
                    </LinkContainer>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
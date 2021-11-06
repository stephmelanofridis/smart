import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Authentication from '../utils/authentication';
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
// const Link = styled.a`
//     margin: 5px 0;
//     font-size: 12px;
//     color: var(--darkpink);
//     cursor: pointer;
// `

function Login(props) {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { username: formState.username, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Authentication.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <Form onSubmit={handleFormSubmit}>
                    <Input placeholder='Username' name="username" type="username" id="username" onChange={handleChange} />
                    <Input placeholder='Password' name="password" type="password" id="password" onChange={handleChange} />
                    {error ? (
                        <div>
                            <p className="error-text">The provided credentials are incorrect</p>
                        </div>
                    ) : null}
                    <ButtonContainer>
                        <Button type="submit">Login</Button>
                    </ButtonContainer>

                    <LinkContainer>
                        <Link to='/signup'>Create a new account</Link>
                    </LinkContainer>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
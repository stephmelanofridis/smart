import React, { useState } from 'react';
import styled from 'styled-components';
import websiteData from '../utils/websiteData';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Authentication from '../utils/authentication';

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

function Signup(props) {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                username: formState.username,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Authentication.login(token);
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
                <Title>Sign Up</Title>
                <Form onSubmit={handleFormSubmit}>
                    <Input placeholder='Email' name='email' type='email' id='email' onChange={handleChange} />
                    <Input placeholder='Username' name='username' type='username' id='username' onChange={handleChange} />
                    <Input placeholder='Password' name='password' type='password' id='password' onChange={handleChange} />
                </Form>
                <ButtonContainer>
                    <Link to='/login'>Already signed up</Link>
                    <Agreement>By creating an account, you verify that you have read and agree to the following Terms and Conditions</Agreement>
                    <Button type='submit'>Create Account</Button>
                </ButtonContainer>
            </Wrapper>
        </Container>
    )
}

export default Signup
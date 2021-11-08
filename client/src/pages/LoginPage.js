import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/authentication';
import websiteData from '../utils/websiteData';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';

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
    border-radius: 6px;
    position: relative;
    top: -100px;
    padding: 20px;
    width: 25%;
    background-color: var(--white);
`
const Title = styled.h1`
    font-size: 35px;
    font-weight: 300;
    text-align: center;
`
const Form = styled.form`
    font-weight: 500;
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
    margin: 20px;
    &:hover{
        background-color: var(--darkpink);
        opacity:  0.9;    
    } 
`
const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const Login = (props) => {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN);
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            username: '',
            password: '',
        });
    };

    return (
        <>
            <Announcement />
            <Navbar />
            <Container>
                <Wrapper>
                    <Title>Login</Title>
                    {data ? (
                        <p>
                            You have successfully logged in.{' '}
                            <Link to="/">Proceed</Link>
                        </p>
                    ) : (
                        <Form onSubmit={handleFormSubmit}>
                            <Input placeholder='Username' name="username" type="username" id="username" onChange={handleChange} value={formState.username} />
                            <Input placeholder='Password' name="password" type="password" id="password" onChange={handleChange} value={formState.password} />
                            <ButtonContainer>
                                <Button type="submit">Login</Button>
                            </ButtonContainer>

                            <LinkContainer>
                                <Link to='/signup'>No account yet? Sign up instead.</Link>
                            </LinkContainer>
                        </Form>
                    )}
                    {error ? (
                        <div>
                            <p className="error-text">The provided credentials are incorrect, please try again.</p>
                        </div>
                    ) : null}
                </Wrapper>
            </Container>
        </>
    )
}

export default Login
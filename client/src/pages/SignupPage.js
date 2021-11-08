import React, { useState } from 'react';
import styled from 'styled-components';
import websiteData from '../utils/websiteData';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Authentication from '../utils/authentication';
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
    width: 40%;
    background-color: var(--white);
`
const Title = styled.h1`
font-size: 35px;
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
const ButtonContainer = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    margin: 30px 20px 20px 20px;
    width: 40%
    border: none;
    padding: 15px 20px;
    background-color: var(--darkpink);
    color: var(--white);

    &:hover{
        background-color: var(--darkpink);
        opacity:  0.9;    
    } 

`

function Signup(props) {

    const [userFormData, setUserFormData] = useState({ email: '', password: '', name: '', phoneNumber: '', address: '' });
    const [validated] = useState(false);


    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addUser({
                variables: {
                    email: '',
                    username: '',
                    password: ''
                },
            });

            Authentication.login(data.addUser.token);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Announcement />
            <Navbar />
            <Container>
                <Wrapper>
                    <Title>Sign Up</Title>
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                        <Input placeholder='Email' name='email' type='email' id='email' onChange={handleInputChange} />
                        <Input placeholder='Username' name='username' type='username' id='username' onChange={handleInputChange} />
                        <Input placeholder='Password' name='password' type='password' id='password' onChange={handleInputChange} />
                    </Form>
                    <ButtonContainer>
                        <Link to='/login'>Already signed up</Link>
                        <Button type='submit'>Create Account</Button>
                    </ButtonContainer>
                </Wrapper>
            </Container>
        </>
    )
}

export default Signup
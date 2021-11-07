import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PRODUCT, QUERY_USER } from '../utils/mutations';
import styled from 'styled-components';
import websiteData from '../utils/websiteData';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    flex: 1;
    width: 40%;
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

    &:hover{
        background-color: var(--darkpink);
        opacity:  0.9;    
    } 
`
const FileUploadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


const NewProductForm = ({ handleProductPost }) => {
    const [titleText, setTitleText] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPricee] = useState('');
    const [fileName, setFileName] = useState();

    const handleImage = (image) => {
        const imageName = image.image
    };

    const [addProduct, { error, data }] = useMutation(ADD_PRODUCT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log('Submitted form')
        try {
            const { data } = await addProduct({
                variables: {
                    title: titleText,
                    description: description,
                    price: price,
                    photo: fileName
                },
            });
            setTitleText('');
            setDescription('');
            setPricee('');
            handleProductPost();
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
    }

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <InfoContainer>
                    <Title>Add a product:</Title>
                    <Form onSubmit={handleFormSubmit}>
                        <Input id='titleText' name='titleText' placeholder='Product title' value={titleText} onChange={handleChange}></Input>
                        <Input id='description' name='description' placeholder='Product description' value={description} onChange={handleChange}></Input>
                        <Input id='price' name='price' placeholder='Product price (AUD)' value={price} onChange={handleChange}></Input>
                        <FileUploadContainer>Add an image:<Input id='image' name='image' type='file'></Input></FileUploadContainer>
                    </Form>
                    <ButtonContainer>
                        <Button>Add Product</Button>
                    </ButtonContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}


export default NewProductForm
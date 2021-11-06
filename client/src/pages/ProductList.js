import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Container = styled.div`
`
const Title = styled.h1`
    margin: 20px;
`

const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title> All products </Title>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
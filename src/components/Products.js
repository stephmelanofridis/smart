import React from 'react';
import styled from 'styled-components';
import websiteData from '../utils/websiteData';
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`

const Products = () => {
    return (
        <Container>
            {websiteData.popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
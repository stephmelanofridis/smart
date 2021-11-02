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
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const Filter = styled.div`
    margin: 20px;   
`
const FilterText = styled.span`
    font-size: 20px; 
    font-weight: 600; 
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;

`
const Option = styled.option`

`

const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Collage</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Medium</Option>
                        <Option>Paint and Magazine</Option>
                        <Option>Magazine Only</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option>Lowest price first</Option>
                        <Option>Highest price first</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
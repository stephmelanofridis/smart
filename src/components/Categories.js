import React from 'react';
import styled from 'styled-components';
import CategoryItem from '../components/CategoryItem';
import websiteData from '../utils/websiteData';

const Categories = () => {

    const Container = styled.div`
        display: flex;
        padding: 
    `
    return (
        <Container>
            {websiteData.categories.map(item => (
                <CategoryItem item={item} />
            ))}
        </Container>
    )
}

export default Categories
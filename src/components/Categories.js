import React from 'react';
import styled from 'styled-components';
import websiteData from '../utils/websiteData';
import CategoryItem from '../components/CategoryItem';

const Categories = () => {

    const Container = styled.div`
        display: flex;
        padding: 20px;
        justify-content: space-between;
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
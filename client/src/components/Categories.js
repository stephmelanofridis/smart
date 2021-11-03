import React from 'react';
import styled from 'styled-components';
import websiteData from '../utils/websiteData';
import CategoryItem from '../components/CategoryItem';
import { large, medium } from '../responsive';

const Categories = () => {

    const Container = styled.div`
        display: flex;
        padding: 20px;
        justify-content: space-between;
        ${large({ display: 'flex', flexDirection: 'column' })}
    `
    return (
        <Container>
            {websiteData.categories.map(item => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Categories
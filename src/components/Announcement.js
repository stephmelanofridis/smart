import React from 'react';
import styled from 'styled-components';
import websiteData from '../utils/websiteData';

const Container = styled.div`
    height: 30px;
    background-color: var(--darkpink);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
`

const Announcement = () => {
    return <Container>{websiteData.announcementText}</Container>
}

export default Announcement
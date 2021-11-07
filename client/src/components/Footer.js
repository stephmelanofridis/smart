import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo-cream.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    background-color: var(--richblack)
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.img`
    max-width: 240px;
    max-height: 240px;
`

const SocialContainer = styled.div`
    color: var(--white);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--white);
    color: var(--richblack);
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const Right = styled.div`
    flex: 1;    
`
const List = styled.ul`
    color: var(--white);
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 40px;
    
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Link to='/'><Logo src={logo} alt='Cream ink blot with smart written in the centre' /></Link>
            </Left>
            <Center>
                <SocialContainer>
                    <SocialIcon>
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <MailIcon />
                    </SocialIcon>
                </SocialContainer>
            </Center>
            <Right>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Shipping</ListItem>
                    <ListItem>Terms of Use</ListItem>
                    <ListItem>Privacy</ListItem>
                </List>
            </Right>
        </Container>
    )
}

export default Footer
import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/logo-black.svg';
import '../App.css';

const Container = styled.div`
    height: 130px;
    background-color: var(--white);
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;

`
const Logo = styled.img`
    width: 310px;
    height: 310px;
    position: absolute;
    top: -52px;
    left: -50px;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 20px;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    background-color: var(--white);
`
const MenuItem = styled.div`
    font-size: 14px:
    cursor: point;
    margin: 20px;

    &:hover {
        font-weight: 700;
        text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
        cursor: pointer;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo src={logo} alt='Black ink blot with smart written in the centre' />
                </Left>
                <Center></Center>
                <Right>
                    <Language>EN</Language>
                    <SearchContainer>
                        <SearchIcon style={{ color: 'grey', fontSize: 16 }} />
                        <Input />
                    </SearchContainer>
                    <MenuItem>Sign Up</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
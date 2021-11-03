import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/logo-black.svg';
import { mobile, medium } from '../responsive';
import '../App.css';

const Container = styled.div`
    height: 130px;
    background-color: var(--white);
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: '10px 0px' })}
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
    ${medium({ width: '210px', height: '210px', top: '-10px', left: '-30px' })}
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
    ${medium({ justifyContent: 'center', flex: 2 })}
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    &:hover {
        font-weight: 700;
        text-shadow: var(--darkpink);
        cursor: pointer;
    }
    ${medium({ display: 'none' })}
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
    ${medium({ width: '50px' })}
`
const MenuItem = styled.div`
    font-size: 14px:
    cursor: point;
    margin: 20px;
    &:hover {
        font-weight: 700;
        text-shadow: var(--darkpink);
        cursor: pointer;
    }
    ${medium({ fontSize: '12px' })}
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
                        <Input placeholder='search' />
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
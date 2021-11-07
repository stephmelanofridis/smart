import React from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/logo-black.svg';
import Authentication from '../utils/authentication';
import { mobile, medium } from '../responsive';
import { Link } from 'react-router-dom';
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
                    <Link to='/'><Logo src={logo} alt='Black ink blot with smart written in the centre' /></Link>
                </Left>
                <Center></Center>
                <Right>
                    {/* <Language>EN</Language>
                    <SearchContainer>
                        <SearchIcon style={{ color: 'grey', fontSize: 16 }} />
                        <Input placeholder='search' />
                    </SearchContainer> */}
                    <MenuItem><Link to='/signup'>Sign Up</Link></MenuItem>
                    <MenuItem><Link to='/login'>Login</Link></MenuItem>
                    <MenuItem><Link to='/newproduct'>Add new product</Link></MenuItem>
                    <MenuItem>
                        <Badge badgeContent={0} color='secondary'>
                            <ShoppingCartIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: grey;
    position: relative;
`
const Image = styled.div`
    height: 75%;
`
const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
`

const Product = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartIcon />
                </Icon>
                <Icon>
                    <SearchIcon />
                </Icon>
                <Icon>
                    <FavoriteBorderIcon />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
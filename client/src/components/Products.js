import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import websiteData from '../utils/websiteData';
import Product from './Product';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/siteActions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import * as Constants from '../utils/constants';
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 70vh;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Description = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const ButtonContainer = styled.div`
    display: flex;
    margin-top: 30px;
`
const Button = styled.button`
    color: black;
    font-weight; bold;
    padding: 15px;
    border: 3px solid var(--lightpink);
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: var(--white);
    } 
`

function Products() {
    const [data, setData] = useState({ products: [] });

    useEffect(() => {
        const fetchData = async () => {
            const queryResult = await axios.post(
                Constants.GRAPHQL_API, {
                query: Constants.GET_PRODUCTS_QUERY
            }
            );

            const result = queryResult.data.data;
            setData({ products: result.products })
        };

        fetchData();
    })

    return (
        <>
            {data.products.map(item => (
                <Wrapper>
                    <ImgContainer>
                        <Image src={websiteData.placeholder} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title key={item.Title}>{item.title}</Title>
                        <Description key={item.description}>{item.description}</Description>
                        <Price key={item.price}>${item.price}</Price>
                        <ButtonContainer>
                            <Button>Add to cart</Button>
                        </ButtonContainer>
                    </InfoContainer>
                </Wrapper>
            ))}
        </>
    )

}

// function Products() {
//     const [state, dispatch] = useStoreContext();
//     const { currentCategory } = state;
//     const { loading, data } = useQuery(QUERY_PRODUCTS);

//     useEffect(() => {
//         if (data) {
//             dispatch({
//                 type: UPDATE_PRODUCTS,
//                 products: data.products,
//             });
//             data.products.forEach((product) => {
//                 idbPromise('products', 'put', product);
//             });
//         } else if (!loading) {
//             idbPromise('products', 'get').then((products) => {
//                 dispatch({
//                     type: UPDATE_PRODUCTS,
//                     products: products,
//                 });
//             });
//         }
//     }, [data, loading, dispatch]);

//     function filterProducts() {
//         if (!currentCategory) {
//             return state.products;
//         }

//         return state.products.filter(
//             (product) => product.category._id === currentCategory
//         );
//     }

//     return (
//         <Container>
//             <h1>All products</h1>
//             {state.products.length ? (
//                 <div>
//                     {filterProducts().map((product) => (
//                         <Product
//                             key={product._id}
//                             _id={product._id}
//                             image={product.image}
//                             title={product.title}
//                             price={product.price}
//                             quantity={product.quantity}
//                         />
//                     ))}
//                 </div>
//             ) : (
//                 <h3>There are no products yet.</h3>
//             )}
//         </Container>
//     )
// }

export default Products
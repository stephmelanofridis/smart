import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryItem from '../components/CategoryItem';
import { large } from '../responsive';
import * as Constants from '../utils/constants';
import axios from 'axios';


const Container = styled.div`
        display: flex;
        padding: 20px;
        justify-content: space-between;
        ${large({ display: 'flex', flexDirection: 'column' })}
    `

const Categories = () => {
    const [data, setData] = useState({ categories: [] });

    useEffect(() => {
        const fetchData = async () => {
            const queryResult = await axios.post(
                Constants.GRAPHQL_API, {
                query: Constants.QUERY_CATEGORIES
            }
            );

            const result = queryResult.data.data;
            setData({ categories: result.categories })
        };

        fetchData();
    });

    return (
        <Container>
            {data.categories.map(item => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Categories

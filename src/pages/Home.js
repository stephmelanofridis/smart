import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import '../App.css';


const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Carousel />
            <Categories />
        </div>
    )
}

export default Home
import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
// import Categories from '../components/Categories';
import Products from '../components/Products';
import Carousel from '../components/Carousel';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import '../App.css';
import Categories from '../components/Categories';


const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Carousel />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
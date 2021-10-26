import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import '../App.css';


const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
        </div>
    )
}

export default Home
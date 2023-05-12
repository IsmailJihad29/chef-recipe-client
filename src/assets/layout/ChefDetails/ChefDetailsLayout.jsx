import React from 'react';
import Navbar from '../../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Shared/Footer/Footer';

const ChefDetailsLayout = () => {
    return (
        <div className='bg-gray-200'>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default ChefDetailsLayout;
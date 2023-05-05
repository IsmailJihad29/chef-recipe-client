/* eslint-disable no-unused-vars */
import React from 'react';
import NavigationBar from '../pages/Home/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet/>
        </div>
    );
};

export default Main;
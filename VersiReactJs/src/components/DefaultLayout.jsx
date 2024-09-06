import { Outlet } from "react-router-dom";

import React from 'react';
import Header from './Headercmp.jsx'; // Import Header component

const DefaultLayout = ({ children }) => {
    return (
        <>
            {/* Render Header on every page */}
            <Header />
            
            {/* Main Content */}
            <main>
                {children}
            </main>
        </>
    );
};

export default DefaultLayout;

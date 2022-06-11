import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <div className="wrapper">
            <Header />

            <div className="main">
                <Outlet />
            </div>

            <footer className="footer">The best footer!</footer>
        </div>
    );
};

export default Layout;

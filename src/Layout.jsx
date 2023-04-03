import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './sass/styles.scss';

function Layout() {
    return (
        <>
            <Header>
                <Nav/>
            </Header>
            <main className="main"> 
                <Outlet/>
            </main> 
            <Footer />
    </>
    );
}
export default Layout;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/Home';
import Works from '../pages/Works';
import About from '../pages/About';
import Contact from '../pages/Contact';
import SingleProject from '../pages/SingleProject';
import Portfolio from '../pages/Portfolio';
import GoForWalkies from '../pages/GoForWalkies';
import MysteryVault from '../pages/MysteryVault';

const AppRouter = () => {

    return (   
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/works" element={<Works/>} />    
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Portfolio />} />   
                    <Route path="/goforwalkies" element={<GoForWalkies />} />   
                    <Route path="/mysteryvault" element={<MysteryVault />} />
                    <Route path="/singleproject" element={<SingleProject/>} />  
                </Route> 
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;



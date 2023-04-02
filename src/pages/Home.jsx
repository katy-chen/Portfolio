import React from 'react';
import { Helmet } from 'react-helmet';
import Works from '../pages/Works';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Home = () => {

    return (
        <div className='homepage-wrapper'>

            <section className='section-home home-intro'>
                <h1>Hi, I'm Katy Chen</h1>
                <h2>A Front-End Web Developer based in Vancouver, BC</h2>
            </section>

            <Works />
            <About/>
            <Contact />

        </div>
    );
}
export default Home;
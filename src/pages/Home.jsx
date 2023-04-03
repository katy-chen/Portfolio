import React from 'react';
import Works from '../pages/Works';
import About from '../pages/About';
import Contact from '../pages/Contact';
import '../sass/styles.scss';

const Home = () => {

    return (
        <div className='homepage-wrapper'>

            <section className='home-intro'>
                <p className='intro-msg'>Hello I'm</p>
                <h1 className='intro-heading'>Katy Chen</h1>
                <h2 className='intro-subheading'>A front-end web developer based in Vancouver, BC</h2>
            </section>

            <div className='separator'></div>

            <Works />
            <About/>
            <Contact />
            
        </div>
    );
}
export default Home;
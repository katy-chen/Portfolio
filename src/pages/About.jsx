import React from 'react';
import abtImage from '../images/about-feature-img.png';
import '../sass/styles.scss';

export default function About() {
    
    return (

        <section className='about-section'>
            <article className='about-content'>

                <h2 className='section-title'>about.</h2>
                {/* <hr/> */}

                <img src={abtImage} alt="" />
            
                <h3>Get to know me!</h3>

                <p>
                    Hi, my name is Katy and I'm a front-end web developer based in Vancouver, BC.<br />
                    <br />
                    I enjoy creating fun and meaningful experiences for users through dynamic and interactive websites that enhances 
                    their digital experience.<br />
                    <br />
                    I've always been fascinated in technology and design and find it exciting to be able to come up with creative 
                    solutions to bring ideas to life. Whether it's building a website from scratch or improving an existing one, I'm 
                    all about making sure it's visually stunning and provides a seamless user experience.<br />
                    <br />
                    In my free time, you can find me exploring the great outdoors, learning new design techniques, or experimenting with 
                    new web technologies. I'm always looking for new challenges and opportunities to grow as a developer, and I'm excited 
                    to see where my journey takes me next.<br />
                    <br />
                    Thanks for stopping by and getting to know a bit about me. Let's chat and see how we can work together to create something amazing!<br />
                </p>

            </article>

            <section className='my-toolkit'>
                <h3>my toolkit.</h3>

                <div className='toolkit-container'>
                    <article className='tools-card' id='devtools-card'>
                        <h4>development</h4>
                        <ul className='dev-tools'>
                            <li>HTML5</li>
                            <li>CSS3 | Sass</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>ReactJS</li>
                            <li>PHP</li>
                            <li>Bootstrap</li>
                            <li>GitHub</li>
                            <li>Gulp</li>
                        </ul>
                    </article>

                    <article className='tools-card' id='designtools-card'>
                        <h4>design</h4>
                        <ul className='design-tools'>
                            <li>Adobe Photoshop</li>
                            <li>Adobe XD</li>
                            <li>Adobe Illustrator</li>
                            <li>InVision</li>
                            <li>Figma</li>
                        </ul>
                    </article>
                </div>

            </section>
        </section>

    );
    
}
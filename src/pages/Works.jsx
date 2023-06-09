import React from 'react';
import ProjCard from '../components/ProjCard';
import imageJSGame from '../images/js-game-color-bg.png';
import imageWalkies from '../images/walkies-bg-color.png';
import imagePortfolio from '../images/placeholder.png';
import '../sass/styles.scss';
import jsonData from '../data/data.json';

const Works = () => {

    const data = jsonData;
    return (

        <section className='project-display-section'>

            <h2 className='section-title'>work.</h2>

            <div className='projects-container'>
              
                <ProjCard 
                image={imageWalkies}
                title={data[0].title}
                tools={data[0].tools}
                // description={data[0].description}
                subheading={data[0].subheading}
                pathname={data[0].pathname}
                />

                <ProjCard 
                image={imagePortfolio}
                title={data[1].title}
                tools={data[1].tools}
                // description={data[1].description}
                subheading={data[1].subheading}
                pathname={data[1].pathname}
                />

                <ProjCard 
                image={imageJSGame}
                title={data[2].title}
                tools={data[2].tools}
                description={data[2].description}
                />

            </div>

        </section>

    );
}

export default Works;
import React from 'react';
import portfolioImg from '../images/placeholder.png';
import jsonData from '../data/data.json';
import '../sass/styles.scss';

const Portfolio = () => {

    const data = jsonData[1];

    return (
        <section className='data-content portfolio-pg' id='portoflio-content'>

        <img src={portfolioImg} alt='Portfolio Img'/>
    
            <h1 className='project-title'>{data.title}</h1>
            <h2 className='project-subheading'>{data.subheading}</h2>
            
            <section className='project-details'>

                <h3>Overview</h3>
                <p>{data.overview}</p>

                {data.roles && (
                    <article className='card-info card-role'>
                        <h4>Duration</h4>
                        <ul>
                            {data.roles.data.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </article>
                )}

                <article className='card-info card-duration'>
                    <h4>Duration</h4>
                    <p>{data.duration}</p>
                </article>

                <article className='card-info card-tools'>
                    <h4>Tools</h4>
                    <ul className='stack-list'>
                        <li>{data.tools.map(item => item)}</li>     
                    </ul>
                </article>

                <div className='btn-group-container'>
                    <button className='project-btn'>
                        <a href={data.livesite}>Live Site</a>
                    </button>
                    <button className='project-btn'>
                        <a href={data.github}>GitHub</a>
                    </button>
                </div>
            </section>

           <section className='section-content-planning'>
            {data.planning.map((content, index) => (
                <div key={index} className='proj-planning-content'>
                    <h2>{content.title}</h2>
                    <p>{content.description}</p>

                    <img src={data.planning.title} alt="Project Screenshot"/>
                </div>
            ))}
           </section>
        </section>
    );
}
export default Portfolio;



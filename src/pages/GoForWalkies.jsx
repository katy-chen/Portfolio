import React from 'react';
import walkiesImage from '../images/png-walkies-transparent-bg.png';
import jsonData from '../data/data.json';

const GoForWalkies = () => {
    const data = jsonData[0];

    return (
        <section className='project-content' id='gfw-content'>

            <img src={walkiesImage} alt='GoForWalkies Site'/>  

            <h1 className='project-title'>{data.title}</h1>
            {/* <h2 className='project-subheading'>{data.subheading}</h2> */}

            <section className='project-details'>

                <h3>Overview</h3>
                <p className='overview'>{data.overview}</p>

                <div className='btn-group-container'>
                    <button className='project-btn'>
                        <a href={data.livesite}>Live Site</a>
                    </button>
                    <button className='project-btn'>
                        <a href={data.github}>GitHub</a>
                    </button>
                </div>
                
                <div id='cards'>
                    {data.role && (
                    <article className="card-info card-role">
                        <h4>Role</h4>
                        <ul className='list'>
                            {data.role.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </article>
                    )}
                    <div>
                        
                    </div>
                    <article className='card-info card-duration'>
                        <h4>Duration</h4>
                        <p>{data.duration}</p>
                    </article>

                    {data.tools && (
                    <article className="card-info card-tools">
                        <h4>Tools</h4>
                        <ul className='list'>
                            {data.tools.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                    </article>
                    )}
                </div>
            </section>

            <section className='section-content-planning'>
                {data.planning.map((content, index) => (
                    <div key={index} className='proj-planning-content'>
                        <h3>{content.title}</h3>
                        <p>{content.description}</p>
                        {/* <img src={data.planning.title} alt="Project Screenshot" /> */}
                    </div>
                ))}
            </section>

            <section className='reflection'>
                <h3>Reflection</h3>
                <p>
                    Working with a group to develop a dog walking service website using WordPress, WooCommerce, and 
                    team collaboration was an interesting and challenging experience. The project required us to plan 
                    and organize lots of content and wireframes, which was a daunting task, but we managed to pull it 
                    off successfully.<br/>

                    <br/>One of the things I enjoyed about this project was the opportunity to work with a group of talented 
                    and dedicated individuals. Each person brought their own unique skills and ideas to the table, which helped 
                    to make the final product much better than it would have been if we had worked alone. Collaboration was key, 
                    and we were able to divide up the work and assign tasks based on each person's strengths.<br/>

                    <br/>Another challenge we faced was learning how to use WordPress and WooCommerce effectively. These platforms 
                    were new to some members of the group, but with a bit of training and practice, we were able to navigate them 
                    smoothly. We spent a lot of time discussing and testing different design ideas, as well as tweaking the site's 
                    functionality to make sure it would work well for our target audience.<br/>

                    <br/>Throughout the project, we were constantly communicating with each other to ensure that we were all on the 
                    same page. We held regular meetings and video calls to discuss progress, share ideas, and troubleshoot any issues 
                    that arose. This helped us stay organized and focused, and we were able to complete the project within our deadline.<br/>

                    <br/>Overall, working with a group to develop a dog walking service website using WordPress, WooCommerce, and team 
                    collaboration was a rewarding experience. It taught me the value of communication, planning, and teamwork, and I am 
                    grateful for the opportunity to have been a part of it.<br/>
                </p>

            </section>


        </section>
    );


    
}

export default GoForWalkies; 



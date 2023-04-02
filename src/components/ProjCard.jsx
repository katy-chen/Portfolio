import React from 'react';
import { Link } from 'react-router-dom';

const ProjCard = ({image, title, tools, description, pathname }) => {

  return( 
    <article className='project-card'>
      <img src={image} alt="works" />

      <div className='details-container'>
        <h2>{title}</h2>
          <ul className='tools'>
            {tools.map((tool, index) => <li key={index}>{tool}</li>)}
          </ul>
        <p className='projext-description'>{description}</p>
        <Link to={pathname} className='info-link'>
        </Link>
      </div>
    </article>
  )
}
export default ProjCard;
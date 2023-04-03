import React from "react";
import { Link } from "react-router-dom";
import "../sass/styles.scss";

const ProjCard = ({ image, title, subheading, description, pathname }) => {
  return (
    <article className="project-card">
      <Link to={pathname} className="info-link">
          <img src={image} alt="works" />
          <h3>{title}</h3>
          <p className='subheading'>{subheading}</p>
          {/* <p id="read-more-cta">View Details</p> */}
      </Link>

    </article>
  );
};
export default ProjCard;

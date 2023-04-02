import React from "react";
import { Link } from "react-router-dom";
import "../sass/styles.scss";

const ProjCard = ({ image, title, tools, description, pathname }) => {
  return (
    <article className="project-card">
      <Link to={pathname} className="info-link">
        <img src={image} alt="works" />
          <h2>{title}</h2>
          <p id="read-more-cta">Click to read more</p>
      </Link>

    </article>
  );
};
export default ProjCard;

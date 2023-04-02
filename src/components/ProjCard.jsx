import React from "react";
import { Link } from "react-router-dom";

const ProjCard = ({ image, title, tools, description, pathname }) => {
  return (
    <article className="project-card">
      <Link to={pathname} className="info-link">
        <img src={image} alt="works" />

        <div className="details-container">
          <h2>{title}</h2>
          {tools ? (
            <ul className="tools">
              {tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          ) : null}

          <p className="projext-description">{description}</p>
        </div>
      </Link>
    </article>
  );
};
export default ProjCard;

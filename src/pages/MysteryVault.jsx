import React from "react";
import jsonData from "../data/data.json";
import mystVaultImg from '../images/png-js-game-transparent-bg.png';

const MysteryVault = () => {
  const data = jsonData[2];
  console.log(data.title);

  return (
    <section className="project-content" id="mystery-content">
      <img src={mystVaultImg} alt="Mystery Vault Site" />

      <h1 className="project-title">{data?.title}</h1>
      <h2 className="project-subheading">{data?.subheading}</h2>

      <section className="project-details">
        <h3>Overview</h3>
        <p>{data.overview}</p>

        <div className="btn-group-container">
          <button className="project-btn">
            <a href={data.livesite}>Live Site</a>
          </button>
          <button className="project-btn">
            <a href={data.github}>GitHub</a>
          </button>
        </div>

        {data.role && (
          <article className="card-info card-role">
            <h4>Role</h4>
            <ul>
              <li>{data.roles.map((item) => item)}</li>
            </ul>
          </article>
        )}
        <article className="card-info card-duration">
          <h3>Duration</h3>
          <p>{data.duration}</p>
        </article>

        {data.tools && (
          <article className="card-info card-tools">
            <h4>Tools</h4>
            <ul>
              <li>{data.tools.map((item) => item)}</li>
            </ul>
          </article>
        )}

      </section>

      {data?.planning && (
        <section className="section-content-planning">
          {data?.planning?.map((content, index) => (
            <div key={index} className="proj-planning-content">
              <h2>{content?.title}</h2>
              <p>{content?.description}</p>
            </div>
          ))}
        </section>
      )}
    </section>
  );
};

export default MysteryVault;

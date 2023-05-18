import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../projectDetails.css";

import Header from "../composants/header";
import projectData from "../data/projectData.js";
import AwesomeSlider from "react-awesome-slider";

import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";

function ScreenProjectDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const location = useLocation();
  const projectName = location.state.projectName;
  const index = projectData.findIndex(
    (obj) => obj.name === projectName.toLowerCase()
  );
  const Titre_Project = projectName.toUpperCase();
  console.log(index);

  return (
    <div>
      <Header />
      <h3 className="project_title">{Titre_Project}</h3>
      <div className="center_porject">
        <div className="carrousel">
          <AwesomeSlider
            className="aws-btn"
            bullets={false}
            transitionDelay={400}
            animation="openAnimation"
          >
            {projectData[index].img.map((obj) => {
              return (
                <div>
                  <img
                    alt={obj.slice(14, 29)}
                    src={obj}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              );
            })}
          </AwesomeSlider>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginInline: "17vw",
          }}
        >
          <div className="description">
            <h3 style={{ fontWeight: "400" }}>À propos de ce projet</h3>
          </div>
          <p
            style={{
              fontWeight: "300",
            }}
          >
            {projectData[index].description}
          </p>
          <div className="fiche_technique">
            <h3>Fiche technique</h3>
            <p>
              Technologies de code auxquelles j'ai participé en travaillant sur
              ce projet.
            </p>
            <div className="trait"></div>
            <div>
              <ul style={{ listStyleType: "circle" }}>
                {projectData[index].technologie.map((value, key) => {
                  return <li key={key}>{value}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenProjectDetails;

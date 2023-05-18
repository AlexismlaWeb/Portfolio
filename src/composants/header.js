import React, { useState } from "react";
import "../header.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faUpload } from "@fortawesome/free-solid-svg-icons";

import Cv from "../fichier/CvAlexisMla.pdf";

function Header() {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const location = window.location.pathname;
  return (
    <div className="header">
      <div
        className="title_contenent"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <h1 className="title">Alexis Melia</h1>
      </div>

      <div className="group-button">
        <div className="upload">
          <a href={Cv} download>
            <FontAwesomeIcon
              icon={faUpload}
              size="lg"
              className="icon_contact"
            />
          </a>
          <div className="overlay">
            <p className="name_logo">Vous pouvez télécharger mon C.V ici</p>
          </div>
        </div>
        {location === "/Contact" || location === "/Project" ? (
          <div>
            <FontAwesomeIcon
              icon={faXmark}
              size="lg"
              className="icon_contact"
              onClick={() => navigate("/")}
            />
          </div>
        ) : (
          <div className="hidden-button">
            <button
              type="button"
              className="button-transparent"
              onClick={() => {
                navigate("/");
              }}
            >
              Accueil
            </button>
            <button
              type="button"
              className="button-outline"
              onClick={() => {
                navigate("/Contact");
              }}
            >
              Contact
            </button>
          </div>
        )}
        {location === "/" ? (
          <Dropdown>
            <Dropdown.Toggle
              style={{ backgroundColor: "white", borderColor: "white" }}
            >
              <FontAwesomeIcon
                icon={faBars}
                size="xl"
                className="icon"
                onClick={() => {
                  setIsActive(!isActive);
                }}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu id="dropdown-menu-align-end">
              <Link className="navbar-items" to={"/Contact "}>
                Contact
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        ) : null}
      </div>
    </div>
  );
}

export default Header;

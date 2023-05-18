import React from "react";
import "../footer.css";

import { useNavigate } from "react-router-dom";

import logo_github from "../images/logo/square-github.svg";
import logo_linkedin from "../images/logo/linkedin.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  let navigate = useNavigate();

  const handleClick = () => {
    const path = "/Contact";
    navigate(path);
  };

  return (
    <div className="footer">
      <div className="footer_colonne">
        <img
          src={logo_github}
          alt="logo-github"
          className="logo_footer"
          onClick={() => {
            window.open("https://github.com/AlexismlaWeb");
          }}
        />

        <img
          onClick={() => {
            window.open("https://www.linkedin.com/in/alexis-melia/");
          }}
          src={logo_linkedin}
          alt="logo-linkedin"
          className="logo_footer"
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          color="black"
          className="logo_footer"
          onClick={handleClick}
        />
      </div>
      <p style={{ fontWeight: "300", fontSize: "0.6rem" }}>Copyright © 2023</p>
    </div>
  );
}
export default Footer;

import React from "react";
import "../footer.css";

import { Link, useNavigate } from "react-router-dom";

import logo_github from "../images/square-github.svg";
import logo_linkedin from "../images/linkedin.svg";

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
        <Link to={"https://github.com/AlexismlaWeb"}>
          <img src={logo_github} alt="logo-github" className="logo_footer" />
        </Link>
        <Link to={"https://www.linkedin.com/in/alexis-melia/"}>
          <img
            src={logo_linkedin}
            alt="logo-linkedin"
            className="logo_footer"
          />
        </Link>
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

import React, { useState } from "react";
import "../header.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const location = window.location.pathname;

  return (
    <div className="header">
      <h1 className="title">Alexis Melia</h1>

      <div className="group-button">
        {location === "/Contact" ? (
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
              Portfolio
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
        {isActive ? (
          <FontAwesomeIcon
            icon={faXmark}
            size="xl"
            className="icon"
            onClick={() => {
              setIsActive(!isActive);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className="icon"
            onClick={() => {
              setIsActive(!isActive);
            }}
          />
        )}
      </div>

      <div className={isActive ? "navbar-menu" : "navbar-hidden"}>
        <div className="navbar-items">
          <Link to={"/"}>Acceuil</Link>
        </div>

        <div className="navbar-items">
          <Link to={"/Contact "}>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

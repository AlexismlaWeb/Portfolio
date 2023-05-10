import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "../App.css";
import Header from "../composants/header";
import Footer from "../composants/footer";

import Lottie from "lottie-react";
import menRelax from "../lotties/men-relaxing-on-working-chair.json";

import logo_backend from "../images/front-end.png";
import logo_frontend from "../images/ux.png";

import logo_typecsript from "../images/typescript.png";
import logo_css from "../images/icon-css.png";
import logo_nextjs from "../images/nextjs.png";
import logo_javascript from "../images/JavaScript_logo.png";
import logo_html from "../images/html-icon.png";
import logo_nodejs from "../images/nodejs.png";
import logo_reactjs from "../images/reactjs-icon.jpg";
import logo_redux from "../images/redux.png";
import logo_mongodb from "../images/mongodb-icon.png";
import logo_express from "../images/expressjs_logo.png";
import logo_golang from "../images/golang.svg";

function ScreenWelcome() {
  const navigate = useNavigate();

  const clickNavigate = (link) => {
    console.log(link);
    navigate(link);
  };

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <Header />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      >
        <div className="body">
          <div className="column">
            <p className="Welcome-title">Full-Stack Developer</p>
            <Lottie animationData={menRelax} />
          </div>
        </div>
        <div className="content">
          <div className="text">
            <h3 className="titre main-titre">
              Hi, I’m Alexis. Nice to meet you.
            </h3>
            <h5 className="paragraph">
              Since beginning my journey as a freelance designer over 11 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </h5>
          </div>
        </div>
        <div className="center">
          <div className="skill">
            <div className="col">
              <img
                src={logo_frontend}
                alt="logoFrontend"
                className="cercle-icon"
              />

              <h3 className="titre">Frontend</h3>
              <div className="group_logo">
                <div className="logo">
                  <img src={logo_html} alt="logo-html" className="logo" />
                  <div className="overlay">
                    <p className="name_logo">HTML</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={logo_css} alt="logo-css" className="logo" />
                  <div className="overlay">
                    <p className="name_logo">CSS</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={logo_javascript} alt="logo-js" className="logo" />
                  <div className="overlay">
                    <p className="name_logo">JavaScript</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={logo_reactjs} alt="logo-reactjs" className="logo" />
                  <div className="overlay">
                    <p className="name_logo">ReactJS</p>
                  </div>
                </div>
                <div className="logo">
                  <img
                    src={logo_typecsript}
                    alt="logo-typescript"
                    className="logo"
                  />
                  <div className="overlay">
                    <p className="name_logo">TypeScript</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={logo_redux} alt="logo-redux" className="logo" />
                  <div className="overlay">
                    <p className="name_logo">Redux</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <img
                src={logo_backend}
                alt="logoBackend"
                className="cercle-icon"
              />
              <h3 className="titre">Backend</h3>
              <div className="group_logo">
                <div className="logo">
                  <img src={logo_nodejs} alt="logo-nodejs" className="logo" />
                  <div className="overlay">
                    <p className="name_logo">NodeJS</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={logo_express} alt="logo-express" className="logo" />
                  <div className="overlay">
                    <p className="name_logo">ExpressJS</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={logo_nextjs} alt="logo-nextjs" className="logo" />
                  <div className="overlay">
                    <p className="name_logo">NextJs</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={logo_mongodb} alt="logo-mongodb" className="logo" />
                  <div className="overlay">
                    <p className="name_logo">MongoDB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recent_work">
          <h2 className="titre">Mes Projets récents </h2>
          <p className="paragraph">
            Voici quelques projets de conception passés sur lesquels j'ai
            travaillé.
          </p>
          <div className="group_project">
            <div className="project">
              <p>Project</p>
            </div>
            <div className="project">
              <p>Project</p>
            </div>
            <div className="project">
              <p>Project</p>
            </div>
            <div className="project">
              <p>Project</p>
            </div>
            <div className="project">
              <p>Project</p>
            </div>
            <div className="project">
              {/* <Carousel>
              <Carousel.Item>
                <img src={test} alt="ok" />
                <Carousel.Caption>
                  <h3>Project</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={Golfmodern} alt="ok" />
                <Carousel.Caption>
                  <h3>Project</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>{" "} */}
              <p>Project</p>
            </div>
          </div>
          <div className="body">
            <button className="button-outline-contact button-outline">
              See more
            </button>
          </div>
        </div>
        <div className="contact_cv_row">
          <h4>Commencer un projet</h4>
          <h6 style={{ fontWeight: "300", fontSize: "1rem", width: "30%" }}>
            Intéressé à travailler ensemble ? On devrait en discuter. Je vais
            acheter le café.
          </h6>
          <button
            className="button-outline-contact button-outline"
            onClick={() => clickNavigate("/Contact")}
          >
            C'est parti
            <img
              src={logo_golang}
              alt="logo_golang"
              style={{ width: "22%", margin: "0px 1.5vh", opacity: "0.5" }}
            />
          </button>
        </div>
      </motion.div>
      <Footer />
    </motion.div>
  );
}

export default ScreenWelcome;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "../App.css";
import Header from "../composants/header";
import Footer from "../composants/footer";

import Lottie from "lottie-react";
import menRelax from "../lotties/men-relaxing-on-working-chair.json";

import logo_backend from "../images/logo/front-end.png";
import logo_frontend from "../images/logo/ux.png";

import logo_typecsript from "../images/logo/typescript.png";
import logo_css from "../images/logo/icon-css.png";
import logo_nextjs from "../images/logo/nextjs.png";
import logo_javascript from "../images/logo/JavaScript_logo.png";
import logo_html from "../images/logo/html-icon.png";
import logo_nodejs from "../images/logo/nodejs.png";
import logo_reactjs from "../images/logo/reactjs-icon.jpg";
import logo_redux from "../images/logo/redux.png";
import logo_mongodb from "../images/logo/mongodb-icon.png";
import logo_express from "../images/logo/expressjs_logo.png";
import logo_golang from "../images/logo/golang.svg";

import cover_golfapp from "../images/golfapp/cover_golfapp.PNG";
import cover_portfolio from "../images/portfolio/cover_portfolio.PNG";
import cover_award from "../images/award/cover_award.PNG";
import cover_behappy from "../images/behappy/cover_behappy.PNG";

function ScreenWelcome() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const visible = { opacity: 1, y: 0, transition: { duration: 0.8 } };

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const clickNavigate = (link) => {
    console.log(link);
    navigate(link);
  };

  const HandleClickProject = (name) => {
    setShow(!show);
    console.log("okoko", name);
    navigate("/Project", {
      state: {
        projectName: name,
      },
    });
  };

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
              Bonjour, je suis Alexis. Ravi de vous rencontrer !
            </h3>
            <h5 className="paragraph">
              Développeur web qui a suivi deux formations et a acquis de
              l'expérience grâce à un stage. J'ai développé des compétences en
              programmation et en conception de sites web, et je suis passionné
              par l'utilisation de la technologie pour améliorer l'expérience
              utilisateur. Toujours partant pour de nouvelles aventures et pour
              continuer à apprendre et à développer mes compétences en
              développement web.
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
                    <p className="name_logo_project">HTML</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={logo_css} alt="logo-css" className="logo" />
                  <div className="overlay">
                    <p className="name_logo_project">CSS</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={logo_javascript} alt="logo-js" className="logo" />
                  <div className="overlay">
                    <p className="name_logo_project">JavaScript</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={logo_reactjs} alt="logo-reactjs" className="logo" />
                  <div className="overlay">
                    <p className="name_logo_project">ReactJS</p>
                  </div>
                </div>
                <div className="logo">
                  <img
                    src={logo_typecsript}
                    alt="logo-typescript"
                    className="logo"
                  />
                  <div className="overlay">
                    <p className="name_logo_project">TypeScript</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={logo_redux} alt="logo-redux" className="logo" />
                  <div className="overlay">
                    <p className="name_logo_project">Redux</p>
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
                    <p className="name_logo_project">NodeJS</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={logo_express} alt="logo-express" className="logo" />
                  <div className="overlay">
                    <p className="name_logo_project">ExpressJS</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={logo_nextjs} alt="logo-nextjs" className="logo" />
                  <div className="overlay">
                    <p className="name_logo_project">NextJs</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={logo_mongodb} alt="logo-mongodb" className="logo" />
                  <div className="overlay">
                    <p className="name_logo_project">MongoDB</p>
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
              <img
                src={cover_behappy}
                alt="Behappy app"
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                className="project_img"
                onClick={() => {
                  HandleClickProject("Behappy");
                }}
              />
            </div>
            <div className="project">
              <img
                src={cover_portfolio}
                alt="portfolio"
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                className="project_img"
                onClick={() => {
                  HandleClickProject("portfolio");
                }}
              />
            </div>
            <div className="project">
              <img
                src={cover_golfapp}
                alt="golf app"
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                className="project_img"
                onClick={() => {
                  HandleClickProject("golfapp");
                }}
              />
            </div>

            <div className="project">
              <img
                src={cover_award}
                alt="award app"
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                className="project_img"
                onClick={() => {
                  HandleClickProject("award 2021");
                }}
              />
            </div>
          </div>
          <div className="body" style={{ marginTop: "20px" }}>
            <motion.div
              whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                className="button_img button-outline-contact button-outline"
                onClick={() => {
                  window.open("https://github.com/AlexismlaWeb");
                }}
              >
                <span style={{ width: "100%" }}>Plus sur Github</span>
              </button>
            </motion.div>
          </div>
        </div>
        <div className="contact_cv_row">
          <h4>Commencer un projet</h4>
          <h6 className="startProject">
            Intéressé à travailler ensemble ? On devrait en discuter. Je vais
            acheter le café.
          </h6>
          <motion.div
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
          >
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
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </motion.div>
  );
}

export default ScreenWelcome;

import React, { useState } from "react";
import { motion } from "framer-motion";

import "../App.css";
import "../contact.css";

import Header from "../composants/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ScreenContact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [errorMessage, setErrorMessage] = useState({
    all: false,
    message: false,
    nom: false,
    email: false,
    content: "",
  });
  const [handleShow, setHandleShow] = useState({
    display: "none",
    validateForm: "",
  });

  const validateEmailRegex = /^\S+@\S+\.\S+$/;
  const validateNameRegex = /^[a-zA-Z ]*$/;

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const handleClick = () => {
    if (!form.message && !form.nom && !form.email) {
      setErrorMessage({
        all: true,
        content: "Ces champs sont obligatoire (all)",
      });
    } else if (!form.nom || form.nom.length < 3) {
      if (!form.nom) {
        setErrorMessage({
          nom: true,
          content: "Il semble que le champ 'nom' soit vide",
        });
      } else {
        setErrorMessage({
          nom: true,
          content:
            "Le champ 'nom' doit contenir au moins trois lettres. Veuillez entrer un nom valide et réessayer ",
        });
      }
    } else if (!form.email) {
      setErrorMessage({
        email: true,
        content: "Ce champ est obligatoire (email)",
      });
    } else if (!form.message) {
      setErrorMessage({
        message: true,
        content: "Ce champ est obligatoire (message)",
      });
    } else if (form.nom && form.email && form.message) {
      if (validateEmailRegex.test(form.email) === false) {
        setErrorMessage({
          email: true,
          content:
            "Il semble que l'adresse e-mail que vous avez entrée ne soit pas valide",
        });
      } else if (validateNameRegex.test(form.nom) === false) {
        setErrorMessage({
          nom: true,
          content:
            "Il semble que champ 'nom' auquel vous êtes entrée ne soit pas valide seule les lettres sont autorisées",
        });
      } else {
        setHandleShow({
          ...handleShow,
          display: "flex",
          validateForm: `Merci d'avoir rempli le formulaire de contact.`,
        });
        setForm({ nom: "", email: "", message: "" });
        setErrorMessage({
          ...errorMessage,
          all: false,
          message: false,
          email: false,
          content: "",
        });
      }
    }
  };

  return (
    <div>
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className="body"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible,
          }}
          className="body_center"
        >
          <h3>
            Merci d'avoir pris le temps de me contacter. Comment puis-je vous
            aider aujourd'hui?
          </h3>

          {errorMessage.content || handleShow.validateForm ? (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible,
              }}
            >
              {errorMessage.content ? (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible,
                  }}
                  className="alert-message warning"
                >
                  <p style={{ width: "95%", margin: 0 }}>
                    {errorMessage.content}
                  </p>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="sm"
                    style={{ width: "5%", cursor: "pointer" }}
                    onClick={() =>
                      setErrorMessage({ ...errorMessage, content: null })
                    }
                  />
                </motion.div>
              ) : null}
              {handleShow.validateForm ? (
                <motion.div
                  className="alert-message success"
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible,
                  }}
                >
                  <p style={{ width: "95%", margin: 0 }}>
                    {handleShow.validateForm}
                  </p>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="sm"
                    style={{ width: "5%", cursor: "pointer" }}
                    onClick={() =>
                      setHandleShow({ ...handleShow, validateForm: null })
                    }
                  />
                </motion.div>
              ) : null}
            </motion.div>
          ) : null}
          <div className="column">
            <div className="column_half">
              <label>Nom</label>
              <input
                type="text"
                name="nom"
                className="input_form"
                value={form.nom}
                style={
                  errorMessage.all || errorMessage.nom
                    ? { borderColor: "red" }
                    : null
                }
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
              />
            </div>
            <div className="column_half">
              <label>Email</label>
              <input
                type="text"
                name="email"
                className="input_form"
                style={
                  errorMessage.all || errorMessage.email
                    ? { borderColor: "red" }
                    : null
                }
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>
          <div className="column_centered">
            <label style={{ width: "72%", marginBottom: "10px" }}>
              Message
            </label>
            <textarea
              name="message"
              className="text_area"
              style={
                errorMessage.all || errorMessage.message
                  ? { borderColor: "red" }
                  : null
              }
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              value={form.message}
            ></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            style={{ marginTop: "6vh" }}
          >
            <button
              name="envoyer"
              className="button-outline-contact button-outline"
              onClick={() => {
                handleClick();
              }}
            >
              Soumettre
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ScreenContact;

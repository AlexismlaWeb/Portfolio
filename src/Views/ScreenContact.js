import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import "../App.css";
import "../contact.css";
import Header from "../composants/header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ScreenContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errorMessage, setErrorMessage] = useState({
    all: false,
    message: false,
    name: false,
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
    if (!form.message && !form.name && !form.email) {
      setErrorMessage({
        all: true,
        content: "Ces champs sont obligatoire",
      });
    } else if (!form.name || form.name.length < 3) {
      if (!form.name) {
        setErrorMessage({
          name: true,
          content: "Il semble que le champ 'Nom' soit vide",
        });
      } else {
        setErrorMessage({
          name: true,
          content:
            "Le champ 'name' doit contenir au moins trois lettres. Veuillez entrer un name valide et réessayer ",
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
    } else if (form.name && form.email && form.message) {
      if (validateEmailRegex.test(form.email) === false) {
        setErrorMessage({
          email: true,
          content:
            "Il semble que l'adresse e-mail que vous avez entrée ne soit pas valide",
        });
      } else if (validateNameRegex.test(form.name) === false) {
        setErrorMessage({
          name: true,
          content:
            "Il semble que champ 'name' auquel vous êtes entrée ne soit pas valide seule les lettres sont autorisées",
        });
      } else {
        setHandleShow({
          ...handleShow,
          display: "flex",
          validateForm: `Merci d'avoir pris le temps de remplir le formulaire de contact.`,
        });
        setForm({ name: "", email: "", message: "" });
        setErrorMessage({
          ...errorMessage,
          all: false,
          message: false,
          email: false,
          content: "",
        });

        sendEmail();
      }
    }
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_19dkw7b",
        "template_ccr7o8p",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "72PeH7n2MXRVHsK8W"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
          <h3 className="titre">
            Merci de prendre le temps de me contacter. Comment puis-je vous
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
                name="name"
                className="input_form"
                value={form.name}
                style={
                  errorMessage.all || errorMessage.name
                    ? { borderColor: "red" }
                    : null
                }
                onChange={(e) => setForm({ ...form, name: e.target.value })}
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
            style={{ marginTop: "6vh", marginBottom: "3vh" }}
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

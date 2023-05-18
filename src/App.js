import React from "react";
import { AnimatePresence } from "framer-motion";
import ScreenWelcome from "./Views/ScreenWelcome";
import ScreenContact from "./Views/ScreenContact";
import ScreenProjectDetails from "./Views/ScreenProjectDetails";
import ScreenLogInAdmin from "./Views/ScreenLogInAdmin";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Router>
        <Routes>
          <Route exact path="/" element={<ScreenWelcome />} />
          <Route exact path="/Contact" element={<ScreenContact />} />
          <Route exact path="/Project" element={<ScreenProjectDetails />} />
          <Route exact path="/AdminLogIn" element={<ScreenLogInAdmin />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;

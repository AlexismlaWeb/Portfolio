import React from "react";
import { AnimatePresence } from "framer-motion";
import ScreenWelcome from "./Views/ScreenWelcome";
import ScreenContact from "./Views/ScreenContact";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Router>
        <Routes>
          <Route exact path="/" element={<ScreenWelcome />} />
          <Route exact path="/Contact" element={<ScreenContact />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;

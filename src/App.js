import "./App.css";

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

import React, { useState } from "react";
import About from "./Components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#f8f9fa";
    }
  };

  return (
    <div>
      <Router>
        <Navbar
          title="My Title"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm heading="Enter the text to analyze below" mode={mode} />
            }
          ></Route>
          <Route path="/about" element={<About/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

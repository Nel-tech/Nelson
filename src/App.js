import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import Work from "./Component/Work/Work.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
};

export default App;

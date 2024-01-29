import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import Work from "./Component/Work/Work.jsx";
// import Contact from "./Component/Contact/Contact.jsx";
// import Preloader from "./Component/Preloader.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/contact" element={<Contact />}></Route> */}
      </Routes>
    </Router>
  );
};

export default App;

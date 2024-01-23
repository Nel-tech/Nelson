import "../../css/style.css";

import React from "react";
import Nav from "../../Pages/Nav";
import Intro from "../../Pages/Intro";
import Footer from "../../Pages/Footer";

function Home() {
  return (
    <div>
      <div className="container">
        <Nav />
        <Intro />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

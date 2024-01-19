// import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const Anime = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "Bringing ideas to life through user-friendly experiences",
          1000,
          "Turning imagination into engaging interactions",
          1000,
          "Making designs functional and intuitive",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: "20px" }}
      />
    </div>
  );
};

export function Intro() {
  return (
    <div className="intro">
      <div className="intro-section">
        <p className="intro-p">Hey 😉 I'm</p>
        <h1 className="intro-h">Adegbasa - Favour</h1>
      </div>
      <div>
        <section className="section">
          <div className="vertical-line"></div>
          <h2>Front-End Developer</h2>
        </section>

        <div className="section-intro">
          <div className="vertical-line"></div>
          <Anime />
        </div>
      </div>


      <div>
        
      </div>
    </div>
  );
}

import React from "react";
import Nav from "../../Pages/Nav";
// import BaseFooter from "../Pages/BaseFooter";
// import Magnetic from "../Pages/Magnetic";
// import ActionButton from "../Pages/ActionButton";
// import "../../css/style.css";

function About() {
  return (
    <div className="container">
      <Nav />

      <div className="about-container">
        <h1 className="About-header">
          Code with Purpose, Design with Passion, Deliver with excellence{" "}
        </h1>

        <div className="about-section">
          <h1 className="my-self">
            Hello, I'm Adegbasa Favour A Dynamic Creative Web Developer with 4+
            years' hands-on experience, specializing in transforming static
            concepts into interactive digital masterpieces. Proficient in
            cutting-edge web technologies, I leverage my skills as a digital
            paintbrush, breathing vitality into designs through seamless
            animations and user-centric experiences. Seeking opportunities to
            make a significant positive impact in any organization.
          </h1>

          <div>
            <img
              src="/images/continous.gif"
              alt="Continous"
              className="continous"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

// Greeting.js (Create a new component for the greeting)
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Get current time and determine greeting based on hours
    const currentTime = new Date().getHours();
    let newGreeting = "";

    if (currentTime >= 5 && currentTime < 12) {
      newGreeting = "Good morning,";
    } else if (currentTime >= 12 && currentTime < 18) {
      newGreeting = "Good afternoon,";
    } else {
      newGreeting = "Good evening,";
    }

    // Append additional greeting based on the page location
    if (location.pathname === "/") {
      newGreeting += " Welcome to my Home Section";
    } else if (location.pathname === "/about") {
      newGreeting += " Welcome to my About Section";
    } else if (location.pathname === "/work") {
      newGreeting += " Welcome to my Project Section";
    }

    setGreeting(newGreeting);
  }, [location.pathname]);

  return (
    <div className="position-align">
      <p className="timeOfDay">{greeting}</p>{" "}
    </div>
  );
};

export default Greeting;

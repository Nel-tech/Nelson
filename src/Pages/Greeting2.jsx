// Greeting.js (Create a new component for the greeting)
import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

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

    setGreeting(newGreeting);
  }, []);

  return (
    <div className="about-align">
      <h4 className="">{greeting}</h4>{" "}
    </div>
  );
};

export default Greeting;

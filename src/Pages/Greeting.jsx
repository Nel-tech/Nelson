import React, { useState, useEffect } from "react";

const Greeting = () => {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const determineTimeOfDay = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setTimeOfDay("Good morning");
      } else if (currentHour >= 12 && currentHour < 18) {
        setTimeOfDay("Good afternoon");
      } else {
        setTimeOfDay("Good evening");
      }
    };

    determineTimeOfDay();
  }, []);

  return (
    <div className="position-align">
      <p className="timeOfDay">{timeOfDay}, welcome to my portfolio!</p>
    </div>
  );
};

export default Greeting;

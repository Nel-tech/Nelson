// Preloader.js
import React, { useState, useEffect } from "react";
import { Vortex } from "react-loader-spinner";
import Greeting from "./Greeting";

const Preloader = () => {
  const timeoutDuration = 100000;
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingComplete(true);
    }, timeoutDuration);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`preloader-container ${
        loadingComplete ? "fade-out" : "fade-in"
      }`}
    >
      {!loadingComplete && (
        <Vortex
          visible={!loadingComplete}
          height="200"
          width="200"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          timeout={timeoutDuration}
        />
      )}

      <div>
        <p>
          <Greeting />
        </p>
      </div>
    </div>
  );
};

export default Preloader;

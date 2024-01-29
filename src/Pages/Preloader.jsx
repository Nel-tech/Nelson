// Preloader.js
import React from "react";
import { Vortex } from "react-loader-spinner";
import { useState, useEffect } from "react";
const Preloader = () => {
  const timeoutDuration = 60000;
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingComplete(true);
    }, timeoutDuration);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={`preloader-container ${loadingComplete ? "fade-out" : ""}`}>
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
    </div>
  );
};

export default Preloader;

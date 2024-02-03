// Preloader.js
import React, { useState, useEffect } from "react";
import { Vortex } from "react-loader-spinner";
import Greeting from "./Greeting";

const Preloader = () => {
  const timeoutDuration = 1000000; // Adjusted to 10 seconds for example
  const [loadingComplete, setLoadingComplete] = useState(false);
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingComplete(true);
    
    }, timeoutDuration);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className='preloader-container' 
    >
      {!loadingComplete && (
        <Vortex
          visible={!loadingComplete}
          height="300"
          width="300"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={[
            "cornflowerblue",
            "gold",
            "blue",
            "white",
            "orange",
            "#d4cece",
          ]}
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

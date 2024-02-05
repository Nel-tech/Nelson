// Preloader.js
import React, { useState, useEffect } from "react";
import { Vortex } from "react-loader-spinner";
import Greeting from "./Greeting";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ children }) => {
  const timeoutDuration = 2000;
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingComplete(true);
    }, timeoutDuration);

    return () => clearTimeout(timeout);
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence mode="wait">
      {!loadingComplete ? (
        <div className="preloader-container">
          <Vortex
            visible={!loadingComplete}
            height={350}
            width={350}
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
          <div className="position-align">
            <h6 className="timeOfDay">
              <Greeting />
            </h6>
          </div>
        </div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

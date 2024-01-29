// Preloader.js
import React, { useState, useEffect } from "react";
import { Vortex } from "react-loader-spinner";
import { motion, useAnimation } from "framer-motion";

const Preloader = () => {
  const timeoutDuration = 60000; // 60 seconds
  const [loadingComplete, setLoadingComplete] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingComplete(true);
    }, timeoutDuration);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      controls.start({ opacity: 0 });
    } else {
      controls.start({ opacity: 1 });
    }
  }, [loadingComplete, controls]);

  return (
    <motion.div
      className={`preloader-container`}
      initial={{ opacity: 1 }}
      animate={controls}
      exit={{ opacity: 0 }}
    >
      {!loadingComplete && (
        <Vortex
          height={200}
          width={200}
          color="#00BFFF"
          loading={!loadingComplete}
          ariaLabel="vortex-loading"
        />
      )}
    </motion.div>
  );
};

export default Preloader;

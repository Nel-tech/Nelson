import "../../css/style.css";
import React, { useEffect, useState } from 'react';
import Preloader from '../../Pages/Preloader';
import Nav from "../../Pages/Nav";
import Intro from "../../Pages/Intro";
import Footer from "../../Pages/Footer";
import { motion } from "framer-motion";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay, replace this with your actual data loading logic
    const fakeDataLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Adjust the time as needed
    };

    fakeDataLoading();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <div>
      <div className="container">
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Nav />
            <Intro />
          </>
        )}
      </div>
      <Footer />
    </div>
    </motion.div>
  );
}

export default Home;

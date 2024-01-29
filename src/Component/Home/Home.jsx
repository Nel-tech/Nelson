import "../../css/style.css";
import React, { useEffect, useState } from 'react';
import Preloader from '../../Pages/Preloader';
import Nav from "../../Pages/Nav";
import Intro from "../../Pages/Intro";
import Footer from "../../Pages/Footer";

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
  );
}

export default Home;

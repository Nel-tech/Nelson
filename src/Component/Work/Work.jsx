import React, { useEffect, useState } from "react";
import Preloader from "../../Pages/Preloader";
import Nav from "../../Pages/Nav";
import Footer from "../../Pages/Footer";
import "../../css/style.css";
import Magnetic from "../../Pages/Magnetic";
import { motion } from "framer-motion";

function Work() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeDataLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fakeDataLoading();
  }, []);

  return (
    <div>
      <Preloader>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <Nav />
            <div className="work-container">
              <h1 className="heading">
                Crafting Engaging Experiences, Designing Innovative Solutions,
                Bridging Frontiers.
              </h1>
              <main className="lat__works">
                <p className="lat-title">Latest Works</p>

                <small>
                  <div className="work-sect">
                    <div className="img-container">
                      <a
                        href="https://multi-page-website-qxy0by7jb-nel-tech.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/images/Designo2.jpg"
                          alt="Designo-Multi-Page"
                          className="img-works"
                        />
                      </a>
                    </div>

                    <div className="work-title">
                      <p className="work-heading">Designo-Multi-Page-Website</p>

                      <p className="work-description">
                        Built for the Frontend Mentor challenge, Designo
                        reimagines a fictional company's online presence. This
                        dynamic website boasts a modern, visually-appealing
                        interface that seamlessly adapts to any device.
                        Showcasing the company's services and portfolio, Designo
                        delivers a sleek and user-friendly experience,
                        effortlessly engaging visitors across all platforms.
                      </p>
                      <div className="horizontal"></div>
                    </div>

                    <div className="button-container">
                      <Magnetic>
                        <div>
                          <a
                            href="https://multi-page-website-qxy0by7jb-nel-tech.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="btn-link">Live Site</button>
                          </a>
                        </div>
                      </Magnetic>
                    </div>
                  </div>

                  <div className="work-sect">
                    <div className="img-container">
                      <a
                        href="https://coffeeroasters-subscription-site-boxa1qf9o-nel-tech.vercel.app/index.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/images/Coffee2.jpg"
                          alt="Coffee-Subscriptio-Site"
                          className="img-works"
                        />
                      </a>
                    </div>

                    <div className="work-title">
                      <p className="work-heading">
                        Coffeeroasters-Subscription-Site
                      </p>
                      <p className="work-description">
                        Explore the CoffeeRoasters Subscription Site for a
                        premium coffee journey. Choose from diverse subscription
                        plans crafted for unique tastes. Access an order summary
                        modal for a personalized brew. Where convenience
                        seamlessly blends with top-notch quality, ensuring an
                        exceptional and satisfying experience for coffee
                        enthusiasts.
                      </p>
                      <div className="horizontal"></div>
                    </div>

                    <div className="button-container">
                      <Magnetic>
                        <div>
                          <a
                            href="https://coffeeroasters-subscription-site-boxa1qf9o-nel-tech.vercel.app/index.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="btn-link">Live Site</button>
                          </a>
                        </div>
                      </Magnetic>
                    </div>
                  </div>

                  <div className="work-sect">
                    <div className="img-container">
                      <a
                        href="https://furniture-rental.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/images/Furniture-Rental.png"
                          alt="Furniture-Rental"
                          className="img-works"
                        />
                      </a>
                    </div>

                    <div className="work-title">
                      <p className="work-heading">Furniture Rental </p>
                      <p className="work-description">
                        Thrilled to be part of the Furniture Rental Project
                        Twitter Challenge! 🛋️🚀 Our team is redefining the way
                        we furnish spaces with innovation and creativity. Join
                        us on this coding journey as we shape the future of
                        furniture rental. #FurnitureRentalChallenge
                        #TechInnovation #CodeWithPassion 💻✨
                      </p>
                      <div className="horizontal"></div>
                    </div>

                    <div className="button-container">
                      <Magnetic>
                        <div>
                          <a
                            href="https://furniture-rental.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="btn-link">Live Site</button>
                          </a>
                        </div>
                      </Magnetic>
                    </div>
                  </div>

                  <div className="work-sect">
                    <div className="img-container">
                      <img
                        src="/images/IP-address-tracker.jpg"
                        alt="MediCare"
                        className="img-works"
                      />
                    </div>

                    <div className="work-title">
                      <p className="work-heading">IP-Address-Tracker</p>
                      <p className="work-description">
                        Experience seamless responsiveness across all devices as
                        you effortlessly navigate through interactive elements,
                        including hover states, and access real-time location
                        information by viewing your own IP address on the map,
                        or search for any IP addresses or domains to reveal key
                        details and locations instantly.
                      </p>
                      <div className="horizontal"></div>
                    </div>

                    <div className="button-container">
                      <Magnetic>
                        <div>
                          <a href="https://ip-address-tracker-nel-tech.vercel.app/">
                            <button className="btn-link">Live Site</button>
                          </a>
                        </div>
                      </Magnetic>
                    </div>
                  </div>

                  <div className="work-sect">
                    <div className="img-container">
                      <img
                        src="/images/RestCountriesApi.jpg"
                        alt="SpaCare-Website"
                        className="img-works"
                      />
                    </div>

                    <div className="work-title">
                      <p className="work-heading">
                        Rest-Countries-Api-With-Color-Theme-Switcher-Master
                      </p>
                      <p className="work-description">
                        Discover, search, and explore countries worldwide with
                        ease: browse through our comprehensive homepage
                        featuring all countries, filter by region, toggle
                        between light and dark modes, and delve into detailed
                        information by clicking on any country to uncover its
                        rich heritage and bordering nations.
                      </p>
                      <div className="horizontal"></div>
                    </div>

                    <div className="button-container">
                      <Magnetic>
                        <div>
                          <a href="https://rest-countries-api-with-color-theme-switcher-master-eta.vercel.app/">
                            <button className="btn-link">Live Site</button>
                          </a>
                        </div>
                      </Magnetic>
                    </div>
                  </div>
                </small>
              </main>
            </div>
          </div>

          <Footer />
        </motion.div>
      </Preloader>
    </div>
  );
}

export default Work;

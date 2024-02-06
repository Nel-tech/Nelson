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
              <img
                src="/images/Designo2.jpg"
                alt="Designo-Multi-Page"
                className="img-works"
              />
            </div>

            <div className="work-title">
              <p className="work-heading">Designo-Multi-Page-Website</p>

              <p className="work-description">
                Designo-Multi-Page-Website a responsive website developed as a
                solution to the Frontend Mentor challenge. This dynamic website
                showcases the fictional company that required a modern and
                visually appealing website to showcase its services and
                portfolio presenting a sleek and modern interface that
                seamlessly adapts to various devices.
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
              <img
                src="/images/Coffee2.jpg"
                alt="Coffee-Subscriptio-Site"
                className="img-works"
              />
            </div>

            <div className="work-title">
              <p className="work-heading">Coffeeroasters-Subscription-Site</p>
              <p className="work-description">
                Welcome to the CoffeeRoasters Subscription Site, a dynamic web
                application designed to provide users with a premium coffee
                subscription experience and Choose from a variety of
                subscription plans tailored to different coffee preferences and
                see an order summary modal of their choices. CoffeeRoasters
                Subscription:where convenience meets quality.
                {/* Welcome to CoffeeRoasters Subscription Site, your one-stop shop
                for crafting the perfect coffee ritual! Our user-friendly web
                application guides you through a personalized journey,
                uncovering your ideal coffee match. Dive into a diverse
                selection of subscription plans, categorized by roast level,
                origin, and flavor profile. CoffeeRoasters Subscription
                Site:where convenience meets quality, and every cup is an
                adventure. */}
              </p>
              <div className="horizontal"></div>
            </div>

            <div className="button-container">
              <Magnetic>
                <div>
                  <a href="#a">
                    <button className="btn-link">Live Site</button>
                  </a>
                </div>
              </Magnetic>
            </div>
          </div>

          <div className="work-sect">
            <div className="img-container">
              <img
                src="/images/Designo2.jpg"
                alt="Designo-Multi-Page"
                className="img-works"
              />
            </div>

            <div className="work-title">
              <p className="work-heading">Designo-Multi-Page-Website</p>
              <p className="work-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus sunt explicabo natus sequi earum velit odit magni
                doloribus veniam quo tempore molestias quibusdam qui saepe
                cupiditate adipisci quam eaque harum a id, atque quas officiis!
                Architecto totam alias sit rem?
              </p>
              <div className="horizontal"></div>
            </div>

            <div className="button-container">
              <Magnetic>
                <div>
                  <a href="#a">
                    <button className="btn-link">Live Site</button>
                  </a>
                </div>
              </Magnetic>
            </div>
          </div>

          <div className="work-sect">
            <div className="img-container">
              <img
                src="/images/Designo2.jpg"
                alt="Designo-Multi-Page"
                className="img-works"
              />
            </div>

            <div className="work-title">
              <p className="work-heading">Designo-Multi-Page-Website</p>
              <p className="work-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus sunt explicabo natus sequi earum velit odit magni
                doloribus veniam quo tempore molestias quibusdam qui saepe
                cupiditate adipisci quam eaque harum a id, atque quas officiis!
                Architecto totam alias sit rem?
              </p>
              <div className="horizontal"></div>
            </div>

            <div className="button-container">
              <Magnetic>
                <div>
                  <a href="#a">
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

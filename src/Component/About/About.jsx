import React, { useEffect, useState } from "react";
import Preloader from "../../Pages/Preloader";
import Nav from "../../Pages/Nav";
import reviews from "../../Pages/reviews";
import ReviewCard from "../../Pages/ReviewCard";
import Footer from "../../Pages/Footer";
import CarouselTemplate from "../../Pages/CarouselTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faSass,
  faPhp,
  faLaravel,
  faGitAlt,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

function About() {
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
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <div className="container">
            <Nav />

            <div className="about-container">
              <h1 className="About-header">
                Create with Purpose, Craft with Passion, Deliver with
                Excellence.
              </h1>

              <div className="about-section">
                <h1 className="my-self">
                  Greetings, I'm Adegbasa Favour, a Dynamic Creative Web
                  Developer with over 4 years of immersive experience. I
                  specialize in bringing static concepts to life, crafting
                  interactive digital masterpieces. Proficient in cutting-edge
                  web technologies, I use my skills as a digital artisan to
                  infuse designs with vitality through seamless animations and
                  user-centric experiences. I am actively seeking opportunities
                  to contribute and make a substantial positive impact in any
                  forward-thinking organization.
                </h1>

                <div>
                  <img
                    src="/images/continous.gif"
                    alt="Continous"
                    className="continous"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="tools">
            <h1>Tools I use</h1>

            <div className="tools-img">
              <div>
                <img
                  src="/images/icon/html5.svg"
                  alt=""
                  className="tools-icon"
                />
              </div>

              <div>
                <FontAwesomeIcon icon={faHtml5} beat className="tools-icon" />
              </div>

              <div>
                <FontAwesomeIcon icon={faCss3} beat className="tools-icon" />
              </div>

              <div>
                <FontAwesomeIcon icon={faJs} beat className="tools-icon" />
              </div>

              <div>
                <FontAwesomeIcon icon={faReact} beat className="tools-icon" />
              </div>

              <div>
                <FontAwesomeIcon icon={faSass} beat className="tools-icon" />
              </div>
              <div>
                <FontAwesomeIcon icon={faPhp} beat className="tools-icon" />
              </div>

              <div>
                <FontAwesomeIcon icon={faLaravel} beat className="tools-icon" />
              </div>

              <div>
                <FontAwesomeIcon icon={faGitAlt} beat className="tools-icon" />
              </div>

              <div>
                <FontAwesomeIcon
                  icon={faGithubAlt}
                  beat
                  className="tools-icon"
                />
              </div>
            </div>
          </div>

          <div className="services">
            <h1 className="section-heading">Services I offer..</h1>
            <article className="services-container">
              <div>
                <h1 className="services-title">Design</h1>
                <p>
                  With a proven history of crafting compelling websites and
                  apps, I consistently produce robust and user-centric digital
                  designs. I firmly believe that a strong company brand forms
                  the cornerstone of every successful website.
                </p>
              </div>

              <div>
                <h1 className="services-title">Development</h1>
                <p>
                  Armed with a versatile skill set and an unwavering commitment
                  to excellence, I thrive across diverse domains, consistently
                  achieving remarkable results. Don't hesitate to reach out for
                  any service you aspire to receive.
                </p>
              </div>

              <div>
                <h1 className="services-title">Others</h1>
                <p>
                  Boasting a diverse skill set and a steadfast dedication to
                  excellence, I thrive across multiple domains, consistently
                  delivering outstanding results. Feel free to reach out for any
                  service you aspire to receive—I'm here to exceed your
                  expectations.
                </p>
              </div>
            </article>
          </div>

          <section data-scroll-section className="reviews">
            <h2>What clients have to say...</h2>
            <CarouselTemplate>
              {reviews.map((item, index) => {
                return <ReviewCard {...item} key={index} />;
              })}
            </CarouselTemplate>
          </section>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default About;

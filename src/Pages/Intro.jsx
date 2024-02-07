import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Magnetic from "../Pages/Magnetic";

const Anime = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "Bringing ideas to life through user-friendly experiences",
          1000,
          "Turning imagination into engaging interactions",
          1000,
          "Making designs functional and intuitive",
          1000,
        ]}
        speed={30}
        repeat={Infinity}
        className="typing"
      />
    </div>
  );
};

function Intro() {
  return (
    <div className="intro">
      <div className="intro-section">
        <p className="intro-p">Hey 😉 I'm</p>
        <h1 className="intro-h">Adegbasa - Favour</h1>
      </div>
      <div>
        <section className="section">
          <div className="vertical-line"></div>

          <h2>Front-End Developer</h2>
        </section>

        <div className="mid-section">
          <p className="mid-text">
            Craft exceptional solutions for businesses, startups, and beyond.
          </p>
        </div>

        <div className="section-intro">
          <div className="vertical-line"></div>
          <Anime />
        </div>
      </div>

      <div>
        <article className="btn-btns">
          <Magnetic>
            <a
              href="https://github.com/Nel-tech"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">Github</button>
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href=" https://ng.linkedin.com/in/favour-nelson-a0164523a"
              className="nav-link"
              target="_blank"
              rel="noopener"
            >
              <button className="btn">Linkedln</button>
            </a>
          </Magnetic>
        </article>
      </div>

      <main className="second-section">
        <p>
          Together, we unlock the potential of groundbreaking ideas through
          effortless collaboration, redefining industry standards with a
          pioneering spirit and a passion for simplicity.
        </p>
        <div className="btn-about">
          <Magnetic>
            <Link to="/work" className="btn-overall">
              <button className="btn">About</button>
            </Link>
          </Magnetic>
        </div>
      </main>

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
                Built for the Frontend Mentor challenge, Designo reimagines a
                fictional company's online presence. This dynamic website boasts
                a modern, visually-appealing interface that seamlessly adapts to
                any device. Showcasing the company's services and portfolio,
                Designo delivers a sleek and user-friendly experience,
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
              <p className="work-heading">Coffeeroasters-Subscription-Site</p>
              <p className="work-description">
                Explore the CoffeeRoasters Subscription Site for a premium
                coffee journey. Choose from diverse subscription plans crafted
                for unique tastes. Access an order summary modal for a
                personalized brew. Where convenience seamlessly blends with
                top-notch quality, ensuring an exceptional and satisfying
                experience for coffee enthusiasts.
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
              <img
                src="/images/SpaCare.png"
                alt="SpaCare-Website"
                className="img-works"
              />
            </div>

            <div className="work-title">
              <p className="work-heading">SpaCare Web Application</p>
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
                    <button className="btn-link">Coming Soon</button>
                  </a>
                </div>
              </Magnetic>
            </div>
          </div>

          <div className="work-sect">
            <div className="img-container">
              <img
                src="/images/MediCare.png"
                alt="MediCare"
                className="img-works"
              />
            </div>

            <div className="work-title">
              <p className="work-heading">MediCare Web Application</p>
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
                    <button className="btn-link">Coming Soon</button>
                  </a>
                </div>
              </Magnetic>
            </div>
          </div>
        </small>
      </main>

      <div className="btn-about">
        <Magnetic>
          <Link to="/work" className="btn-overall">
            <button className="btn" id="btn-work">
              Works
            </button>
          </Link>
        </Magnetic>
      </div>
    </div>
  );
}

export default Intro;

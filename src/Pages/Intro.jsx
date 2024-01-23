import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

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
        speed={50}
        repeat={Infinity}
        style={{ fontSize: "20px" }}
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
          <a
            href="https://github.com/Nel-tech"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">Github</button>
          </a>

          <a
            href="www.linkedin.com/in/favour-nelson-a0164523a"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">Linkedln</button>
          </a>
        </article>
      </div>

      <main className="second-section">
        <p>
          Guided by innovation in the digital realm, we reshape industry
          standards through collaborative efforts, consistently pushing
          boundaries with a pioneering spirit and a commitment to simplicity
        </p>
        <div className="btn-about">
          <Link to="/about">
            <button className="btn">About</button>
          </Link>
        </div>
      </main>

      <main className="lat__works">
        <p>Latest Works</p>

        <small>
          <div className="work-sect">
            <div className="img-container">
              <img
                src="/images/Screenshot (166).png"
                alt="Designo-Multi-Page"
                className="img-works"
              />
            </div>

            <div className="work-title">
              <p>Designo-Multi-Page-Website</p>
              <div className="horizontal"></div>
            </div>

            <div className="button-container">
              <div>
                <a href="#about">
                  <button>Thought Process</button>
                </a>
              </div>

              <div>
                <a href="#a">
                  <button>Live Site</button>
                </a>
              </div>
            </div>
          </div>

          <div className="work-sect">
            <div className="img-container">
              <img
                src="/images/Screenshot (166).png"
                alt="Designo-Multi-Page"
                className="img-works"
              />
            </div>

            <div className="work-title">
              <p>Designo-Multi-Page-Website</p>
              <div className="horizontal"></div>
            </div>

            <div className="button-container">
              <div>
                <a href="#about">
                  <button>Thought Process</button>
                </a>
              </div>

              <div>
                <a href="#a">
                  <button>Live Site</button>
                </a>
              </div>
            </div>
          </div>

          <div className="work-sect">
            <div className="img-container">
              <img
                src="/images/Screenshot (166).png"
                alt="Designo-Multi-Page"
                className="img-works"
              />
            </div>

            <div className="work-title">
              <p>Designo-Multi-Page-Website</p>
              <div className="horizontal"></div>
            </div>

            <div className="button-container">
              <div>
                <a href="#about">
                  <button>Thought Process</button>
                </a>
              </div>

              <div>
                <a href="#a">
                  <button>Live Site</button>
                </a>
              </div>
            </div>
          </div>

          <div className="work-sect">
            <div className="img-container">
              <img
                src="/images/Screenshot (166).png"
                alt="Designo-Multi-Page"
                className="img-works"
              />
            </div>

            <div className="work-title">
              <p>Designo-Multi-Page-Website</p>
              <div className="horizontal"></div>
            </div>

            <div className="button-container">
              <div>
                <a href="#about">
                  <button>Thought Process</button>
                </a>
              </div>

              <div>
                <a href="#a">
                  <button>Live Site</button>
                </a>
              </div>
            </div>
          </div>
        </small>
      </main>

      <div className="btn-about">
        <a href="#about">
          <button className="btn">Works</button>
        </a>
      </div>
    </div>
  );
}

export default Intro;

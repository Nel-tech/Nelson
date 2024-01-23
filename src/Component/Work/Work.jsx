import React from "react";
import Nav from "../../Pages/Nav";
import "../../css/style.css";

function Work() {
  return (
    <div className="container">
      {<Nav />}

      <div className="work-container">
        <h1>Designing Experinces, Crafting Solution, Bridging Frontiers</h1>

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
              <div className="img-container" id="id2">
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
      </div>
    </div>
  );
}

export default Work;

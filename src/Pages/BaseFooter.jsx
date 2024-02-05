import React from "react";
import { styled } from "styled-components";
import Magnetic from "../Pages/Magnetic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubAlt,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const StyledDiv = styled.div`
  position: ${(props) => (props.pos ? props.pos : "absolute")};
  bottom: 0;
  width: 100%;
  max-width: 100%;
  background-color: #b8860b;

  > .base-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > .base-group {
      display: flex;

      > .base-item {
        margin-left: 1.5vw;
        font-family: "Overpass", sans-serif;

        > .base-description {
          font-family: "Overpass", sans-serif;
          font-size: 1vw;
          color: rgb(0, 0, 0);
        }

        > .base-value {
          font-size: 1.1vw;
          color: rgb(0, 0, 0);
          display: flex;
          flex-direction: row;
          padding-left: 0;
          gap: 2rem;
          margin-right: 2vw;

          & div {
            padding-right: 0.5vw;

            > a {
              color: rgb(0, 0, 0);
              font-size: 20px;
            }
          }
        }
      }
    }
  }

  > hr {
    border: none;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  > .copyright {
    width: max-content;
    margin: 0.3vw auto 0 auto;
    font-family: "Overpass", sans-serif;
    font-size: 1.1vw;
    color: rgb(0, 0, 0);
  }

  @media (max-width: 425px) {
    > .base-wrapper {
      > .base-group {
        > .base-item {
          margin-left: 2.3vw;

          > .base-description {
            font-size: 2.3vw;
          }

          > .base-value {
            font-size: 2.5vw;
          }
        }
      }
    }

    > .copyright {
      font-size: 3vw;
    }
  }
`;

const BaseFooter = ({ pos }) => {
  const year = new Date().getFullYear();

  return (
    <StyledDiv pos={pos}>
      <div className="base-wrapper">
        <div className="base-group">
          <div className="base-item">
            <p className="base-description">VERSION</p>
            <p className="base-value">{year}&copy;Edition</p>
          </div>
          <div className="base-item">
            <p className="base-description">LOCAL TIME</p>
            <p className="base-value">Availble soon</p>
          </div>
        </div>
        <div className="base-group">
          <div className="base-item">
            <p className="base-description">SOCIALS</p>
            <ul className="base-value">
              <Magnetic>
                <div>
                  <a
                    href=" https://ng.linkedin.com/in/favour-nelson-a0164523a"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} fade />
                  </a>
                </div>
              </Magnetic>
              <Magnetic>
                <div>
                  <a
                    href="https://github.com/Nel-tech"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithubAlt} fade />
                  </a>
                </div>
              </Magnetic>
              <Magnetic>
                <div>
                  <a
                    href="https://www.twitter.com/manlike_favour"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faXTwitter} fade />
                  </a>
                </div>
              </Magnetic>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <p className="copyright">
        &copy; {year} Portfolio - Adegbasa Favour. All rights reserved
      </p>
    </StyledDiv>
  );
};

export default BaseFooter;

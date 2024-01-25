import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import BaseFooter from "../Pages/BaseFooter";
import Magnetic from "../Pages/Magnetic";
import ActionButton from "../Pages/ActionButton";
import { scrollToTop } from "../utils/scrollToTop";

const StyledFooter = styled.footer`
  height: 90vh;
  position: relative;
  background-color: #b8860b;

  > .footer-group {
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;

    > .footer-elements {
      margin: 0 12vw 5vw;
      display: inline-block;

      > h1 {
        letter-spacing: 0.6vw;
        font-size: 5.5vw;
        height: max-content;
        font-weight: 900;
        font-family: "Overpass", sans-serif;
        color: rgb(0, 0, 0);
      }
      > .element {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.55);

        p {
          letter-spacing: 0.5vw;
          padding: 2vw 1vw;
          cursor: pointer;
          font-size: 1.1vw;

          > a {
            color: rgb(0, 0, 0);
            font-family: "Overpass", sans-serif;
          }
        }
      }
      > .footer-contact-button {
        float: right;
        margin-top: 2vw;
        margin-right: 2vw;
      }
    }
  }

  @media (max-width: 425px) {
    > .footer-group {
      > .footer-elements {
        margin: 0;
        > h1 {
          font-size: 11vw;
        }

        > .element {
          p {
            font-size: 2.5vw;
          }
        }

        > .footer-contact-button {
          margin-top: 8vw;
          margin-right: 17vw;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-group">
        <div className="footer-elements">
          <h1>Let's Work Together</h1>
          <div className="element">
            <Magnetic>
              <p>
                <a href="mailto:favournelson82@gmail.com">
                  favournelson82@gmail.com
                </a>
              </p>
            </Magnetic>
          </div>
          <div className="element">
            <Magnetic>
              <p>
                <a href="tel:+2349081715621">+2349081715621</a>
              </p>
            </Magnetic>
          </div>
          <div className="footer-contact-button">
            <Magnetic>
              <Link to={"/contact"} onClick={scrollToTop}>
                {
                  <ActionButton
                    bgcolor="rgb(0, 0, 0)"
                    color="#b8860b"
                    value="Contact"
                  />
                }
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
      <BaseFooter />
    </StyledFooter>
  );
};

export default Footer;

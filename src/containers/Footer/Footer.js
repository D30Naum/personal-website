import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import macLogo from "./macalester.jpeg";
import uwcLogo from "./uwc.jpeg";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer__content">
        <div className="footer__content-title">
          Available and excited to collaborate in cool projects!
          <div className="footer__content-title-subtext">Hit me up!</div>
        </div>
        <div className="footer__content-contacts">
          <div className="footer_content-images">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />
          </div>
          <div className="footer__content-contacts-text">
            <a href="mailto:naumdevi@gmail.com">Send Email</a>
            <a href="https://www.linkedin.com/in/devi-naum/">LinkedIn</a>
            <a href="https://www.instagram.com/devi_naum/">Instagram</a>
            <a href="https://github.com/D30Naum">Github</a>
          </div>
        </div>
      </div>
      <div className="footer__content-right">
        <div className="footer__content-right-images">
          <a href="https://www.macalester.edu"><img src={macLogo}/></a>
          <a href="https://www.uwc.org/"><img src={uwcLogo}/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

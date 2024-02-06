import React from "react";
import Typewriter from "typewriter-effect";
import personalPhoto from './personal.png';
import "./header.css";

const Header = () => {

  return (
    <div className="website__name" id="home">
      <div className="website__name-top_page scale-up-top">
        <div className="website__name-top_page_name">
          <h1 className="name" color="white">
            Devi Naum
          </h1>
          <p className="position">
            <div className="typewriter"><Typewriter onInit={(typewriter) => {
                typewriter
                .typeString("I am a passionate Investor")
                .pauseFor(1000)
                .deleteChars(8)
                .typeString("Designer")
                .pauseFor(1000)
                .deleteChars(6)
                .typeString("veloper")
                .start()
              }}
              /></div></p>
        <p className="description">
            My passion is to come up with new creative designs and solutions to exceed your expectations and beyond. 
        </p>
        </div>
        <div>
          <img className="personal-image" src={personalPhoto} alt="Photo of Devi"/>
        </div>
        <a id="scroll-btn" href="#skills"></a>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Fill } from 'react-icons/ri';
import './topnav.css';

const Topnav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="website__topnav" id='Navbar'>
      <div className="website__topnav-links">
        <div className="website__topnav-links_container">
          <p><a href="#top">home</a></p>
          <p><a href="#work">description</a></p>
          <p><a href="#skills">skills</a></p>
          <p><a href="#experiences">experience</a></p>
          <p><a href="#contact">contact</a></p>
        </div>
      </div>
      <div className="website__topnav-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu2Fill color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="website__topnav-menu_container">
          <div className="website__topnav-menu_container-links">
          <p><a href="#home">home</a></p>
          <p><a href="#skills">skills</a></p>
          <p><a href="#work">work</a></p>
          <p><a href="#experience">experiences</a></p>
          <p><a href="#contact">contact</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Topnav;

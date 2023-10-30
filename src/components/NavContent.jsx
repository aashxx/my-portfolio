import React from 'react';

const NavContent = ({setOpenMenu}) => {
  return (
    <>
      <h2>Aashir.</h2>
      <div>
        <a href="#home" onClick={() => setOpenMenu(false)}>Home</a>
        <a href="#work" onClick={() => setOpenMenu(false)}>Work</a>
        <a href="#timeline" onClick={() => setOpenMenu(false)}>Experience</a>
        <a href="#services" onClick={() => setOpenMenu(false)}>Services</a>
        <a href="#skills" onClick={() => setOpenMenu(false)}>Skills</a>
        <a href="#contact" onClick={() => setOpenMenu(false)}>Contact</a>
      </div>
      <a href="mailto:tmohamedaashir@gmail.com">
        <button>Email</button>
      </a>
    </>
  )
}

export default NavContent;

import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      {/* <div>
        <h2>My Resume</h2>
        <a href="https://drive.google.com/file/d/1q0PyU9gYXnpDOlTvhbZRs-RmEDc4bdLa/view?usp=share_link">Resume</a>
      </div>
      <div className='aashir'>
        <img src="https://avatars.githubusercontent.com/u/126315398?v=4" alt="Aashir" />
        <h2>Mohamed Aashir</h2>
        <p>Copyrights Reserved</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
            <a href="https://instagram.com/mohamed_aashir_" target='blank'>
                <AiFillInstagram />
            </a>
            <a href="https://linkedin.com/in/aashxx" target='blank'>
                <AiFillLinkedin />
            </a>
            <a href="https://github.com/aashxx" target='blank'>
                <AiFillGithub />
            </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a> */}
      <div className='resume'>
        <h2>My Resume</h2>
        <div>
          <a href="https://drive.google.com/file/d/1q0PyU9gYXnpDOlTvhbZRs-RmEDc4bdLa/view?usp=share_link" target='blank'>Resume</a>
          <a href="mailto:tmohamedaashir@gmail.com" target='blank'>Email</a>
        </div>
      </div>
      <div className='author'>
        <img src="https://avatars.githubusercontent.com/u/126315398?v=4" alt="Aashir" />
        <h2>Mohamed Aashir</h2>
        <p>Chennai | Tamilnadu | India</p>
      </div>
      <div className='social'>
        <h2>Social Media</h2>
        <article>
            <a href="https://instagram.com/mohamed_aashir_" target='blank'>
                <AiFillInstagram />
            </a>
            <a href="https://linkedin.com/in/aashxx" target='blank'>
                <AiFillLinkedin />
            </a>
            <a href="https://github.com/aashxx" target='blank'>
                <AiFillGithub />
            </a>
        </article>
      </div>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  )
}

export default Footer;

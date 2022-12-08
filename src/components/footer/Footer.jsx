import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Real Trust
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>Why us?</a>
        </li>
        <li>
          <a href='#experience'>About</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Experience</a>
        </li>
        <li>
          <a href='#testimonials'>Costumers</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a
          href='https://www.facebook.com/real.trust'
          target='_blank'
          rel='noreferrer'>
          <FaFacebookF />
        </a>
        <a
          href='https://www.instagram.com/realtrustok'
          target='_blank'
          rel='noreferrer'>
          <FiInstagram />
        </a>
        <a
          href='https://api.whatsapp.com/send?phone=542634803419'
          target='_blank'
          rel='noreferrer'>
          <BsWhatsapp />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Enzo Fiol. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

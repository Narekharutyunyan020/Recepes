import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.leftSection}>
        <div className={s.logo}>
          <img src="/Logo.png" alt="Logo" />
        </div>
        <h2>My Recipe Site</h2>
      </div>

      <nav className={s.nav}>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/about">About Us</Link>
        <Link to="/tips">Cooking Tips</Link>
      </nav>

      <div className={s.rightSection}>
        <FaFacebookF className={s.icon} />
        <FaInstagram className={s.icon} />
        <FaYoutube className={s.icon} />
        <FaTwitter className={s.icon} />
      </div>
    </footer>
  );
};

export default Footer;

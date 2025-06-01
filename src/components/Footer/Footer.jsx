import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import s from './Footer.module.scss';

const Footer = () => {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (modal) {
      setTimeout(() => { setModal(false) }, 3000)
    }
  }, [modal])
  return (<>
    <div className="container">
      <div className={s.subscribe}>
        <h3>Subscribe</h3>
        <h2>Join the fun. <br /> Subscribe now!</h2>
        <p>
          Subscribe to our newsletter for a weekly serving of recipes, cooking tips,
          and exclusive insights straight to your inbox.
        </p>

        <div className={s.inputWrapper}>
          <input type="email" placeholder="Email Address" />
          <button onClick={() => setModal(true)}>Subscribe</button>
        </div>
      </div>
    </div>
    <div className={`${s.modal} ${modal ? s.active : ""}`}>Thank you for subscribing!</div>
    <footer className={s.footer}>
      <div className={s.leftSection}>
        <div className={s.logo}>
          <img src="/Logo.png" alt="Logo" />
        </div>
        <h2>My Recipe Site</h2>
      </div>

      <nav className={s.nav}>
        <Link to="/">Home</Link>
        <Link to="/recipes?search=">Recipes</Link>
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
  </>
  );
};

export default Footer;

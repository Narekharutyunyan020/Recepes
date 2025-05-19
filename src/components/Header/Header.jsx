import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.leftSection}>
        <div className={s.logo}>
       <a href="">  <img src="/Logo.png" alt="Previous" /> </a> 
        </div> 
        <h1>Cooks <br /> Delight</h1>
      </div>


      <nav className={s.nav}>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/about">About Us</Link>
        <Link to="/tips">Cooking Tips</Link>
      </nav>
      <div className={s.rightSection}>
        <input
          type="text"
          placeholder="Search recipes..."
          className={s.searchInput}
        />
        <button className={s.subscribeButton}>Subscribe</button>
      </div>
    </header>
  );
};

export default Header;

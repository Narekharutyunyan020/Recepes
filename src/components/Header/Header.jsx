import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={s.header}>
      <div className={s.leftSection}>
        <div className={s.logo}>
          <a href="/">
            <img src="/Logo.png" alt="Logo" />
          </a>
        </div>
        <h1>
          Cooks <br /> Delight
        </h1>
      </div>

      <button className={s.menuToggle} onClick={toggleMenu}>
        ☰
      </button>

      {/* Desktop Navigation */}
      <nav className={s.nav}>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/about">About Us</Link>
        <Link to="/tips">Cooking Tips</Link>
      </nav>

      {/* Desktop Search/Subscribe */}
      <div className={s.rightSection}>
        <input type="text" placeholder="Search recipes..." className={s.searchInput} />
        <button className={s.subscribeButton}>Subscribe</button>
      </div>

      {/* Slide-in Mobile Menu */}
      <div className={`${s.mobileMenu} ${menuOpen ? s.open : ""}`}>
        {/* Վերնամաս */}
        <div className={s.menuHeader}>
          <span>Cooks Delight</span>
          <button onClick={closeMenu} className={s.closeBtn}>×</button>
        </div>

        {/* Հղումներ */}
        <div className={s.menuLinks}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/recipes" onClick={closeMenu}>Recipes</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/tips" onClick={closeMenu}>Cooking Tips</Link>
        </div>

        {/* Որոնում ու subscribe */}
        <div className={s.menuSearch}>
          <input type="text" placeholder="Search recipes..." className={s.searchInput} />
          <button className={s.subscribeButton}>Subscribe</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

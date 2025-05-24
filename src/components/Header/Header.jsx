import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
        <NavLink to="/" className={({ isActive }) => isActive ? s.active : ""}>Home</NavLink>
        <NavLink to="/recipe" className={({ isActive }) => isActive ? s.active : ""}>Recipes</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? s.active : ""}>About Us</NavLink>
        <NavLink to="/tips" className={({ isActive }) => isActive ? s.active : ""}>Cooking Tips</NavLink>
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
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? s.active : ""}>Home</NavLink>
          <NavLink to="/recipe" onClick={closeMenu} className={({ isActive }) => isActive ? s.active : ""}>Recipes</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? s.active : ""}>About Us</NavLink>
          <NavLink to="/tips" onClick={closeMenu} className={({ isActive }) => isActive ? s.active : ""}>Cooking Tips</NavLink>
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

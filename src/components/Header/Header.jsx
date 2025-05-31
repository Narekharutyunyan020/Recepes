import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import s from "./Header.module.scss";
import { useForm } from "react-hook-form";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    window.document.body.style.height = !menuOpen ? "100dvh" : "auto";
    window.document.body.style.overflow = !menuOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    window.document.body.style.height = "auto";
    window.document.body.style.overflow = "auto";
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    navigate(`/recipes?search=${data.search}`)
  };

  return (
    <header className={s.header}>
      <Link to="/">
        <div className={s.leftSection}>
          <img src="/Logo.png" alt="Logo" />
          <h1>
            Cooks <br /> Delight
          </h1>
        </div>
      </Link>

      <button className={s.menuToggle} onClick={toggleMenu}>☰</button>

      {/* Desktop Navigation */}
      <nav className={s.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? s.active : ""}>Home</NavLink>
        <NavLink to="/recipes" className={({ isActive }) => isActive ? s.active : ""}>Recipes</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? s.active : ""}>About Us</NavLink>
        <NavLink to="/tips" className={({ isActive }) => isActive ? s.active : ""}>Cooking Tips</NavLink>
      </nav>

      {/* Desktop Search/Subscribe */}
      <div className={s.rightSection}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Search recipes..."
            className={s.searchInput}
            {...register("search")}
          />
        </form>

        <button className={s.subscribeButton}>Subscribe</button>
      </div>

      {/* Slide-in Mobile Menu */}
      <div className={`${s.mobileMenu} ${menuOpen ? s.open : ""}`}>
        <div className={s.menuHeader}>
          <span>Cooks Delight</span>
          <button onClick={closeMenu} className={s.closeBtn}>×</button>
        </div>

        <div className={s.menuLinks}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? s.active : ""}>Home</NavLink>
          <NavLink to="/recipes" onClick={closeMenu} className={({ isActive }) => isActive ? s.active : ""}>Recipes</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? s.active : ""}>About Us</NavLink>
          <NavLink to="/tips" onClick={closeMenu} className={({ isActive }) => isActive ? s.active : ""}>Cooking Tips</NavLink>
        </div>

        <div className={s.menuSearch}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Search recipes..."
              className={s.searchInput}
              {...register("searchMobile")}
            />
            <button type="submit">Search</button>
          </form>

          <button className={s.subscribeButton}>Subscribe</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

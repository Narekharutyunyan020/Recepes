import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import s from "./Header.module.scss";
import { useForm } from "react-hook-form";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");

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

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      search: searchQuery,
    },
  });

  useEffect(() => {
    reset({ search: searchQuery });
  }, [location.search, reset, searchQuery]);

  const onSubmit = ({ search }) => {
    navigate(`/recipes?search=${search}`);
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

      <button className={s.menuToggle} onClick={toggleMenu}>
        ☰
      </button>

      {/* Desktop Navigation */}
      <nav className={s.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/recipes?search="
          className={({ isActive }) => (isActive ? s.active : "")}
        >
          Recipes
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? s.active : "")}
        >
          About Us
        </NavLink>
        <NavLink
          to="/tips"
          className={({ isActive }) => (isActive ? s.active : "")}
        >
          Cooking Tips
        </NavLink>
      </nav>

      {/* Desktop Search/Subscribe */}
      <form className={s.rightSection} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Search recipes..."
          className={s.searchInput}
          {...register("search")}
        />
        <button className={s.subscribeButton}>Search</button>
      </form>

      {/* Slide-in Mobile Menu */}
      <div className={`${s.mobileMenu} ${menuOpen ? s.open : ""}`}>
        <div className={s.menuHeader}>
          <span>Cooks Delight</span>
          <button onClick={closeMenu} className={s.closeBtn}>
            ×
          </button>
        </div>

        <div className={s.menuLinks}>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes?search="
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            Recipes
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/tips"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? s.active : "")}
          >
            Cooking Tips
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navLinks } from "../../constants/index.jsx";
import logo from "/logo.png";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { slideBottom } from "../../utility/animation";

const Header = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 滑動偵測 navbar 背景
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 滑動自動高亮 active 並更新 URL hash
  useEffect(() => {
    const sections = navLinks
      .map((nav) => document.getElementById(nav.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // 初始頁面 hash 導向
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActive(hash);
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // 點擊 scroll
  const handleNavClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setToggle(false); 
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <motion.div variants={slideBottom(0.2)}
        initial="initial"
        animate="animate"
        className="navbarContainer"
      >
        <Link
          to="/"
          className="logoContainer"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="logo" className="logo" />
          <p className="logoText">YI-Jing</p>
        </Link>

        {/* Desktop Menu */}
        <ul className="navLinks">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`navItem ${active === nav.id ? "active" : ""}`}
              onClick={() => handleNavClick(nav.id)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="mobileMenu">
          <div className="menuIcon" onClick={() => setToggle(!toggle)}>
            {toggle ? <IoCloseSharp size={28} /> : <CgMenuRight size={28} />}
          </div>
          {toggle && (
            <div className="mobileDropdown">
              <ul>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`mobileItem ${active === nav.id ? "active" : ""}`}
                    onClick={() => handleNavClick(nav.id)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;

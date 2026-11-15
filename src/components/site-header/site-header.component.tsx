import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Drawer } from "@mui/material";
import CloseRounded from "@mui/icons-material/CloseRounded";
import MenuRounded from "@mui/icons-material/MenuRounded";

import mark from "../../assets/brand/mark.webp";
import LanguageSwitch from "../language-switch/language-switch.component";
import { pages } from "../../types/pages";

const NavList = ({ onNavigate }: { onNavigate?: () => void }) => {
  const { t } = useTranslation();
  return (
    <ul>
      {pages.map((page) => (
        <li key={page.id}>
          <NavLink to={page.link} end={page.link === "/"} className="nav-link" onClick={onNavigate}>
            {t(page.title)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const SiteHeader = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap site-header__bar">
        <Link to="/" className="brand" aria-label={t("homeLink")}>
          <img src={mark} alt="" width={40} height={40} />
          <span aria-hidden="true">Dylan Andrew</span>
        </Link>

        <nav className="site-nav" aria-label={t("mainNav")}>
          <NavList />
        </nav>
        <LanguageSwitch />

        <button
          type="button"
          className="menu-button"
          aria-label={t("openMenu")}
          aria-expanded={menuOpen}
          aria-controls="site-drawer"
          onClick={() => setMenuOpen(true)}
        >
          <MenuRounded />
        </button>
      </div>

      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <div className="drawer" id="site-drawer">
          <div className="drawer__top">
            <img src={mark} alt="" width={40} height={40} />
            <button
              type="button"
              className="menu-button"
              style={{ display: "inline-flex" }}
              aria-label={t("closeMenu")}
              onClick={() => setMenuOpen(false)}
            >
              <CloseRounded />
            </button>
          </div>
          <nav aria-label={t("mainNav")}>
            <NavList onNavigate={() => setMenuOpen(false)} />
          </nav>
          <LanguageSwitch />
        </div>
      </Drawer>
    </header>
  );
};

export default SiteHeader;

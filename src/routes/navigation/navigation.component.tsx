import { useState, useEffect, useRef, Fragment } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import NavButton from "../../components/nav-button/nav-button.component";
import DrawerMenu from "../../components/drawer-menu/drawer-menu.component";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import getNavigationData from "./getNavigationData";
import LanguageSelector from "../../components/language-selector/language-selector.component";
import Footer from "../../components/footer/footer.component";
import DALogoSrc from "./../../assets/21st.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  const toggleDrawer = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { pages } = getNavigationData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setShowNav(true);
      } else if (currentScrollY < lastScrollY.current) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <Slide appear={false} direction="down" in={showNav}>
        <AppBar
          position="sticky"
          sx={{
            bgcolor: "rgba(11, 17, 32, 0.85)",
            backdropFilter: "blur(12px)",
            boxShadow: "none",
            borderBottom: "1px solid rgba(148, 163, 184, 0.1)",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                component="img"
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  height: 21,
                  width: 21,
                }}
                alt="21st Logo"
                src={DALogoSrc}
              />
              <Typography
                component={Link}
                to={"/"}
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  color: "text.primary",
                  textDecoration: "none",
                }}
              >
                Dylan Andrew
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="open menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => toggleDrawer()}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <DrawerMenu
                  pages={pages}
                  isMenuOpen={isMenuOpen}
                  toggleDrawer={toggleDrawer}
                />
              </Box>
              <Box
                component="img"
                sx={{
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                  height: 21,
                  width: 21,
                }}
                alt="21st Logo"
                src={DALogoSrc}
              />
              <Typography
                variant="h5"
                noWrap
                component={Link}
                to={"/"}
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  color: "text.primary",
                  textDecoration: "none",
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                  fontWeight: 700,
                }}
              >
                Dylan Andrew
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <NavButton key={page.id} page={page} />
                ))}
              </Box>
              <LanguageSelector />
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
      <Outlet />
      <Footer />
    </Fragment>
  );
};
export default Navigation;

import { useState, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import NavButton from "../../components/nav-button/nav-button.component";
import ActiveIcon from "../../components/active-icon/active-icon.component";
import DrawerMenu from "../../components/drawer-menu/drawer-menu.component";
import {
  AppBar,
  Box,
  Container,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import getNavigationData from "./getNavigationData";
import LanguageSelector from "../../components/language-selector/language-selector.component";
import DALogoSrc from "./../../assets/21st.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleDrawer = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { pages, activeIcons } = getNavigationData();

  return (
    <Fragment>
      <AppBar
        position="static"
        sx={{
          borderRadius: "10px",
          bgcolor: "primary.main",
          boxShadow: "none",
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
              to={"/dylan-andrew-21/"}
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
                aria-label="account of current user"
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
                fontStyle: "italic",
                color: "text.primary",
                textDecoration: "none",
              }}
            >
              Dylan Andrew
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <NavButton key={page.id} page={page} />
              ))}
            </Box>
            <Box display="flex" columnGap="2px">
              {activeIcons.map((activeIcon) => (
                <ActiveIcon key={activeIcon.id} activeIcon={activeIcon} />
              ))}
              <Divider
                orientation="vertical"
                sx={{ height: "24px", alignSelf: "center" }}
              />
              <LanguageSelector />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;

import { useState, Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, Outlet } from "react-router-dom";
import NavButton from "../../components/nav-button/nav-button.component";
import { Email, LinkedIn, SportsEsports } from "@mui/icons-material";
import ActiveIcon from "../../components/active-icon/active-icon.component";
import DrawerMenu from "../../components/drawer-menu/drawer-menu.component";

const pages = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Experiences",
    link: "/experiences",
  },
  {
    id: 4,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 5,
    title: "Passions",
    link: "/passions",
  },
];

const activeIcons = [
  {
    id: 1,
    title: "Email",
    icon: <Email />,
    link: "mailto:andrew21dylan@gmail.com",
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: <LinkedIn />,
    link: "https://www.linkedin.com/in/dylan-andrew-razafintsalama/",
  },
  {
    id: 3,
    title: "Itch.io",
    icon: <SportsEsports />,
    link: "",
  },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleDrawer = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              component={Link}
              to={"/"}
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
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
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to={"/"}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
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
            <Box display="flex" columnGap="8px">
              {activeIcons.map((activeIcon) => (
                <ActiveIcon key={activeIcon.id} activeIcon={activeIcon} />
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;

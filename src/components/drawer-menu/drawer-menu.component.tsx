import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Page } from "../../types/pages";

import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DrawerMenu = ({
  pages,
  isMenuOpen,
  toggleDrawer,
}: {
  pages: Page[];
  isMenuOpen: boolean;
  toggleDrawer: () => void;
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <Drawer anchor="left" open={isMenuOpen} onClose={() => toggleDrawer()}>
      <Box role="presentation" onClick={() => toggleDrawer()}>
        <List>
          {pages.map((page) => {
            const isSelected = location.pathname === page.link;

            return (
              <ListItem key={page.id} disablePadding>
                <ListItemButton
                  component={Link}
                  to={page.link}
                  sx={{
                    textTransform: "none",
                    backgroundColor: "transparent",
                    color: isSelected
                      ? theme.palette.primary.contrastText
                      : "text.primary",
                    boxShadow: "none",
                    borderLeft: isSelected
                      ? `2px solid ${theme.palette.primary.contrastText}`
                      : "2px solid transparent",
                    paddingLeft: isSelected ? 2 : 3,
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: theme.palette.primary.contrastText,
                    },
                  }}
                >
                  <ListItemText primary={t(page.title)} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
export default DrawerMenu;

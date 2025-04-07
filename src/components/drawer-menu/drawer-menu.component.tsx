import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Page } from "../../types/pages";

import { Link } from "react-router-dom";

const DrawerMenu = ({
  pages,
  isMenuOpen,
  toggleDrawer,
}: {
  pages: Page[];
  isMenuOpen: boolean;
  toggleDrawer: () => void;
}) => {
  return (
    <Drawer anchor="left" open={isMenuOpen} onClose={() => toggleDrawer()}>
      <Box role="presentation" onClick={() => toggleDrawer()}>
        <List>
          {pages.map((page) => (
            <ListItem key={page.id} disablePadding>
              <ListItemButton component={Link} to={page.link}>
                <ListItemText primary={page.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
export default DrawerMenu;

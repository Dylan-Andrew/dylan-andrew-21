import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import type { Page } from "../../types/pages";

const NavButton = ({ page }: { page: Page }) => {
  return (
    <Button
      variant="contained"
      component={Link}
      to={page.link}
      disableElevation
    >
      {page.title}
    </Button>
  );
};
export default NavButton;

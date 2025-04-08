import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import type { Page } from "../../types/pages";
import { useTranslation } from "react-i18next";

const NavButton = ({ page }: { page: Page }) => {
  const { t } = useTranslation();
  return (
    <Button
      variant="contained"
      component={Link}
      to={page.link}
      disableElevation
    >
      {t(page.title)}
    </Button>
  );
};
export default NavButton;

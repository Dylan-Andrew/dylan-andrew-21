import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import type { Page } from "../../types/pages";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

const NavButton = ({ page }: { page: Page }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      component={Link}
      to={page.link}
      disableElevation
      sx={{
        textTransform: "none",
        backgroundColor: "transparent",
        color: "text.primary",
        boxShadow: "none",
        "&:hover": {
          color: theme.palette.primary.contrastText,
        },
      }}
    >
      {t(page.title)}
    </Button>
  );
};
export default NavButton;

import { Language } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Tooltip, useTheme } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English", icon: "🇺🇸" },
  { code: "fr", name: "Français", icon: "🇫🇷" },
];

const LanguageSelector = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { i18n } = useTranslation();
  const theme = useTheme();

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    handleClose();
  };

  return (
    <div>
      <Tooltip title="Language Menu">
        <IconButton
          onClick={handleClick}
          sx={{
            color: "text.primary",
            "&:hover": {
              backgroundColor: "transparent",
              color: theme.palette.primary.contrastText,
            },
          }}
        >
          <Language />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {languages.map((language) => (
          <MenuItem
            selected={i18n.language === language.code}
            key={language.code}
            onClick={() => {
              changeLanguage(language.code);
            }}
            sx={{
              color:
                i18n.language === language.code
                  ? theme.palette.primary.contrastText
                  : "text.primary",
              "&:hover": {
                backgroundColor: "transparent",
                color: theme.palette.primary.contrastText,
              },
            }}
          >
            {language.icon + " " + language.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageSelector;

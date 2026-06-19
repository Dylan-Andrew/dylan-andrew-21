import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Email, LinkedIn, SportsEsports } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    label: "Email",
    icon: <Email />,
    href: "mailto:andrew21dylan@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: <LinkedIn />,
    href: "https://www.linkedin.com/in/dylan-andrew-razafintsalama/",
  },
  {
    label: "Itch.io",
    icon: <SportsEsports />,
    href: "https://dylanandrew.itch.io/",
  },
];

const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "32px 16px 16px",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          mb: 2,
        }}
      >
        {socialLinks.map((link) => (
          <Box
            key={link.label}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <IconButton
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: "text.secondary",
                "&:hover": {
                  color: theme.palette.primary.contrastText,
                },
              }}
            >
              {link.icon}
            </IconButton>
            <Typography
              component="a"
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              variant="body2"
              sx={{
                color: "text.secondary",
                textDecoration: "none",
                fontSize: "0.85rem",
                "&:hover": {
                  color: theme.palette.primary.contrastText,
                },
              }}
            >
              {link.label}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography sx={{ fontSize: 10, color: "text.secondary" }}>
        {t("copyright")}
      </Typography>
    </Box>
  );
};
export default Footer;

import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <Typography sx={{ fontSize: 10 }}>{t("copyright")}</Typography>
    </Box>
  );
};
export default Footer;

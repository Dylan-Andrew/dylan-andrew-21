import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        padding: "16px",
        textAlign: "center",
        marginBottom: "10px",
      }}
    >
      <Typography sx={{ fontSize: 10 }}>{t("copyright")}</Typography>
    </Box>
  );
};
export default Footer;

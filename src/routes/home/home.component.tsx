import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { TypeAnimation } from "react-type-animation";
import AnimatedIntro from "../../components/animated-images/animated-intro.component";

const Home = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: "20px",
      }}
    >
      <AnimatedIntro />
      <Typography variant="h2" component="h1" sx={{ marginBottom: "32px" }}>
        <TypeAnimation
          sequence={[t("welcome")]}
          wrapper="span"
          speed={21}
          style={{ color: theme.palette.primary.contrastText }}
        />
      </Typography>
      <Typography variant="h6" component="p" sx={{ marginBottom: "16px" }}>
        {t("homeDescription1")}
      </Typography>
      <Typography variant="h6" component="p" sx={{ marginBottom: "32px" }}>
        {t("homeDescription2")}
      </Typography>
      <Link
        to="/about"
        style={{
          textDecoration: "none",
          color: "inherit",
          marginTop: "16px",
        }}
      >
        <Typography
          variant="button"
          sx={{
            textTransform: "none",
            fontSize: "16px",
            border: "1px solid",
            padding: "16px 32px",
            borderRadius: "8px",
            "&:hover": {
              color: theme.palette.primary.contrastText,
            },
          }}
        >
          {t("homeButton")}
        </Typography>
      </Link>
    </Box>
  );
};
export default Home;

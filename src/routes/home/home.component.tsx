import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { TypeAnimation } from "react-type-animation";
import AnimatedIntro from "../../components/animated-images/animated-intro.component";
import Footer from "../../components/footer/footer.component";

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
        my: "10px",
        mx: "50px",
      }}
    >
      <AnimatedIntro />
      <Typography
        variant="h2"
        component="h1"
        sx={{
          marginBottom: "32px",
          fontSize: {
            xs: "32px",
            sm: "48px",
            md: "64px",
          },
          textAlign: "center",
        }}
      >
        <TypeAnimation
          key={t("welcome")}
          sequence={[t("welcome")]}
          wrapper="span"
          speed={21}
          style={{
            color: theme.palette.primary.contrastText,
            textAlign: "center",
          }}
        />
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{ marginBottom: "16px", textAlign: "center" }}
      >
        {t("homeDescription1")}
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{ marginBottom: "32px", textAlign: "center" }}
      >
        {t("homeDescription2")}
      </Typography>
      <Link
        to="/dylan-andrew-21/about"
        style={{
          textDecoration: "none",
          color: "inherit",
          marginTop: "16px",
          marginBottom: "64px",
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
      <Footer />
    </Box>
  );
};
export default Home;

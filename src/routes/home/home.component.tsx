import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { TypeAnimation } from "react-type-animation";
import Footer from "../../components/footer/footer.component";

const featuredProjects = [
  {
    titleKey: "schoolMgmtTitle",
    descriptionKey: "schoolMgmtHighlight1",
    typeKey: "projectTypeWeb",
    typeColor: "#818cf8",
    techStack: ["React", "Django", "PostgreSQL"],
  },
  {
    titleKey: "liveRateTitle",
    descriptionKey: "liveRateHighlight1",
    typeKey: "projectTypeWeb",
    typeColor: "#818cf8",
    techStack: ["React", "FastAPI", "WebSocket"],
  },
  {
    titleKey: "f1CompanionTitle",
    descriptionKey: "f1CompanionHighlight1",
    typeKey: "projectTypeWeb",
    typeColor: "#818cf8",
    techStack: ["React Native", "Expo", "SignalR"],
  },
];

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
        mx: { xs: "20px", sm: "50px" },
      }}
    >
      <Box
        sx={{
          minHeight: { xs: "50vh", md: "60vh" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          mb: 6,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            marginBottom: "16px",
            fontSize: {
              xs: "32px",
              sm: "48px",
              md: "64px",
            },
          }}
        >
          <TypeAnimation
            key={t("welcome")}
            sequence={[t("welcome")]}
            wrapper="span"
            speed={21}
            style={{
              color: theme.palette.primary.contrastText,
            }}
          />
        </Typography>
        <Typography
          variant="h4"
          component="p"
          sx={{
            marginBottom: "8px",
            fontWeight: 700,
            fontSize: {
              xs: "24px",
              md: "36px",
            },
          }}
        >
          {t("homeDescription1")}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          sx={{
            marginBottom: "32px",
            fontWeight: 400,
            fontSize: {
              xs: "14px",
              md: "18px",
            },
          }}
        >
          {t("homeDescription2")}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
          <Button
            component={Link}
            to="/projects"
            variant="contained"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              fontSize: "16px",
              borderRadius: 2,
            }}
          >
            {t("homeButton")}
          </Button>
          <Button
            component={Link}
            to="/about"
            variant="outlined"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              fontSize: "16px",
              borderRadius: 2,
              borderColor: "rgba(148, 163, 184, 0.3)",
              color: "text.primary",
              "&:hover": {
                borderColor: theme.palette.primary.contrastText,
                color: theme.palette.primary.contrastText,
              },
            }}
          >
            {t("homeAboutButton")}
          </Button>
        </Box>
      </Box>

      <Box sx={{ width: "100%", maxWidth: 1200, mb: 6 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 3,
            textAlign: "center",
            background: `linear-gradient(135deg, ${theme.palette.primary.contrastText}, #38bdf8)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("featuredWork")}
        </Typography>
        <Grid container spacing={3}>
          {featuredProjects.map((project) => (
            <Grid key={project.titleKey} size={{ xs: 12, md: 4 }}>
              <Card
                component={Link}
                to="/projects"
                sx={{
                  height: "100%",
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                  borderRadius: 3,
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(129, 140, 248, 0.3)",
                    boxShadow: "0 8px 30px rgba(129, 140, 248, 0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 2.5 }}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}
                  >
                    <Chip
                      label={t(project.typeKey)}
                      size="small"
                      sx={{
                        backgroundColor: project.typeColor,
                        color: "#0b1120",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                      }}
                    />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {t(project.titleKey)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {t(project.descriptionKey)}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {project.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        variant="outlined"
                        size="small"
                        sx={{ fontSize: "0.7rem", height: 24 }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};
export default Home;

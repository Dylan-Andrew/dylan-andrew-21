import { Box, Chip, Grid, Link, Typography, useTheme } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

import myself from "../../assets/DylanAndrew.jpg";

const skillCategories = [
  {
    labelKey: "skillsFrontend",
    skills: ["React", "TypeScript", "Material UI"],
  },
  {
    labelKey: "skillsBackend",
    skills: ["Python", "Django / DRF", "FastAPI", "PHP"],
  },
  {
    labelKey: "skillsDatabase",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    labelKey: "skillsDevOps",
    skills: ["Docker", "Git", "CI/CD", "Pytest", "Jest"],
  },
  {
    labelKey: "skillsGameDev",
    skills: ["Unity", "C#"],
  },
];

const About = () => {
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
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 9 }} sx={{ marginBottom: "20px" }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              marginBottom: "32px",
              fontSize: {
                xs: "32px",
                md: "48px",
              },
              textAlign: "center",
            }}
          >
            {t("about")}
          </Typography>
          <Typography variant="h6" component="p" sx={{ marginBottom: "16px" }}>
            <Trans
              i18nKey="aboutDescription1"
              components={{
                university: (
                  <Link
                    href={`https://www.esiee-it.fr/${t("languageCode")}`}
                    color={theme.palette.primary.contrastText}
                    underline="hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ),
              }}
            />
          </Typography>
          <Typography variant="h6" component="p" sx={{ marginBottom: "16px" }}>
            <Trans
              i18nKey="aboutDescription2"
              components={{
                finetic: (
                  <Link
                    href="https://www.finetic.eu"
                    color={theme.palette.primary.contrastText}
                    underline="hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ),
              }}
            />
          </Typography>
          <Typography variant="h6" component="p" sx={{ marginBottom: "16px" }}>
            {t("aboutDescription3")}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ marginTop: "24px", marginBottom: "16px" }}
          >
            {t("technologiesIntroduction")}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {skillCategories.map((category) => (
              <Box key={category.labelKey}>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.primary.contrastText,
                    fontWeight: 600,
                    mb: 1,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {t(category.labelKey)}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      size="small"
                      sx={{ fontSize: "0.8rem" }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
          <Typography variant="h6" component="p" sx={{ marginTop: "32px" }}>
            {t("aboutDescription4")}
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={myself}
            alt="myself"
            width="100%"
            style={{
              borderRadius: "10%",
              maxWidth: "300px",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default About;

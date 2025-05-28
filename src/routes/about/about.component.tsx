import { Box, Grid, Link, List, Typography, useTheme } from "@mui/material";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { Trans, useTranslation } from "react-i18next";

import myself from "../../assets/DylanAndrew.jpg";

const technologies = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Python",
  "Git",
  "Unity",
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
            ></Trans>
          </Typography>
          <Typography variant="h6" component="p" sx={{ marginBottom: "16px" }}>
            <Trans
              i18nKey="aboutDescription2"
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
            ></Trans>
          </Typography>
          <Typography variant="h6" component="p" sx={{ marginBottom: "16px" }}>
            {t("technologiesIntroduction")}
          </Typography>
          <List>
            <Grid container spacing={2}>
              {technologies.map((technology) => (
                <Grid size={{ xs: 12, sm: 6 }} key={technology}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PlayArrowOutlinedIcon
                      sx={{
                        color: theme.palette.primary.contrastText,
                        marginRight: "8px",
                      }}
                    />
                    <Typography variant="h6" component="li">
                      {technology}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </List>
          <Typography variant="h6" component="p" sx={{ marginTop: "32px" }}>
            {t("aboutDescription3")}
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

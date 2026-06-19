import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import ProjectCard from "../../components/project-card/project-card.component";
import { Project } from "../../types/project";

const projects: Project[] = [
  {
    id: "school-mgmt",
    titleKey: "schoolMgmtTitle",
    descriptionKey: "schoolMgmtDescription",
    type: "web",
    techStack: ["React 19", "TypeScript", "Django 5.2", "DRF", "PostgreSQL", "Docker", "MUI"],
    highlights: [
      "schoolMgmtHighlight1",
      "schoolMgmtHighlight2",
      "schoolMgmtHighlight3",
    ],
    statusKey: "projectStatusProduction",
  },
  {
    id: "liverate-trader",
    titleKey: "liveRateTitle",
    descriptionKey: "liveRateDescription",
    type: "web",
    techStack: ["React 19", "TypeScript", "FastAPI", "PostgreSQL", "WebSocket", "Zustand"],
    highlights: [
      "liveRateHighlight1",
      "liveRateHighlight2",
      "liveRateHighlight3",
    ],
  },
  {
    id: "f1-companion",
    titleKey: "f1CompanionTitle",
    descriptionKey: "f1CompanionDescription",
    type: "mobile",
    techStack: ["React Native", "Expo SDK 56", "TypeScript", "SignalR", "i18next"],
    highlights: [
      "f1CompanionHighlight1",
      "f1CompanionHighlight2",
      "f1CompanionHighlight3",
    ],
  },
  {
    id: "windleton",
    titleKey: "windletonTitle",
    descriptionKey: "windletonDescription",
    type: "game",
    techStack: ["Unity", "C#"],
    highlights: ["windletonHighlight1"],
    link: "https://cheshirethegreatest.itch.io/windleton",
  },
  {
    id: "ascension",
    titleKey: "ascensionTitle",
    descriptionKey: "ascensionDescription",
    type: "game",
    techStack: ["Unity", "C#"],
    highlights: ["ascensionHighlight1"],
    link: "https://dylanandrew.itch.io/ascension",
  },
  {
    id: "finding-gilbert",
    titleKey: "findingGilbertTitle",
    descriptionKey: "findingGilbertDescription",
    type: "game",
    techStack: ["Unity", "C#"],
    highlights: ["findingGilbertHighlight1"],
    link: "https://dylanandrew.itch.io/finding-gilbert",
  },
  {
    id: "vr-effondrement",
    titleKey: "vrEffondrementTitle",
    descriptionKey: "vrEffondrementDescription",
    type: "game",
    techStack: ["Unity", "C#", "VR"],
    highlights: ["vrEffondrementHighlight1"],
    link: "https://toinoncoding.itch.io/vr-effondrement",
  },
];

const Projects = () => {
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
      <Typography
        variant="h2"
        component="h1"
        sx={{
          marginBottom: "16px",
          fontSize: {
            xs: "32px",
            md: "48px",
          },
          textAlign: "center",
          background: `linear-gradient(135deg, ${theme.palette.primary.contrastText}, #38bdf8)`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {t("projectsTitle")}
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        sx={{ marginBottom: "32px", textAlign: "center" }}
      >
        {t("projectsSubtitle")}
      </Typography>
      <Grid container spacing={3} sx={{ maxWidth: 1200 }}>
        {projects.map((project) => (
          <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 4 }}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;

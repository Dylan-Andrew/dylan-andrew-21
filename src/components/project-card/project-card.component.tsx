import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import { Download, SportsEsports } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Project } from "../../types/project";

const typeColors: Record<Project["type"], string> = {
  web: "#818cf8",
  mobile: "#38bdf8",
  game: "#a78bfa",
};

const ProjectCard = ({ project }: { project: Project }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [imgError, setImgError] = useState(false);

  const typeLabel = t(
    project.type === "web"
      ? "projectTypeWeb"
      : project.type === "mobile"
        ? "projectTypeMobile"
        : "projectTypeGame"
  );

  const showPlaceholder = !project.image || imgError;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "rgba(129, 140, 248, 0.3)",
          boxShadow: "0 8px 30px rgba(129, 140, 248, 0.1)",
        },
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        {showPlaceholder ? (
          <Box
            sx={{
              height: 180,
              background: `linear-gradient(135deg, ${typeColors[project.type]}22, ${typeColors[project.type]}08)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: typeColors[project.type],
                opacity: 0.4,
                textAlign: "center",
                px: 2,
              }}
            >
              {t(project.titleKey)}
            </Typography>
          </Box>
        ) : (
          <Box
            component="img"
            src={project.image}
            alt={t(project.titleKey)}
            onError={() => setImgError(true)}
            sx={{
              width: "100%",
              height: 180,
              objectFit: "cover",
              display: "block",
            }}
          />
        )}
        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            display: "flex",
            gap: 1,
          }}
        >
          <Chip
            label={typeLabel}
            size="small"
            sx={{
              backgroundColor: typeColors[project.type],
              color: "#0b1120",
              fontWeight: 600,
              fontSize: "0.7rem",
            }}
          />
          {project.statusKey && (
            <Chip
              label={t(project.statusKey)}
              size="small"
              sx={{
                backgroundColor: "#10b981",
                color: "#0b1120",
                fontWeight: 600,
                fontSize: "0.7rem",
              }}
            />
          )}
        </Box>
      </Box>

      <CardContent
        sx={{ flex: 1, display: "flex", flexDirection: "column", p: 2.5 }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {t(project.titleKey)}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: 1.6 }}
        >
          {t(project.descriptionKey)}
        </Typography>

        <Box sx={{ mb: 2 }}>
          {project.highlights.map((highlightKey) => (
            <Box
              key={highlightKey}
              sx={{ display: "flex", alignItems: "flex-start", mb: 0.5 }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.primary.contrastText,
                  mt: "7px",
                  mr: 1.5,
                  flexShrink: 0,
                }}
              />
              <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                {t(highlightKey)}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: "auto", mb: project.link ? 2 : 0 }}
        >
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

        {project.link && (
          <Button
            onClick={() => window.open(project.link, "_blank")}
            variant="contained"
            startIcon={project.linkLabelKey === "downloadOnItch" ? <Download /> : <SportsEsports />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              mt: "auto",
            }}
          >
            {t(project.linkLabelKey ?? "playOnItch")}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

import { Box, Link, Typography, useTheme } from "@mui/material";
import type { TabData } from "../../types/tab-data";
import { Trans, useTranslation } from "react-i18next";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

const ControlledTabPanel = ({ tabData }: { tabData: TabData }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box>
      <Typography variant="h4" component="h2">
        <Trans
          i18nKey={tabData.title}
          components={{
            title: (
              <Link
                href={tabData.link}
                color={theme.palette.primary.contrastText}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none" }}
              />
            ),
          }}
        ></Trans>
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ color: theme.palette.secondary.main, marginBottom: "16px" }}
      >
        {t(tabData.period)}
      </Typography>
      {tabData.description.map((desc, index) => (
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
        >
          <PlayArrowOutlinedIcon
            sx={{
              color: theme.palette.primary.contrastText,
              marginRight: "8px",
            }}
          />
          <Typography key={index} variant="h6" component="p">
            <Trans
              i18nKey={desc}
              components={{
                fea: (
                  <Link
                    href="https://fea.mg"
                    color={theme.palette.primary.contrastText}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: "none" }}
                  />
                ),
              }}
            ></Trans>
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
export default ControlledTabPanel;

import { Box, Grid, Typography, useTheme } from "@mui/material";
import PassionCard from "../../components/passion-card/passion-card.component";
import f1Icon from "../../assets/f1.svg";
import dotaIcon from "../../assets/dota.svg";
import {
  CalendarMonthOutlined,
  EmojiEventsOutlined,
  FavoriteBorderOutlined,
  FormatQuote,
  LocationOnOutlined,
  PersonOutlineOutlined,
  SportsMotorsportsOutlined,
  TrendingUp,
  WatchLaterOutlined,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Passions = () => {
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
          marginBottom: "24px",
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
        {t("passionTitle")}
      </Typography>

      <Box
        sx={{
          maxWidth: 700,
          textAlign: "center",
          mb: 4,
          position: "relative",
          px: 4,
        }}
      >
        <FormatQuote
          sx={{
            position: "absolute",
            top: -10,
            left: 0,
            fontSize: 40,
            color: theme.palette.primary.contrastText,
            opacity: 0.3,
            transform: "scaleX(-1)",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            fontStyle: "italic",
            lineHeight: 1.8,
            fontWeight: 400,
            color: "text.secondary",
          }}
        >
          {t("passionTitleDescription")}
        </Typography>
        <FormatQuote
          sx={{
            position: "absolute",
            bottom: -10,
            right: 0,
            fontSize: 40,
            color: theme.palette.primary.contrastText,
            opacity: 0.3,
          }}
        />
      </Box>

      <Typography
        variant="body1"
        sx={{
          mb: 5,
          fontWeight: 600,
          color: theme.palette.primary.contrastText,
        }}
      >
        - Dylan Andrew
      </Typography>

      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 6 }}>
          <PassionCard
            title={t("f1Title")}
            subtitle={t("f1Subtitle")}
            description={t("f1Description")}
            svgIcon={
              <img src={f1Icon} width={104} height={104} alt="F1 Logo" />
            }
            stats={[
              {
                label: t("favoriteDriver"),
                value: "Sebastian Vettel",
                icon: <SportsMotorsportsOutlined />,
              },
              {
                label: t("favoriteTeam"),
                value: t("favoriteTeamValue"),
                icon: <EmojiEventsOutlined />,
              },
              {
                label: t("favoriteCircuit"),
                value: "Suzuka",
                icon: <LocationOnOutlined />,
              },
              {
                label: t("yearsFollowing"),
                value: t("yearsFollowingValue"),
                icon: <CalendarMonthOutlined />,
              },
            ]}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PassionCard
            title="Dota 2"
            subtitle={t("dota2Subtitle")}
            description={t("dota2Description")}
            svgIcon={
              <img src={dotaIcon} width={56} height={56} alt="Dota 2 Logo" />
            }
            stats={[
              {
                label: t("mainRole"),
                value: "Mid/Offlane",
                icon: <PersonOutlineOutlined />,
              },
              {
                label: t("favoriteHero"),
                value: "Storm Spirit",
                icon: <FavoriteBorderOutlined />,
              },
              {
                label: t("rank"),
                value: "Immortal",
                icon: <TrendingUp />,
              },
              {
                label: t("totalPlayTime"),
                value: t("totalPlayTimeValue"),
                icon: <WatchLaterOutlined />,
              },
            ]}
            buttonText={t("checkMyProfile")}
            buttonHref="https://stratz.com/players/471547277"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Passions;

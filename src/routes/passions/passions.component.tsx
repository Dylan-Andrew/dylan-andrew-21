import { Box, Card, Grid, Typography } from "@mui/material";
import PassionCard from "../../components/passion-card/passion-card.component";
import f1Icon from "../../assets/f1.svg";
import dotaIcon from "../../assets/dota.svg";
import {
  CalendarMonthOutlined,
  EmojiEventsOutlined,
  FavoriteBorderOutlined,
  LocationOnOutlined,
  PersonOutlineOutlined,
  SportsMotorsportsOutlined,
  TrendingUp,
  WatchLaterOutlined,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Passions = () => {
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
          marginBottom: "32px",
          fontSize: {
            xs: "32px",
            md: "48px",
          },
          textAlign: "center",
        }}
      >
        {t("passionTitle")}
      </Typography>
      <Typography variant="h6" component="p" sx={{ marginBottom: "16px" }}>
        {t("passionTitleDescription")}
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
                label: "Dream Circuit",
                value: "Spa-Francorchamps",
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
      <Card
        variant="outlined"
        sx={{
          mt: 4,
          p: 3,
          maxWidth: "600px",
          textAlign: "center",
          backgroundColor: "background.default",
          borderRadius: 5,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {t("dylanAndrewQuote")}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          - Dylan Andrew
        </Typography>
      </Card>
    </Box>
  );
};

export default Passions;

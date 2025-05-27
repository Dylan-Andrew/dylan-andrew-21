import { Box, Typography } from "@mui/material";
import ControlledTabs from "../../components/controlled-tabs/controlled-tabs.component";
import { TabData } from "../../types/tab-data";
import { useTranslation } from "react-i18next";

const experiences: TabData[] = [
  {
    id: 1,
    name: "Finetic",
    title: "fineticTitle",
    period: "fineticPeriod",
    link: "https://www.finetic.eu",
    description: ["fineticDescription1", "fineticDescription2"],
  },
  {
    id: 2,
    name: "Tripalio",
    title: "tripalioTitle",
    period: "tripalioPeriod",
    link: "https://app.tripalio.fr/",
    description: ["tripalioDescription1"],
  },
  {
    id: 3,
    name: "Sahaza Group",
    title: "sahazaGroupTitle",
    period: "sahazaGroupPeriod",
    link: "https://www.linkedin.com/company/sahaza_group/",
    description: [
      "sahazaGroupDescription1",
      "sahazaGroupDescription2",
      "sahazaGroupDescription3",
    ],
  },
];

const Experiences = () => {
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
        {t("experiences")}
      </Typography>
      <ControlledTabs tabDatas={experiences} />
    </Box>
  );
};
export default Experiences;

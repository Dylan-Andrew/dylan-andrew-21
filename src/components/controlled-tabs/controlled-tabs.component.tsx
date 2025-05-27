import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import type { TabData } from "../../types/tab-data";
import ControlledTabPanel from "../controlled-tab-panel/controlled-tab-panel.component";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

const ControlledTabs = ({ tabDatas }: { tabDatas: TabData[] }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        width: "100%",
      }}
    >
      <Tabs
        orientation={isSmallScreen ? "horizontal" : "vertical"}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        sx={{
          borderRight: isSmallScreen ? "none" : "1px solid black",
          borderBottom: isSmallScreen ? "1px solid black" : "none",
        }}
      >
        {tabDatas.map((tabData, index) => (
          <Tab
            id={`tab-${index}`}
            key={index}
            label={tabData.name}
            aria-controls={`tabpanel-${index}`}
            sx={{
              color:
                value === index
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.primary,
              borderRight:
                !isSmallScreen && value === index
                  ? `4px solid ${theme.palette.primary.contrastText}`
                  : !isSmallScreen
                  ? "4px solid transparent"
                  : "none",
              borderBottom:
                isSmallScreen && value === index
                  ? `4px solid ${theme.palette.primary.contrastText}`
                  : isSmallScreen
                  ? "4px solid transparent"
                  : "none",
              justifyContent: isSmallScreen ? "center" : "flex-start",
              alignItems: isSmallScreen ? "center" : "flex-start",
              textAlign: isSmallScreen ? "center" : "left",
              "&.Mui-selected": {
                color: theme.palette.primary.contrastText,
              },
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          />
        ))}
      </Tabs>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {tabDatas.map((tabData, index) => (
          <Box
            key={tabData.id}
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
          >
            {value === index && <ControlledTabPanel tabData={tabData} />}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ControlledTabs;

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0a192f",
      contrastText: "#64ffda",
    },
    secondary: {
      main: "#8892b0",
    },
    background: {
      default: "#0a192f",
      paper: "#112240",
    },
    text: {
      primary: "#ccd6f6",
      secondary: "#8892b0",
    },
  },
  typography: {
    fontFamily: '"Playfair Display", serif',
  },
});

export default theme;

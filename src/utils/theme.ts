import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0b1120",
      contrastText: "#818cf8",
    },
    secondary: {
      main: "#94a3b8",
    },
    background: {
      default: "#0b1120",
      paper: "#111827",
    },
    text: {
      primary: "#e2e8f0",
      secondary: "#94a3b8",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "rgba(17, 24, 39, 0.6)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(148, 163, 184, 0.1)",
          transition: "all 0.2s ease",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#818cf8",
          "&:hover": {
            backgroundColor: "#6366f1",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderColor: "rgba(148, 163, 184, 0.2)",
        },
      },
    },
  },
});

export default theme;

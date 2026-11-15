import { createTheme } from "@mui/material/styles";

// Mirrors the CSS custom properties in src/index.css so MUI components
// (buttons, menus, drawer, focus) speak the same palette.
export const tokens = {
  paper: "#ffffff",
  mist: "#f2f3f1",
  rule: "#e3e4e2",
  ink: "#0b0e0d",
  graphite: "#5c5e61",
  red: "#c40e1a",
  cobalt: "#2346c9",
  green: "#1f7a4d",
  onInk: "#ffffff",
  onInkMuted: "#a7a9ab",
  onInkRule: "#2a2d2c",
  redOnInk: "#ff5a5f",
  cobaltOnInk: "#8fa6ff",
  greenOnInk: "#5fd39a",
} as const;

const font = '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: tokens.ink, contrastText: tokens.paper },
    secondary: { main: tokens.cobalt, contrastText: tokens.paper },
    error: { main: tokens.red },
    success: { main: tokens.green },
    background: { default: tokens.paper, paper: tokens.paper },
    text: { primary: tokens.ink, secondary: tokens.graphite },
    divider: tokens.rule,
  },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: font,
    button: { textTransform: "none", fontWeight: 600, letterSpacing: 0 },
  },
  components: {
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: "1.4rem",
          minHeight: 48,
          fontSize: "1rem",
          transition:
            "background-color 160ms cubic-bezier(0.16, 1, 0.3, 1), color 160ms cubic-bezier(0.16, 1, 0.3, 1), border-color 160ms cubic-bezier(0.16, 1, 0.3, 1)",
        },
        contained: {
          backgroundColor: tokens.ink,
          color: tokens.paper,
          "&:hover": { backgroundColor: tokens.red },
        },
        outlined: {
          borderColor: tokens.ink,
          color: tokens.ink,
          "&:hover": {
            borderColor: tokens.ink,
            backgroundColor: tokens.ink,
            color: tokens.paper,
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundColor: tokens.paper, width: "min(84vw, 22rem)" },
      },
    },
  },
});

export default theme;

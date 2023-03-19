import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff2638",
      contrastText: "#ffebee",
    },
    secondary: {
      main: "#83000c",
    },
    error: {
      main: "rgba(218,33,27,0.82)",
    },
    warning: {
      main: "#ff5100",
    },
    info: {
      main: "#002dff",
    },
    success: {
      main: "#00fb0f",
    },
    text: {
      primary: "#f9f9f9",
    },
    background: {
      default: "#202020",
      paper: "#292929",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 800,
      letterSpacing: "0.03em",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: "0.03em",
    },
    h3: {
      fontSize: "1.3rem",
      letterSpacing: "0.03em",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

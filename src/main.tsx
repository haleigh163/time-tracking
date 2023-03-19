import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./data/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <App />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

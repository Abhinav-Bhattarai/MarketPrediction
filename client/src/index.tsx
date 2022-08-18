import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A0D0D", // bacground color
      light: "rgb(26,31,32)" // sub dark shade
    },
    secondary: {
      main: "#13F3C9", // green shade
      dark: '#20F79E' // success color green
    },

    text: {
      primary: "#f3f3f3", // white
      secondary: "rgb(164, 177, 179)" // greyish
    },

    background: {
      default: "#0A0D0D", // dark shade
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();

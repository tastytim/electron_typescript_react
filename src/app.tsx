import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./react/App";
import { Provider } from "react-redux";
import store from "./react/store/store";
import { ThemeProvider } from "@mui/private-theming";
import { theme } from './styles/theme'
import { BrowserRouter as Router } from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
      <App />

      </Router>
    </ThemeProvider>
  </Provider>
);


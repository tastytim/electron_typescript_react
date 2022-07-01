import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./react/App";
import { Provider } from "react-redux";
import store from "./react/store/store";
// import * as serviceWorker from "./../src/serviceWorker";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



// serviceWorker.unregister();
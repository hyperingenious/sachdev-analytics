import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.css";
import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { MantineProvider } from "@mantine/core";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    <MantineProvider
      theme={{
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#6f42c1",
    800: "#007bff",
    700: "#ef8172",
    600: "#ff4c68",
  },
};

const fonts = {
  body: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
};

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);

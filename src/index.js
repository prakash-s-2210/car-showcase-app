import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import carReducer from "./state/index";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import 'react-tooltip/dist/react-tooltip.css'

const store = configureStore({
  reducer: {
    carListings: carReducer,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

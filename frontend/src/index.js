import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";
import { PersistGate } from "redux-persist/integration/react";
import  { store, persistor } from "./redux/storeSettings";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

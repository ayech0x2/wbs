import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import storeDev from "./store/store-dev";
import storeProd from "./store/store-prod";

import Layout from "./components/layout/Layout";

import "./stylesheet/main.scss";
import { BrowserRouter as Router } from "react-router-dom";

const Root = () => {
  return (
    <Provider
      store={
        process.env.NODE_ENV !== "production" && module.hot
          ? storeDev
          : storeProd
      }
    >
      <WithinRouter />
    </Provider>
  );
};

const WithinRouter = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

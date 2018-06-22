import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Index from "./js/";
import combineStore from "./js/reducers/combineStore";
import apiMiddleware from "./js/middlewares";
import HttpService from "./js/services/HttpService";

const middleware = [thunk];

let store = compose(applyMiddleware(...middleware, apiMiddleware))(createStore)(
  combineStore
);

HttpService.setHttpService("https://api.github.com/");

const rootElement = document.getElementById("root");
ReactDOM.render(<Index store={store} />, rootElement);

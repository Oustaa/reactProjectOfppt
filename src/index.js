import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import GlobalStyles from "./GlobalStyles";
import { getProducts } from "./features/Products/product-slice";

store.dispatch(getProducts());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <
    BrowserRouter >
    <
    Provider store = { store } >
    <
    GlobalStyles / >
    <
    App / >
    <
    /Provider>{" "} <
    /BrowserRouter>
);
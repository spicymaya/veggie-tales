import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import App from "./js/components/App.jsx";
//if I want RenderDOM to be conditional
// const wrapper = document.getElementById("veggie-tales");
// wrapper ? ReactDOM.render(<App />, wrapper) : false;

ReactDOM.render(<App />, document.getElementById("veggie-tales"));

import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";
import App from "./js/components/App.jsx";
//if I want RenderDOM to be conditional
// const wrapper = document.getElementById("veggie-tales");
// wrapper ? ReactDOM.render(<App />, wrapper) : false;

ReactDOM.render(<App />, document.getElementById("veggie-tales"));

import React from "react";
import ReactDOM from "react-dom";

import App from "./js/components/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

//if I want RenderDOM to be conditional
// const wrapper = document.getElementById("veggie-tales");
// wrapper ? ReactDOM.render(<App />, wrapper) : false;

ReactDOM.render(<App />, document.getElementById("veggie-tales"));

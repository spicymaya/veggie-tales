import React from "react";
import ReactDOM from "react-dom";

import App from './js/components/container/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const wrapper = document.getElementById("veggie-tales");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import "./scss/app.scss";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./js/components/App.tsx";
import DefaultErrorBoundry from "./js/components/DefaultErrorBoundry";
import { Provider } from 'react-redux'
import store from './store';
//if I want RenderDOM to be conditional
// const wrapper = document.getElementById("veggie-tales");
// wrapper ? ReactDOM.render(<App />, wrapper) : false;
ReactDOM.render(
  <Provider store={store}>
    <DefaultErrorBoundry>
      <App />
    </DefaultErrorBoundry>

  </Provider>,

  document.getElementById("veggie-tales")
);





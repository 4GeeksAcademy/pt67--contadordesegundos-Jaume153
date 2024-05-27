
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

let seconds = 0;

const renderApp = () => {
    ReactDOM.render(<Home seconds={seconds} />, document.getElementById("app"));
    seconds++;
};

setInterval(renderApp, 1000);

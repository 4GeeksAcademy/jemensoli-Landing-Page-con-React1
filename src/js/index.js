//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

//include your index.scss file into the bundle
import "../styles/index.css";
import "../styles/custom.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
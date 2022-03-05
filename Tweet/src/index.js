import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";


import { data } from "./data";
import { Tweet } from "./Tweet";

ReactDOM.render(<Tweet tweet={data} />, document.querySelector("#root"));

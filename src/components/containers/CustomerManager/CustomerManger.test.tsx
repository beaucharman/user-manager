import React from "react";
import ReactDOM from "react-dom";
import CustomerManager from "./CustomerManager";

it("<CustomerManager /> renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CustomerManager />, div);
  ReactDOM.unmountComponentAtNode(div);
});

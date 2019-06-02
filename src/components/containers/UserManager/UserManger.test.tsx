import React from "react";
import ReactDOM from "react-dom";
import UserManager from "./UserManager";

it("<UserManager /> renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserManager />, div);
  ReactDOM.unmountComponentAtNode(div);
});

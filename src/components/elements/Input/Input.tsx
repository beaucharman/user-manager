import React, { FunctionComponent, Fragment } from "react";
import { InputType as Props } from "./Input.types";

const Input: FunctionComponent<Props> = ({
  label,
  type = "text",
  handleOnChange,
  name,
  value
}) => (
  <Fragment>
    <label htmlFor="firstName">{label}</label>
    <input
      type={type}
      onChange={handleOnChange}
      name={name}
      id={name}
      value={value}
    />
  </Fragment>
);

export default Input;

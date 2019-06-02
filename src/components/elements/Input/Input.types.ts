import { SyntheticEvent } from "react";

export interface InputType {
  label: string;
  type: string;
  handleOnChange: (event: SyntheticEvent) => void;
  name: string;
  value: string;
}

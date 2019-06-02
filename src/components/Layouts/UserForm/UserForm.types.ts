import { SyntheticEvent } from "react";
import { UserType } from "../../containers/UserManager/UserManager.types";

export interface SchemaType {
  label: string;
  name: string;
  type: string;
}

export interface UserFormType {
  isEditingUser: boolean;
  saveUser: (event: SyntheticEvent) => void;
  createUser: (event: SyntheticEvent) => void;
  handleOnChange: (event: SyntheticEvent) => void;
  editUser: UserType;
}

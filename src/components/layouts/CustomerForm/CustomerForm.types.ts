import { SyntheticEvent } from "react";
import { CustomerType } from "../../containers/CustomerManager/CustomerManager.types";

export interface SchemaType {
  label: string;
  name: string;
  type: string;
}

export interface CustomerFormType {
  isEditingCustomer: boolean;
  saveCustomer: (event: SyntheticEvent) => void;
  createCustomer: (event: SyntheticEvent) => void;
  handleOnChange: (event: SyntheticEvent) => void;
  editCustomer: CustomerType;
}

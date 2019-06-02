import { CustomerType } from "../../containers/CustomerManager/CustomerManager.types";

export interface CustomerListType {
  users?: CustomerType[];
  handleDeleteCustomer: (arg: string) => void;
  handleEditCustomer: (arg: string) => void;
}

import { CustomerType } from "../../containers/CustomerManager/CustomerManager.types";

export interface CustomerListType {
  customers?: CustomerType[];
  handleDeleteCustomer: (arg: string) => void;
  handleEditCustomer: (arg: string) => void;
  noResultsMessage: string;
}

export interface Props {}

export interface CustomerType {
  dateOfBirth: string;
  firstName: string;
  id: string;
  lastName: string;
}

export interface State {
  editCustomer: CustomerType;
  filteredCustomers: CustomerType[];
  isEditingCustomer: boolean;
  query: string;
  customers: CustomerType[];
}

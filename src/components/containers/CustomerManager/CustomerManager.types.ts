export interface Props {}

export interface CustomerType {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  id: string;
}

export interface State {
  isEditingCustomer: boolean;
  editCustomer: CustomerType;
  users: CustomerType[];
}

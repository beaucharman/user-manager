export interface Props {}

export interface UserType {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  id: string;
}

export interface State {
  isEditingUser: boolean;
  editUser: UserType;
  users: UserType[];
}

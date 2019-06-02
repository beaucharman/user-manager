import { UserType } from "../../containers/UserManager/UserManager.types";

export interface UserListType {
  users?: UserType[];
  handleDeleteUser: (arg: string) => void;
  handleEditUser: (arg: string) => void;
}

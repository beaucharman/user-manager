import React, { FunctionComponent, Fragment } from "react";
import { UserListType as Props } from "./UserList.types";

const UserList: FunctionComponent<Props> = ({
  users = [],
  handleDeleteUser,
  handleEditUser
}) => (
  <Fragment>
    <h2>{users.length ? "Users" : "There are currently no users"}</h2>
    <ul>
      {users.map(({ firstName, lastName, dateOfBirth, id }) => (
        <li key={id}>
          {firstName} {lastName} : {dateOfBirth}
          <button onClick={() => handleDeleteUser(id)}>Delete</button>
          <button onClick={() => handleEditUser(id)}>Edit</button>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default UserList;

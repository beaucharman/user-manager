import React, { FunctionComponent, Fragment } from "react";
import { CustomerListType as Props } from "./CustomerList.types";

const CustomerList: FunctionComponent<Props> = ({
  users = [],
  handleDeleteCustomer,
  handleEditCustomer
}) => (
  <Fragment>
    <h2>{users.length ? "Customers" : "There are currently no users"}</h2>
    <ul>
      {users.map(({ firstName, lastName, dateOfBirth, id }) => (
        <li key={id}>
          {firstName} {lastName} : {dateOfBirth}
          <button onClick={() => handleDeleteCustomer(id)}>Delete</button>
          <button onClick={() => handleEditCustomer(id)}>Edit</button>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default CustomerList;

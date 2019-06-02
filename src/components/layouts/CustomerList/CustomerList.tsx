import React, { FunctionComponent, Fragment } from "react";
import { CustomerListType as Props } from "./CustomerList.types";

const CustomerList: FunctionComponent<Props> = ({
  customers = [],
  handleDeleteCustomer,
  handleEditCustomer,
  noResultsMessage
}) => (
  <Fragment>
    <h2>{customers.length ? "Customers" : noResultsMessage}</h2>
    <ul>
      {customers.map(({ firstName, lastName, dateOfBirth, id }) => (
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

import React, { Component, SyntheticEvent } from "react";
import generateKey from "../../../utils/generateKey/generateKey";
import CustomerForm from "../../layouts/CustomerForm/CustomerForm";
import CustomerList from "../../layouts/CustomerList/CustomerList";
import { Props, State, CustomerType } from "./CustomerManager.types";
import "./CustomerManager.css";

class CustomerManager extends Component<Props, State> {
  initialState = {
    isEditingCustomer: false,
    editCustomer: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      id: ""
    },
    users: []
  };

  state = { ...this.initialState };

  render() {
    const { editCustomer, isEditingCustomer, users } = this.state;
    return (
      <div className="CustomerManager">
        <div className="CustomerManager-Content">
          <header className="CustomerManager-Header">
            <h1>Customer Manager</h1>
          </header>

          {!isEditingCustomer && (
            <CustomerList
              users={users}
              handleDeleteCustomer={this.handleDeleteCustomer}
              handleEditCustomer={this.handleEditCustomer}
            />
          )}

          <CustomerForm
            isEditingCustomer={isEditingCustomer}
            saveCustomer={this.saveCustomer}
            createCustomer={this.createCustomer}
            handleOnChange={this.handleOnChange}
            editCustomer={editCustomer}
          />
        </div>
      </div>
    );
  }

  handleEditCustomer = (id: string) => {
    this.setState((preState: State) => ({
      editCustomer: preState.users.filter(
        (user: CustomerType) => user.id === id
      )[0],
      isEditingCustomer: true
    }));
  };

  handleDeleteCustomer = (id: string) => {
    this.setState((prevState: State) => ({
      users: prevState.users.filter((user: CustomerType) => user.id !== id)
    }));
  };

  handleOnChange = (event: SyntheticEvent) => {
    event.persist();

    this.setState(prevState => ({
      // @ts-ignore
      editCustomer: Object.assign({}, prevState.editCustomer, {
        // @ts-ignore
        [event.target.name]: event.target.value
      })
    }));
  };

  createCustomer = (event: SyntheticEvent) => {
    event.preventDefault();

    const editCustomers = this.state.users.concat(
      // @ts-ignore
      Object.assign({}, this.state.editCustomer, {
        id: generateKey()
      })
    );

    this.setState(() => ({
      users: editCustomers,
      editCustomer: this.initialState.editCustomer
    }));
  };

  saveCustomer = (event: SyntheticEvent) => {
    event.preventDefault();

    const { editCustomer, users } = this.state;

    const userIndex = users.findIndex(
      (user: CustomerType) => user.id === editCustomer.id
    );

    const updatedCustomers = [
      ...users.slice(0, userIndex),
      this.state.editCustomer,
      ...users.slice(userIndex + 1)
    ];

    this.setState(() => ({
      isEditingCustomer: false,
      users: updatedCustomers,
      editCustomer: this.initialState.editCustomer
    }));
  };
}

export default CustomerManager;

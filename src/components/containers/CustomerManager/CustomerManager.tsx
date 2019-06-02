import React, { Component, SyntheticEvent } from "react";
import generateKey from "../../../utils/generateKey/generateKey";
import CustomerForm from "../../layouts/CustomerForm/CustomerForm";
import CustomerList from "../../layouts/CustomerList/CustomerList";
import Input from "../../elements/Input/Input";
import { Props, State, CustomerType } from "./CustomerManager.types";
import "./CustomerManager.css";

class CustomerManager extends Component<Props, State> {
  initialState = {
    isEditingCustomer: false,
    editCustomer: {
      dateOfBirth: "",
      firstName: "",
      id: "",
      lastName: ""
    },
    customers: [],
    filteredCustomers: [],
    query: ""
  };

  state = { ...this.initialState };

  render() {
    const {
      editCustomer,
      filteredCustomers,
      isEditingCustomer,
      customers,
      query
    } = this.state;

    return (
      <div className="CustomerManager">
        <div className="CustomerManager-Content">
          <header className="CustomerManager-Header">
            <h1>Customer Manager</h1>
          </header>

          {!isEditingCustomer && !!customers.length && (
            <Input
              label="Search for user"
              name="search"
              type="text"
              handleOnChange={this.handleSearch}
              value={query}
            />
          )}

          {!isEditingCustomer && (
            <CustomerList
              customers={!query ? customers : filteredCustomers}
              noResultsMessage={
                !query
                  ? "There are currently no customers"
                  : "No customers match your search"
              }
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
      editCustomer: preState.customers.filter(
        (user: CustomerType) => user.id === id
      )[0],
      isEditingCustomer: true
    }));
  };

  handleDeleteCustomer = (id: string) => {
    this.setState((prevState: State) => ({
      customers: prevState.customers.filter(
        (user: CustomerType) => user.id !== id
      )
    }));
  };

  handleSearch = (event: SyntheticEvent) => {
    event.persist();

    // @ts-ignore
    const { value } = event.target;

    this.setState(() => ({
      filteredCustomers: this.state.customers.filter((user: CustomerType) => {
        return (
          `${user.firstName} ${user.lastName}`
            .toUpperCase()
            .indexOf(value.toUpperCase()) !== -1
        );
      }),

      query: value
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

    const editCustomers = this.state.customers.concat(
      // @ts-ignore
      Object.assign({}, this.state.editCustomer, {
        id: generateKey()
      })
    );

    this.setState(() => ({
      customers: editCustomers,
      editCustomer: this.initialState.editCustomer
    }));
  };

  saveCustomer = (event: SyntheticEvent) => {
    event.preventDefault();

    const { editCustomer, customers } = this.state;

    const userIndex = customers.findIndex(
      (user: CustomerType) => user.id === editCustomer.id
    );

    const updatedCustomers = [
      ...customers.slice(0, userIndex),
      this.state.editCustomer,
      ...customers.slice(userIndex + 1)
    ];

    this.setState(() => ({
      isEditingCustomer: false,
      customers: updatedCustomers,
      editCustomer: this.initialState.editCustomer
    }));
  };
}

export default CustomerManager;

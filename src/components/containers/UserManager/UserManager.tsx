import React, { Component, SyntheticEvent } from "react";
import generateKey from "../../../utils/generateKey/generateKey";
import UserForm from "../../Layouts/UserForm/UserForm";
import UserList from "../../Layouts/UserList/UserList";
import { Props, State, UserType } from "./UserManager.types";
import "./UserManager.css";

class UserManager extends Component<Props, State> {
  initialState = {
    isEditingUser: false,
    editUser: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      id: ""
    },
    users: []
  };

  state = { ...this.initialState };

  render() {
    const { editUser, isEditingUser, users } = this.state;
    return (
      <div className="UserManager">
        <div className="UserManager-Content">
          <header className="UserManager-Header">
            <h1>User Manager</h1>
          </header>

          {!isEditingUser && (
            <UserList
              users={users}
              handleDeleteUser={this.handleDeleteUser}
              handleEditUser={this.handleEditUser}
            />
          )}

          <UserForm
            isEditingUser={isEditingUser}
            saveUser={this.saveUser}
            createUser={this.createUser}
            handleOnChange={this.handleOnChange}
            editUser={editUser}
          />
        </div>
      </div>
    );
  }

  handleEditUser = (id: string) => {
    this.setState((preState: State) => ({
      editUser: preState.users.filter((user: UserType) => user.id === id)[0],
      isEditingUser: true
    }));
  };

  handleDeleteUser = (id: string) => {
    this.setState((prevState: State) => ({
      users: prevState.users.filter((user: UserType) => user.id !== id)
    }));
  };

  handleOnChange = (event: SyntheticEvent) => {
    event.persist();

    this.setState(prevState => ({
      // @ts-ignore
      editUser: Object.assign({}, prevState.editUser, {
        // @ts-ignore
        [event.target.name]: event.target.value
      })
    }));
  };

  createUser = (event: SyntheticEvent) => {
    event.preventDefault();

    const editUsers = this.state.users.concat(
      // @ts-ignore
      Object.assign({}, this.state.editUser, {
        id: generateKey()
      })
    );

    this.setState(() => ({
      users: editUsers,
      editUser: this.initialState.editUser
    }));
  };

  saveUser = (event: SyntheticEvent) => {
    event.preventDefault();

    const { editUser, users } = this.state;

    const userIndex = users.findIndex(
      (user: UserType) => user.id === editUser.id
    );

    const updatedUsers = [
      ...users.slice(0, userIndex),
      this.state.editUser,
      ...users.slice(userIndex + 1)
    ];

    this.setState(() => ({
      isEditingUser: false,
      users: updatedUsers,
      editUser: this.initialState.editUser
    }));
  };
}

export default UserManager;

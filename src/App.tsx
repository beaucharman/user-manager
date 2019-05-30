import React, { Component, SyntheticEvent, Fragment } from "react";
import "./App.css";

const generateKey = (a: string, b: string) =>
  `${a}_${b}_${new Date().getTime()}`;

class App extends Component {
  state = {
    isEditingUser: false,
    editingUser: {},
    newUser: {
      firstName: "",
      lastName: "",
      dateOfBirth: ""
    },
    users: [
      {
        firstName: "Beau",
        lastName: "Charman",
        dateOfBirth: "14/12/1986",
        id: generateKey("beau", "charman")
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {!this.state.isEditingUser && (
            <Fragment>
              <div>Users</div>
              <ul>
                {this.state.users.map(
                  ({ firstName, lastName, dateOfBirth, id }) => (
                    <li key={id}>
                      {firstName} {lastName} : {dateOfBirth}{" "}
                      <button onClick={() => this.handleDeleteUser(id)}>
                        Delete
                      </button>
                      <button onClick={() => this.handleEditUser(id)}>
                        Edit
                      </button>
                    </li>
                  )
                )}
              </ul>
            </Fragment>
          )}

          <div>Create user</div>
          {this.renderForm()}
        </header>
      </div>
    );
  }

  renderForm = () => (
    <form onSubmit={this.createUser}>
      <input
        type="text"
        onChange={this.handleOnChange}
        name="firstName"
        value={this.state.newUser.firstName}
      />
      <input
        type="text"
        onChange={this.handleOnChange}
        name="lastName"
        value={this.state.newUser.lastName}
      />
      <input
        type="text"
        onChange={this.handleOnChange}
        name="dateOfBirth"
        value={this.state.newUser.dateOfBirth}
      />
      <button type="submit">Create user</button>
    </form>
  );

  handleEditUser = (id: string) => {
    // this.
  };

  handleDeleteUser = (id: string) => {};

  handleOnChange = (event: SyntheticEvent) => {
    event.persist();

    this.setState(prevState => ({
      // @ts-ignore
      newUser: Object.assign({}, prevState.newUser, {
        // @ts-ignore
        [event.target.name]: event.target.value
      })
    }));
  };

  createUser = (event: SyntheticEvent) => {
    event.preventDefault();

    const newUsers = this.state.users.concat(
      Object.assign({}, this.state.newUser, {
        id: generateKey(
          this.state.newUser.firstName,
          this.state.newUser.lastName
        )
      })
    );

    this.setState(() => ({
      users: newUsers
    }));
  };
}

export default App;

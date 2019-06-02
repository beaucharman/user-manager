import React, { FunctionComponent } from "react";
import Input from "../../elements/Input/Input";
import schema from "./UserForm.schema";
import { UserFormType as Props, SchemaType } from "./UserForm.types";

const UserForm: FunctionComponent<Props> = ({
  isEditingUser,
  saveUser,
  createUser,
  handleOnChange,
  editUser
}) => {
  return (
    <form onSubmit={isEditingUser ? saveUser : createUser}>
      <h3>{isEditingUser ? "Editing existing user" : "Create new user"}</h3>

      {schema.map((field: SchemaType) => {
        return (
          <Input
            key={field.name}
            label={field.label}
            type={field.type}
            handleOnChange={handleOnChange}
            name={field.name}
            // @ts-ignore
            value={editUser[field.name]}
          />
        );
      })}

      <button type="submit">
        {isEditingUser ? "Save user" : "Create user"}
      </button>
    </form>
  );
};

export default UserForm;

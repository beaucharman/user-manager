import React, { FunctionComponent } from "react";
import Input from "../../elements/Input/Input";
import schema from "./CustomerForm.schema";
import { CustomerFormType as Props, SchemaType } from "./CustomerForm.types";

const CustomerForm: FunctionComponent<Props> = ({
  isEditingCustomer,
  saveCustomer,
  createCustomer,
  handleOnChange,
  editCustomer
}) => {
  return (
    <form onSubmit={isEditingCustomer ? saveCustomer : createCustomer}>
      <h3>{isEditingCustomer ? "Editing existing user" : "Create new user"}</h3>

      {schema.map((field: SchemaType) => {
        return (
          <Input
            key={field.name}
            label={field.label}
            type={field.type}
            handleOnChange={handleOnChange}
            name={field.name}
            // @ts-ignore
            value={editCustomer[field.name]}
          />
        );
      })}

      <button type="submit">
        {isEditingCustomer ? "Save user" : "Create user"}
      </button>
    </form>
  );
};

export default CustomerForm;

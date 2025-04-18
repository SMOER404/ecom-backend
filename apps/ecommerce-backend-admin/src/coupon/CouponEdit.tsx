import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const CouponEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <SelectInput
          source="discountType"
          label="discountType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="expirationDate" source="expirationDate" />
        <BooleanInput label="isActive" source="isActive" />
        <NumberInput label="minOrderAmount" source="minOrderAmount" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};

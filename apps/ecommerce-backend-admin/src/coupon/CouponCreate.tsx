import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const CouponCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};

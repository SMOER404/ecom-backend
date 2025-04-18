import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FileUploadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="filename" source="filename" />
        <NumberInput step={1} label="size" source="size" />
        <TextInput label="type" source="typeField" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};

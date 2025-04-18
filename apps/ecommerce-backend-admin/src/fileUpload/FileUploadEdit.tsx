import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FileUploadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="filename" source="filename" />
        <NumberInput step={1} label="size" source="size" />
        <TextInput label="type" source="typeField" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};

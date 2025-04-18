import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="body" multiline source="body" />
        <BooleanInput label="isRead" source="isRead" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};

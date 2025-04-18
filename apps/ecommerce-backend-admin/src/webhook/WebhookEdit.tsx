import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const WebhookEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="event" source="event" />
        <TextInput label="secret" source="secret" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};

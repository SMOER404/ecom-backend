import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WebhookCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="event" source="event" />
        <TextInput label="secret" source="secret" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};

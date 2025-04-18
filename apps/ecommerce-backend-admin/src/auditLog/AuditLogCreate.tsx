import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AuditLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <TextInput label="entity" source="entity" />
        <TextInput label="entityId" source="entityId" />
      </SimpleForm>
    </Create>
  );
};

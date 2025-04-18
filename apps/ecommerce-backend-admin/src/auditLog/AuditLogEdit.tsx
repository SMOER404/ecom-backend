import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AuditLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <TextInput label="entity" source="entity" />
        <TextInput label="entityId" source="entityId" />
      </SimpleForm>
    </Edit>
  );
};

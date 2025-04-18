import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { BRAND_TITLE_FIELD } from "./BrandTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const BrandShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="logoUrl" source="logoUrl" />
        <TextField label="name" source="name" />
        <TextField label="slug" source="slug" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Product"
          target="brandId"
          label="Products"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Brand" source="brand.id" reference="Brand">
              <TextField source={BRAND_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="colors" source="colors" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="images" source="images" />
            <BooleanField label="inStock" source="inStock" />
            <TextField label="price" source="price" />
            <TextField label="sizes" source="sizes" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

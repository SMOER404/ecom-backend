import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
} from "react-admin";

import { BrandTitle } from "../brand/BrandTitle";
import { CategoryTitle } from "../category/CategoryTitle";
import { ReviewTitle } from "../review/ReviewTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="brand.id" reference="Brand" label="Brand">
          <SelectInput optionText={BrandTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <SelectArrayInput
          label="colors"
          source="colors"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="description" multiline source="description" />
        <SelectArrayInput
          label="images"
          source="images"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="inStock" source="inStock" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput source="reviews" reference="Review">
          <SelectArrayInput
            optionText={ReviewTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectArrayInput
          label="sizes"
          source="sizes"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};

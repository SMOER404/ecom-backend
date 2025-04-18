import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CouponList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Coupons"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="discountType" source="discountType" />
        <TextField label="expirationDate" source="expirationDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="minOrderAmount" source="minOrderAmount" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />{" "}
      </Datagrid>
    </List>
  );
};

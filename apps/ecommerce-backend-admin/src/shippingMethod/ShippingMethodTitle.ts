import { ShippingMethod as TShippingMethod } from "../api/shippingMethod/ShippingMethod";

export const SHIPPINGMETHOD_TITLE_FIELD = "name";

export const ShippingMethodTitle = (record: TShippingMethod): string => {
  return record.name?.toString() || String(record.id);
};

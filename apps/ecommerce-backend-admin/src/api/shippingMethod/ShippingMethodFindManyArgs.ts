import { ShippingMethodWhereInput } from "./ShippingMethodWhereInput";
import { ShippingMethodOrderByInput } from "./ShippingMethodOrderByInput";

export type ShippingMethodFindManyArgs = {
  where?: ShippingMethodWhereInput;
  orderBy?: Array<ShippingMethodOrderByInput>;
  skip?: number;
  take?: number;
};

import { SortOrder } from "../../util/SortOrder";

export type ShippingMethodOrderByInput = {
  createdAt?: SortOrder;
  estimatedDeliveryDays?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};

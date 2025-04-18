import { SortOrder } from "../../util/SortOrder";

export type CouponOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  discountType?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  minOrderAmount?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};

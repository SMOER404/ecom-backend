import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  brandId?: SortOrder;
  categoryId?: SortOrder;
  colors?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  inStock?: SortOrder;
  price?: SortOrder;
  sizes?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  name?: SortOrder;
  parentCategoryId?: SortOrder;
  slug?: SortOrder;
  updatedAt?: SortOrder;
};

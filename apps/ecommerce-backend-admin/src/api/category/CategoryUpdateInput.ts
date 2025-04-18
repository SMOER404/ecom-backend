import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  imageUrl?: string | null;
  name?: string | null;
  parentCategoryId?: string | null;
  products?: ProductUpdateManyWithoutCategoriesInput;
  slug?: string | null;
};

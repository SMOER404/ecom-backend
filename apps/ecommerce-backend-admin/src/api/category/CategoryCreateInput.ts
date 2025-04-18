import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  imageUrl?: string | null;
  name?: string | null;
  parentCategoryId?: string | null;
  products?: ProductCreateNestedManyWithoutCategoriesInput;
  slug?: string | null;
};

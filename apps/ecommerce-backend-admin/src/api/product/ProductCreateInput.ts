import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  brand?: BrandWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  colors?: Array<"Option1">;
  description?: string | null;
  images?: Array<"Option1">;
  inStock?: boolean | null;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  sizes?: Array<"Option1">;
  title?: string | null;
};

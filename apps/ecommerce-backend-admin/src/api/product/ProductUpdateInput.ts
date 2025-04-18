import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  brand?: BrandWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  colors?: Array<"Option1">;
  description?: string | null;
  images?: Array<"Option1">;
  inStock?: boolean | null;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  sizes?: Array<"Option1">;
  title?: string | null;
};

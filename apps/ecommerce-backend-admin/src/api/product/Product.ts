import { Brand } from "../brand/Brand";
import { Category } from "../category/Category";
import { Review } from "../review/Review";

export type Product = {
  brand?: Brand | null;
  category?: Category | null;
  colors?: Array<"Option1">;
  createdAt: Date;
  description: string | null;
  id: string;
  images?: Array<"Option1">;
  inStock: boolean | null;
  price: number | null;
  reviews?: Array<Review>;
  sizes?: Array<"Option1">;
  title: string | null;
  updatedAt: Date;
};

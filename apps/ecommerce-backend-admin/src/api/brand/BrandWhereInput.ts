import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type BrandWhereInput = {
  id?: StringFilter;
  logoUrl?: StringNullableFilter;
  name?: StringNullableFilter;
  products?: ProductListRelationFilter;
  slug?: StringNullableFilter;
};

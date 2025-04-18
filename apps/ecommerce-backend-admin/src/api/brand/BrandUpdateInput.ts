import { ProductUpdateManyWithoutBrandsInput } from "./ProductUpdateManyWithoutBrandsInput";

export type BrandUpdateInput = {
  logoUrl?: string | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutBrandsInput;
  slug?: string | null;
};

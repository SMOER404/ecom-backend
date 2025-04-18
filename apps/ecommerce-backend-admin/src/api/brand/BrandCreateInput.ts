import { ProductCreateNestedManyWithoutBrandsInput } from "./ProductCreateNestedManyWithoutBrandsInput";

export type BrandCreateInput = {
  logoUrl?: string | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutBrandsInput;
  slug?: string | null;
};

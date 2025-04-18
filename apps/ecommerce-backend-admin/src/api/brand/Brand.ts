import { Product } from "../product/Product";

export type Brand = {
  createdAt: Date;
  id: string;
  logoUrl: string | null;
  name: string | null;
  products?: Array<Product>;
  slug: string | null;
  updatedAt: Date;
};

import { Cart } from "../cart/Cart";
import { Review } from "../review/Review";
import { JsonValue } from "type-fest";
import { Wishlist } from "../wishlist/Wishlist";

export type User = {
  cart?: Cart | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  googleId: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  reviews?: Array<Review>;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  wishlist?: Wishlist | null;
};

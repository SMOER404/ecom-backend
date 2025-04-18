import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type UserCreateInput = {
  cart?: CartWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  googleId?: string | null;
  lastName?: string | null;
  name?: string | null;
  password: string;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  role?: "Option1" | null;
  roles: InputJsonValue;
  username: string;
  wishlist?: WishlistWhereUniqueInput | null;
};

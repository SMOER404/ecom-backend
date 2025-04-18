import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type UserUpdateInput = {
  cart?: CartWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  googleId?: string | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  username?: string;
  wishlist?: WishlistWhereUniqueInput | null;
};

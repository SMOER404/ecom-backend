import { CartWhereUniqueInput } from "../cart/CartWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type UserWhereInput = {
  cart?: CartWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  googleId?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  reviews?: ReviewListRelationFilter;
  role?: "Option1";
  username?: StringFilter;
  wishlist?: WishlistWhereUniqueInput;
};

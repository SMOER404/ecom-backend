import { UserCreateNestedManyWithoutWishlistsInput } from "./UserCreateNestedManyWithoutWishlistsInput";

export type WishlistCreateInput = {
  users?: UserCreateNestedManyWithoutWishlistsInput;
};

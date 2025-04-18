import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type WishlistWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
};

import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CartWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
};

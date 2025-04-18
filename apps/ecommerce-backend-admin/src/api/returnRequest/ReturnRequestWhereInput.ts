import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReturnRequestWhereInput = {
  id?: StringFilter;
  reason?: StringNullableFilter;
  status?: "Option1";
};

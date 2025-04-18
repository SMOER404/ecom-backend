import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type NotificationWhereInput = {
  body?: StringNullableFilter;
  id?: StringFilter;
  isRead?: BooleanNullableFilter;
  title?: StringNullableFilter;
};

import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type WebhookWhereInput = {
  event?: StringNullableFilter;
  id?: StringFilter;
  secret?: StringNullableFilter;
  url?: StringNullableFilter;
};

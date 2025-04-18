import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SupportTicketWhereInput = {
  id?: StringFilter;
  messages?: StringNullableFilter;
  status?: "Option1";
  topic?: StringNullableFilter;
};

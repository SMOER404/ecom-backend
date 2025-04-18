import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuditLogWhereInput = {
  action?: StringNullableFilter;
  entity?: StringNullableFilter;
  entityId?: StringNullableFilter;
  id?: StringFilter;
};

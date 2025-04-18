import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FileUploadWhereInput = {
  filename?: StringNullableFilter;
  id?: StringFilter;
  size?: IntNullableFilter;
  typeField?: StringNullableFilter;
  url?: StringNullableFilter;
};

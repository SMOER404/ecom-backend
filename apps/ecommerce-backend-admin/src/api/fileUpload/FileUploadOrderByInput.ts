import { SortOrder } from "../../util/SortOrder";

export type FileUploadOrderByInput = {
  createdAt?: SortOrder;
  filename?: SortOrder;
  id?: SortOrder;
  size?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isRead?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

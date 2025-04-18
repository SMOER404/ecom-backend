import { SortOrder } from "../../util/SortOrder";

export type WebhookOrderByInput = {
  createdAt?: SortOrder;
  event?: SortOrder;
  id?: SortOrder;
  secret?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};

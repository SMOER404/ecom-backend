import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  method?: SortOrder;
  status?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type AuditLogOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  entity?: SortOrder;
  entityId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

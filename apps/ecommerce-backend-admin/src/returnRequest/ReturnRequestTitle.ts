import { ReturnRequest as TReturnRequest } from "../api/returnRequest/ReturnRequest";

export const RETURNREQUEST_TITLE_FIELD = "reason";

export const ReturnRequestTitle = (record: TReturnRequest): string => {
  return record.reason?.toString() || String(record.id);
};

import { SupportTicket as TSupportTicket } from "../api/supportTicket/SupportTicket";

export const SUPPORTTICKET_TITLE_FIELD = "topic";

export const SupportTicketTitle = (record: TSupportTicket): string => {
  return record.topic?.toString() || String(record.id);
};

export type SupportTicket = {
  createdAt: Date;
  id: string;
  messages: string | null;
  status?: "Option1" | null;
  topic: string | null;
  updatedAt: Date;
};

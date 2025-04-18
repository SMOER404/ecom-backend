export type Webhook = {
  createdAt: Date;
  event: string | null;
  id: string;
  secret: string | null;
  updatedAt: Date;
  url: string | null;
};

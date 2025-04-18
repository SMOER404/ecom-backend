import { Webhook as TWebhook } from "../api/webhook/Webhook";

export const WEBHOOK_TITLE_FIELD = "event";

export const WebhookTitle = (record: TWebhook): string => {
  return record.event?.toString() || String(record.id);
};

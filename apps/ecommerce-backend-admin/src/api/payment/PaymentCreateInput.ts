export type PaymentCreateInput = {
  amount?: number | null;
  method?: string | null;
  status?: "Option1" | null;
  transactionId?: string | null;
};

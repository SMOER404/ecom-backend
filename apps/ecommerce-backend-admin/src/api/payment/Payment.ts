export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  method: string | null;
  status?: "Option1" | null;
  transactionId: string | null;
  updatedAt: Date;
};

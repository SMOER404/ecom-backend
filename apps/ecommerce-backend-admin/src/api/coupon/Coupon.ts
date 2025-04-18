export type Coupon = {
  code: string | null;
  createdAt: Date;
  discountType?: "Option1" | null;
  expirationDate: Date | null;
  id: string;
  isActive: boolean | null;
  minOrderAmount: number | null;
  updatedAt: Date;
  value: number | null;
};

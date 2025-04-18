export type CouponCreateInput = {
  code?: string | null;
  discountType?: "Option1" | null;
  expirationDate?: Date | null;
  isActive?: boolean | null;
  minOrderAmount?: number | null;
  value?: number | null;
};

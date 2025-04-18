export type ShippingMethod = {
  createdAt: Date;
  estimatedDeliveryDays: number | null;
  id: string;
  isActive: boolean | null;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};

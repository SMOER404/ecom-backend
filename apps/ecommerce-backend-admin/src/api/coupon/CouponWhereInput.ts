import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CouponWhereInput = {
  code?: StringNullableFilter;
  discountType?: "Option1";
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  minOrderAmount?: FloatNullableFilter;
  value?: FloatNullableFilter;
};

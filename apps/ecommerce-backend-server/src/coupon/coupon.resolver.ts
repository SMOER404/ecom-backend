import * as graphql from "@nestjs/graphql";
import { CouponResolverBase } from "./base/coupon.resolver.base";
import { Coupon } from "./base/Coupon";
import { CouponService } from "./coupon.service";

@graphql.Resolver(() => Coupon)
export class CouponResolver extends CouponResolverBase {
  constructor(protected readonly service: CouponService) {
    super(service);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CouponService } from "./coupon.service";
import { CouponControllerBase } from "./base/coupon.controller.base";

@swagger.ApiTags("coupons")
@common.Controller("coupons")
export class CouponController extends CouponControllerBase {
  constructor(protected readonly service: CouponService) {
    super(service);
  }
}

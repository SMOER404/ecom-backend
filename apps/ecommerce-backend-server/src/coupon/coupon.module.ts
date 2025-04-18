import { Module } from "@nestjs/common";
import { CouponModuleBase } from "./base/coupon.module.base";
import { CouponService } from "./coupon.service";
import { CouponController } from "./coupon.controller";

@Module({
  imports: [CouponModuleBase],
  controllers: [CouponController],
  providers: [CouponService],
  exports: [CouponService],
})
export class CouponModule {}

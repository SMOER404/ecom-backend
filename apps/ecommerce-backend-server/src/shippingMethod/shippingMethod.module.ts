import { Module } from "@nestjs/common";
import { ShippingMethodModuleBase } from "./base/shippingMethod.module.base";
import { ShippingMethodService } from "./shippingMethod.service";
import { ShippingMethodController } from "./shippingMethod.controller";

@Module({
  imports: [ShippingMethodModuleBase],
  controllers: [ShippingMethodController],
  providers: [ShippingMethodService],
  exports: [ShippingMethodService],
})
export class ShippingMethodModule {}

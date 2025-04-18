import { Module } from "@nestjs/common";
import { ShippingMethodModuleBase } from "./base/shippingMethod.module.base";
import { ShippingMethodService } from "./shippingMethod.service";
import { ShippingMethodController } from "./shippingMethod.controller";
import { ShippingMethodResolver } from "./shippingMethod.resolver";

@Module({
  imports: [ShippingMethodModuleBase],
  controllers: [ShippingMethodController],
  providers: [ShippingMethodService, ShippingMethodResolver],
  exports: [ShippingMethodService],
})
export class ShippingMethodModule {}

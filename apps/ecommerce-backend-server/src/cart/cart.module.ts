import { Module } from "@nestjs/common";
import { CartModuleBase } from "./base/cart.module.base";
import { CartService } from "./cart.service";
import { CartController } from "./cart.controller";

@Module({
  imports: [CartModuleBase],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}

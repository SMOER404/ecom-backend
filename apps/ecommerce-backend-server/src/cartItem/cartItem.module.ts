import { Module } from "@nestjs/common";
import { CartItemModuleBase } from "./base/cartItem.module.base";
import { CartItemService } from "./cartItem.service";
import { CartItemController } from "./cartItem.controller";

@Module({
  imports: [CartItemModuleBase],
  controllers: [CartItemController],
  providers: [CartItemService],
  exports: [CartItemService],
})
export class CartItemModule {}

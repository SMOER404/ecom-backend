import { Module } from "@nestjs/common";
import { WishlistModuleBase } from "./base/wishlist.module.base";
import { WishlistService } from "./wishlist.service";
import { WishlistController } from "./wishlist.controller";

@Module({
  imports: [WishlistModuleBase],
  controllers: [WishlistController],
  providers: [WishlistService],
  exports: [WishlistService],
})
export class WishlistModule {}

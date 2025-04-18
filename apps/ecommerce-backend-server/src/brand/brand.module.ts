import { Module } from "@nestjs/common";
import { BrandModuleBase } from "./base/brand.module.base";
import { BrandService } from "./brand.service";
import { BrandController } from "./brand.controller";

@Module({
  imports: [BrandModuleBase],
  controllers: [BrandController],
  providers: [BrandService],
  exports: [BrandService],
})
export class BrandModule {}

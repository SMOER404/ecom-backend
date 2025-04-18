import { Module } from "@nestjs/common";
import { ReturnRequestModuleBase } from "./base/returnRequest.module.base";
import { ReturnRequestService } from "./returnRequest.service";
import { ReturnRequestController } from "./returnRequest.controller";
import { ReturnRequestResolver } from "./returnRequest.resolver";

@Module({
  imports: [ReturnRequestModuleBase],
  controllers: [ReturnRequestController],
  providers: [ReturnRequestService, ReturnRequestResolver],
  exports: [ReturnRequestService],
})
export class ReturnRequestModule {}

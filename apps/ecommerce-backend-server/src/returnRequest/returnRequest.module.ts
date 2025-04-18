import { Module } from "@nestjs/common";
import { ReturnRequestModuleBase } from "./base/returnRequest.module.base";
import { ReturnRequestService } from "./returnRequest.service";
import { ReturnRequestController } from "./returnRequest.controller";

@Module({
  imports: [ReturnRequestModuleBase],
  controllers: [ReturnRequestController],
  providers: [ReturnRequestService],
  exports: [ReturnRequestService],
})
export class ReturnRequestModule {}

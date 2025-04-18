import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReturnRequestService } from "./returnRequest.service";
import { ReturnRequestControllerBase } from "./base/returnRequest.controller.base";

@swagger.ApiTags("returnRequests")
@common.Controller("returnRequests")
export class ReturnRequestController extends ReturnRequestControllerBase {
  constructor(protected readonly service: ReturnRequestService) {
    super(service);
  }
}

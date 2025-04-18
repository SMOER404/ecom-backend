import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShippingMethodService } from "./shippingMethod.service";
import { ShippingMethodControllerBase } from "./base/shippingMethod.controller.base";

@swagger.ApiTags("shippingMethods")
@common.Controller("shippingMethods")
export class ShippingMethodController extends ShippingMethodControllerBase {
  constructor(protected readonly service: ShippingMethodService) {
    super(service);
  }
}

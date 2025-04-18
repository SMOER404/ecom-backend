import * as graphql from "@nestjs/graphql";
import { ShippingMethodResolverBase } from "./base/shippingMethod.resolver.base";
import { ShippingMethod } from "./base/ShippingMethod";
import { ShippingMethodService } from "./shippingMethod.service";

@graphql.Resolver(() => ShippingMethod)
export class ShippingMethodResolver extends ShippingMethodResolverBase {
  constructor(protected readonly service: ShippingMethodService) {
    super(service);
  }
}

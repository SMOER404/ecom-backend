import * as graphql from "@nestjs/graphql";
import { ReturnRequestResolverBase } from "./base/returnRequest.resolver.base";
import { ReturnRequest } from "./base/ReturnRequest";
import { ReturnRequestService } from "./returnRequest.service";

@graphql.Resolver(() => ReturnRequest)
export class ReturnRequestResolver extends ReturnRequestResolverBase {
  constructor(protected readonly service: ReturnRequestService) {
    super(service);
  }
}

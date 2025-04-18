import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShippingMethodServiceBase } from "./base/shippingMethod.service.base";

@Injectable()
export class ShippingMethodService extends ShippingMethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

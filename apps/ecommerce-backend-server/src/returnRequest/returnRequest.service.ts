import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReturnRequestServiceBase } from "./base/returnRequest.service.base";

@Injectable()
export class ReturnRequestService extends ReturnRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

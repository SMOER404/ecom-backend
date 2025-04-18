/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  SupportTicket as PrismaSupportTicket,
  User as PrismaUser,
} from "@prisma/client";

export class SupportTicketServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SupportTicketCountArgs, "select">
  ): Promise<number> {
    return this.prisma.supportTicket.count(args);
  }

  async supportTickets(
    args: Prisma.SupportTicketFindManyArgs
  ): Promise<PrismaSupportTicket[]> {
    return this.prisma.supportTicket.findMany(args);
  }
  async supportTicket(
    args: Prisma.SupportTicketFindUniqueArgs
  ): Promise<PrismaSupportTicket | null> {
    return this.prisma.supportTicket.findUnique(args);
  }
  async createSupportTicket(
    args: Prisma.SupportTicketCreateArgs
  ): Promise<PrismaSupportTicket> {
    return this.prisma.supportTicket.create(args);
  }
  async updateSupportTicket(
    args: Prisma.SupportTicketUpdateArgs
  ): Promise<PrismaSupportTicket> {
    return this.prisma.supportTicket.update(args);
  }
  async deleteSupportTicket(
    args: Prisma.SupportTicketDeleteArgs
  ): Promise<PrismaSupportTicket> {
    return this.prisma.supportTicket.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.supportTicket
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}

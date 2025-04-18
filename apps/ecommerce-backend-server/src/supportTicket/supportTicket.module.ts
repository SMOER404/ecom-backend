import { Module } from "@nestjs/common";
import { SupportTicketModuleBase } from "./base/supportTicket.module.base";
import { SupportTicketService } from "./supportTicket.service";
import { SupportTicketController } from "./supportTicket.controller";

@Module({
  imports: [SupportTicketModuleBase],
  controllers: [SupportTicketController],
  providers: [SupportTicketService],
  exports: [SupportTicketService],
})
export class SupportTicketModule {}

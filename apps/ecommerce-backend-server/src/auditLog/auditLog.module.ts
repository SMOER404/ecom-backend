import { Module } from "@nestjs/common";
import { AuditLogModuleBase } from "./base/auditLog.module.base";
import { AuditLogService } from "./auditLog.service";
import { AuditLogController } from "./auditLog.controller";

@Module({
  imports: [AuditLogModuleBase],
  controllers: [AuditLogController],
  providers: [AuditLogService],
  exports: [AuditLogService],
})
export class AuditLogModule {}

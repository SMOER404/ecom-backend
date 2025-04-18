import { Module } from "@nestjs/common";
import { FileUploadModuleBase } from "./base/fileUpload.module.base";
import { FileUploadService } from "./fileUpload.service";
import { FileUploadController } from "./fileUpload.controller";

@Module({
  imports: [FileUploadModuleBase],
  controllers: [FileUploadController],
  providers: [FileUploadService],
  exports: [FileUploadService],
})
export class FileUploadModule {}

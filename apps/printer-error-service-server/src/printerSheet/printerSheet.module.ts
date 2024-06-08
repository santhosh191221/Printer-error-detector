import { Module } from "@nestjs/common";
import { PrinterSheetModuleBase } from "./base/printerSheet.module.base";
import { PrinterSheetService } from "./printerSheet.service";
import { PrinterSheetController } from "./printerSheet.controller";
import { PrinterSheetResolver } from "./printerSheet.resolver";

@Module({
  imports: [PrinterSheetModuleBase],
  controllers: [PrinterSheetController],
  providers: [PrinterSheetService, PrinterSheetResolver],
  exports: [PrinterSheetService],
})
export class PrinterSheetModule {}

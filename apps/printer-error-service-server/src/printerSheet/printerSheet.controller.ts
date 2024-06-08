import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrinterSheetService } from "./printerSheet.service";
import { PrinterSheetControllerBase } from "./base/printerSheet.controller.base";

@swagger.ApiTags("printerSheets")
@common.Controller("printerSheets")
export class PrinterSheetController extends PrinterSheetControllerBase {
  constructor(protected readonly service: PrinterSheetService) {
    super(service);
  }
}

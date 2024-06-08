import * as graphql from "@nestjs/graphql";
import { PrinterSheetResolverBase } from "./base/printerSheet.resolver.base";
import { PrinterSheet } from "./base/PrinterSheet";
import { PrinterSheetService } from "./printerSheet.service";

@graphql.Resolver(() => PrinterSheet)
export class PrinterSheetResolver extends PrinterSheetResolverBase {
  constructor(protected readonly service: PrinterSheetService) {
    super(service);
  }
}

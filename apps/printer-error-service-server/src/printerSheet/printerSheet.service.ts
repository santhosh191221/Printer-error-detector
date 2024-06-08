import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrinterSheetServiceBase } from "./base/printerSheet.service.base";

@Injectable()
export class PrinterSheetService extends PrinterSheetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

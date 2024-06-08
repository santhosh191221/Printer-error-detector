import { PrinterSheetWhereInput } from "./PrinterSheetWhereInput";
import { PrinterSheetOrderByInput } from "./PrinterSheetOrderByInput";

export type PrinterSheetFindManyArgs = {
  where?: PrinterSheetWhereInput;
  orderBy?: Array<PrinterSheetOrderByInput>;
  skip?: number;
  take?: number;
};

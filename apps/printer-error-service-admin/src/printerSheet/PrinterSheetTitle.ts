import { PrinterSheet as TPrinterSheet } from "../api/printerSheet/PrinterSheet";

export const PRINTERSHEET_TITLE_FIELD = "id";

export const PrinterSheetTitle = (record: TPrinterSheet): string => {
  return record.id?.toString() || String(record.id);
};

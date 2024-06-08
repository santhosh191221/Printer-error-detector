import { SortOrder } from "../../util/SortOrder";

export type PrinterSheetOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  missingNozzles?: SortOrder;
  sectionData?: SortOrder;
  updatedAt?: SortOrder;
};

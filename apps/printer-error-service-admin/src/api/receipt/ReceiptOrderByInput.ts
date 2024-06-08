import { SortOrder } from "../../util/SortOrder";

export type ReceiptOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  processedData?: SortOrder;
  updatedAt?: SortOrder;
};

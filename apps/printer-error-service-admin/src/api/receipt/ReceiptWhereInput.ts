import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ReceiptWhereInput = {
  id?: StringFilter;
  image?: JsonFilter;
  processedData?: JsonFilter;
};

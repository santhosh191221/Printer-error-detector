import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PrinterSheetWhereInput = {
  id?: StringFilter;
  missingNozzles?: StringNullableFilter;
  sectionData?: StringNullableFilter;
};

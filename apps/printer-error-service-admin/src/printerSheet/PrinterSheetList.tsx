import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PrinterSheetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PrinterSheets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="missingNozzles" source="missingNozzles" />
        <TextField label="sectionData" source="sectionData" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

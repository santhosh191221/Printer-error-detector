import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PrinterSheetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="missingNozzles" multiline source="missingNozzles" />
        <TextInput label="sectionData" multiline source="sectionData" />
      </SimpleForm>
    </Create>
  );
};

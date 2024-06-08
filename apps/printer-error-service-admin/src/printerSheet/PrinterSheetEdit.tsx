import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PrinterSheetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="missingNozzles" multiline source="missingNozzles" />
        <TextInput label="sectionData" multiline source="sectionData" />
      </SimpleForm>
    </Edit>
  );
};

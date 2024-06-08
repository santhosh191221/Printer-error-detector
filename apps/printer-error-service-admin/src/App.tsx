import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ReceiptList } from "./receipt/ReceiptList";
import { ReceiptCreate } from "./receipt/ReceiptCreate";
import { ReceiptEdit } from "./receipt/ReceiptEdit";
import { ReceiptShow } from "./receipt/ReceiptShow";
import { PrinterSheetList } from "./printerSheet/PrinterSheetList";
import { PrinterSheetCreate } from "./printerSheet/PrinterSheetCreate";
import { PrinterSheetEdit } from "./printerSheet/PrinterSheetEdit";
import { PrinterSheetShow } from "./printerSheet/PrinterSheetShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PrinterErrorService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Receipt"
          list={ReceiptList}
          edit={ReceiptEdit}
          create={ReceiptCreate}
          show={ReceiptShow}
        />
        <Resource
          name="PrinterSheet"
          list={PrinterSheetList}
          edit={PrinterSheetEdit}
          create={PrinterSheetCreate}
          show={PrinterSheetShow}
        />
      </Admin>
    </div>
  );
};

export default App;

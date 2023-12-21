import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PixelList } from "./pixel/PixelList";
import { PixelCreate } from "./pixel/PixelCreate";
import { PixelEdit } from "./pixel/PixelEdit";
import { PixelShow } from "./pixel/PixelShow";
import { MoodList } from "./mood/MoodList";
import { MoodCreate } from "./mood/MoodCreate";
import { MoodEdit } from "./mood/MoodEdit";
import { MoodShow } from "./mood/MoodShow";
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
        title={"Pixel Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Pixel"
          list={PixelList}
          edit={PixelEdit}
          create={PixelCreate}
          show={PixelShow}
        />
        <Resource
          name="Mood"
          list={MoodList}
          edit={MoodEdit}
          create={MoodCreate}
          show={MoodShow}
        />
      </Admin>
    </div>
  );
};

export default App;

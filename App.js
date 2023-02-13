import React, { useState, useEffect } from "react";
import {} from "react-native";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./components/Main";

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//   });
// };

export default function App() {
  // const [iasReady, setIasReady] = useState(false);
  // const font = loadApplication();
  // console.log(font);

  // if (!iasReady) {
  //   return (
  //     <AppLoading
  //       startAsync={font}
  //       onFinish={() => setIasReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

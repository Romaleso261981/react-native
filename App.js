import React, { useState } from "react";
import {} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import routing from "./router";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
  return <NavigationContainer>{routing}</NavigationContainer>;
}

// return (
//   <NavigationContainer>
//     <MainStack.Navigator>
//       <MainStack.Screen
//         options={{
//           headerShown: false,
//           headerRight: () => (
//             <Button
//               onPress={() => alert("This is a button!")}
//               title="Info"
//               color="#fff"
//             />
//           ),
//         }}
//         name="Posts"
//         component={AuthRoute}
//       />
//       <MainStack.Screen
//         options={{
//           headerShown: false,
//         }}
//         name="Auth"
//         component={MainRoute}
//       />
//     </MainStack.Navigator>
//   </NavigationContainer>
// );

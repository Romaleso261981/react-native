import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Login from "./screens/auth/Login";
import Registration from "./screens/auth/Register";
import CreatePostsScreen from "./screens/mainScreen/CreatePostsScreen";
import PostsScreen from "./screens/mainScreen/PostsScreen";
import ProfileScreen from "./screens/mainScreen/ProfileScreen";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const routing = () => {
  const [auth, setAuth] = useState(true);
  const navigation = useNavigation();
  if (!auth) {
    return (
      <MainTab.Navigator>
        <MainTab.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            tabBarIcon: () => <AntDesign name="appstore-o" size={24} />,
            tabBarLabel: "",
            headerRight: () => (
              <Pressable
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <AntDesign
                  name="logout"
                  size={16}
                  style={{ right: 20, opacity: 0.3 }}
                />
              </Pressable>
            ),
          }}
        />
        <MainTab.Screen
          name="Create a post"
          component={CreatePostsScreen}
          options={{
            headerLeft: () => (
              <Pressable
                onPress={() => {
                  navigation.navigate("Posts", { screen: "Posts" });
                }}
              >
                <AntDesign
                  name="arrowleft"
                  size={24}
                  style={{ left: 20 }}
                  color="black"
                />
              </Pressable>
            ),
            tabBarIcon: () => (
              <AntDesign
                name="pluscircle"
                size={32}
                Style={{
                  capInsets: {
                    bottom: 20,
                    left: null,
                    right: undefined,
                    top: 50,
                  },
                }}
                color={"orange"}
              />
            ),
            tabBarLabel: "",
          }}
        />
        <MainTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => <AntDesign name="user" size={24} />,
            tabBarLabel: "",
          }}
        />
      </MainTab.Navigator>
    );
  }
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />
      <MainStack.Screen
        options={{
          headerShown: false,
        }}
        name="Register"
        component={Registration}
      />
    </MainStack.Navigator>
  );
};

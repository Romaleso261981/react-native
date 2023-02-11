import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Button,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

const Login = ({ navigation }) => {
  const [state, setState] = useState(initialState);

  const [isFocusedMail, setIsFocusedMail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHideAndSubmit = () => {
    console.log(`managed to get the data ${state.email}`);
    setIsShowKeyboard(false);
    setIsFocusedMail(false);
    setIsFocusedPassword(false);
    Keyboard.dismiss();
  };

  const keyboardHideWithoutFeedback = () => {
    setIsShowKeyboard(false);
    setIsFocusedMail(false);
    setIsFocusedPassword(false);
    Keyboard.dismiss();
  };
  return (
    <ImageBackground
      source={require("../../assets/images/stars-on-night-2.jpg")}
      style={styles.image}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <ImageBackground
            source={require("../../assets/images/bgava.jpg")}
            style={{
              ...styles.avatar,
              top: isShowKeyboard ? 0 : 200,
              display: isShowKeyboard ? "none" : "flex",
            }}
          ></ImageBackground>
          <TouchableWithoutFeedback onPress={keyboardHideWithoutFeedback}>
            <View style={{ ...styles.form, top: isShowKeyboard ? 0 : 263 }}>
              <Text style={styles.formTitle}>Login</Text>

              <TextInput
                style={{
                  ...styles.input,
                  backgroundColor: isFocusedMail ? "#FFFFFF" : "#F6F6F6",
                  color: isFocusedMail ? "#212121" : "#BDBDBD",
                  borderColor: isFocusedMail ? "red" : "green",
                }}
                placeholder="email"
                placeholderTextColor="black"
                onFocus={() => {
                  setIsFocusedMail(true);
                  setIsShowKeyboard(true);
                }}
                // onBlur={() => keyboardHide()}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
              <View style={styles.wrapPassword}>
                <TextInput
                  style={{
                    ...styles.input,
                    backgroundColor: isFocusedPassword ? "#FFFFFF" : "#F6F6F6",
                    color: isFocusedPassword ? "#212121" : "#BDBDBD",
                    borderColor: isFocusedPassword ? "red" : "green",
                  }}
                  placeholder="password"
                  placeholderTextColor="black"
                  secureTextEntry={true}
                  value={state.password}
                  onFocus={() => {
                    setIsFocusedPassword(true);
                    setIsShowKeyboard(true);
                  }}
                  // onBlur={() => keyboardHide()}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <Text style={styles.passwordShow}>ShowPassword</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnSubmit}
                onPress={keyboardHideAndSubmit}
              >
                <Text style={styles.btnSubmitTitle}>Register</Text>
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text onPress={() => navigation.navigate("Register")}>
                  Go to Register
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  form: {
    position: "relative",
    width: 385,
    height: 549,
    backgroundColor: "#ecf0f1",
  },
  avatar: {
    position: "absolute",
    zIndex: 2,
    left: 120,
    width: 140,
    height: 120,
    borderRadius: 25,
    backgroundColor: "#F6F6F6",
  },

  formTitle: {
    marginTop: 200,
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "500",
    textAlign: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  btnSubmit: {
    height: 51,
    marginHorizontal: 32,
    marginTop: 43,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  btnSubmitTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },

  input: {
    marginHorizontal: 16,
    marginTop: 16,
    paddingLeft: 16,
    width: 343,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E8E8E8",
    placeholderTextColor: "#BDBDBD",
    backgroundColor: "#F6F6F6",
  },
  passwordShow: {
    position: "absolute",
    width: 85,
    height: 22,
    right: 36,
    top: 30,
    fontSize: 16,
    borderColor: "#00008b",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    color: "#1B437",
  },
  wrapPassword: {
    position: "relative",
  },
  button: {
    width: 200,
  },
});

export default Login;

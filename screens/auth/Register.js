import React from "react";
import { useTogglePasswordVisibility } from "../../hooks/useTogglePasswordVisibility";
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
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Registration = ({ navigation }) => {
  const [state, setState] = useState(initialState);

  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isFocusedMail, setIsFocusedMail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const { passwordVisibility, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const keyboardHideAndSubmit = () => {
    setIsShowKeyboard(false);
    setIsFocusedName(false);
    setIsFocusedMail(false);
    setIsFocusedPassword(false);
    setState((prevState) => ({ ...prevState, name: "" }));
    setState((prevState) => ({ ...prevState, email: "" }));
    setState((prevState) => ({ ...prevState, password: "" }));
    Keyboard.dismiss();
  };

  const keyboardHideWithoutFeedback = () => {
    setIsShowKeyboard(false);
    setIsFocusedName(false);
    setIsFocusedMail(false);
    setIsFocusedPassword(false);
    setState((prevState) => ({ ...prevState, name: "" }));
    setState((prevState) => ({ ...prevState, email: "" }));
    setState((prevState) => ({ ...prevState, password: "" }));
    Keyboard.dismiss();
  };
  return (
    <ImageBackground
      source={require("../../assets/images/Photo_BG.png")}
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
              top: isShowKeyboard ? 0 : 160,
              display: isShowKeyboard ? "none" : "flex",
            }}
          ></ImageBackground>
          <TouchableWithoutFeedback onPress={keyboardHideWithoutFeedback}>
            <View style={{ ...styles.form, top: isShowKeyboard ? 0 : 263 }}>
              <Text style={styles.formTitle}>??????????????????????</Text>
              <TextInput
                style={{
                  ...styles.input,
                  color: "black",
                  borderColor: isFocusedName ? "crimson" : "green",
                }}
                placeholder="name"
                placeholderTextColor="blue"
                value={state.name}
                onFocus={() => {
                  setIsFocusedName(true);
                  setIsShowKeyboard(true);
                }}
                onBlur={() => {
                  setIsFocusedName(false);
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, name: value }))
                }
              />
              <TextInput
                style={{
                  ...styles.input,
                  color: "black",
                  borderColor: isFocusedMail ? "crimson" : "green",
                }}
                placeholder="email"
                placeholderTextColor="blue"
                onFocus={() => {
                  setIsFocusedMail(true);
                  setIsShowKeyboard(true);
                }}
                onBlur={() => {
                  setIsFocusedMail(false);
                }}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
              <View style={styles.wrapPassword}>
                <TextInput
                  style={{
                    ...styles.input,
                    color: "black",
                    borderColor: isFocusedPassword ? "crimson" : "green",
                  }}
                  placeholder="password"
                  placeholderTextColor="blue"
                  secureTextEntry={passwordVisibility}
                  value={state.password}
                  onFocus={() => {
                    setIsFocusedPassword(true);
                    setIsShowKeyboard(true);
                  }}
                  onBlur={() => {
                    setIsFocusedPassword(false);
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <Text
                  style={styles.passwordShow}
                  onPress={handlePasswordVisibility}
                >
                  ????????????????
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnSubmit}
                onPress={keyboardHideAndSubmit}
              >
                <Text style={styles.btnSubmitTitle}>????????????????????????????????????</Text>
              </TouchableOpacity>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text onPress={() => navigation.navigate("Login")}>
                  Go to Login
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
    marginTop: 75,
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

export default Registration;

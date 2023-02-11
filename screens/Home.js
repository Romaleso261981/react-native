import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  ImageBackground,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/stars-on-night-2.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.buttonRegistration}
            >
              <Button
                style={styles.buttonRegistration}
                title="Go to Registration"
                onPress={() => navigation.navigate("Registration")}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonLogin}>
              <Button
                style={styles.buttonLogin}
                title="Go to Login"
                onPress={() => navigation.navigate("Login")}
              />
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLogin: {
    width: 200,
    height: 200,
  },
  buttonRegistration: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

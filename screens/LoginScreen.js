import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       auth.
  //       navigation.navigate("Home");
  //     }
  //   });

  //   return unsubscribe;
  // }, []);

  const handleSignUp = () => {
    console.log("Signed in");
    auth
      .createUserWithEmailAndPassword(email.trim(), password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
        navigation.navigate("Home");
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email.trim(), password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
        navigation.navigate("Home");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <LinearGradient
        colors={["#FFDD00", "#FBB034"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 500,
          borderRadius: 20,
          top: -24,
        }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={[styles.input, { marginBottom: 10 }]}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={[styles.input, { marginTop: 10 }]}
            secureTextEntry
          />
        </View>
      </LinearGradient>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.loginbutton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp} style={styles.registerbutton}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "99%",
    height: 300,
    borderRadius: 20,
    paddingTop: 30,
    // backgroundColor: "#dfdfdf",
  },
  input: {
    top: 70,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 100,
    paddingLeft: 20,
    width: "90%",
    marginLeft: 15,
  },
  buttonContainer: {
    width: "65%",
    justifyContent: "center",
    alignItems: "center",
  },
  loginbutton: {
    backgroundColor: "#ffffff",
    width: "100%",
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
    top: 20,
    color: "#FFDD00",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#FFDD00",
  },
  registerbutton: {
    backgroundColor: "#ffffff",
    width: "100%",
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
    top: 40,
    color: "#FFDD00",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#FFDD00",
  },
  buttonText: {
    color: "#FFDD00",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});

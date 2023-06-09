import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "./screens/Homescreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieScreen from "./screens/MovieScreen";
import TheatreScreen from "./screens/TheatreScreen";
import LoginScreen from "./screens/LoginScreen";
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Movies"
          component={MovieScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Theatre"
          component={TheatreScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});

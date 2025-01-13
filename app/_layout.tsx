import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useRoute } from "@react-navigation/native";

import GlobalProvider from "@/lib/global-provider";

import "./global.css";

export default function RootLayout() {
  // creo un array di fonts da caricare
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  // appena i font sono caricati, nasconde la splash screen
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack
        screenOptions={({ route }) => ({
          headerShown: route.name.includes("forgot-password") ? true : false,
          headerTitle: route.name.includes("forgot-password") ? "" : "",
          headerTintColor: route.name.includes("forgot-password")
            ? "#f54257"
            : "#f54257",
          headerStyle: {
            backgroundColor: route.name.includes("forgot-password")
              ? "#f5f5f5f5"
              : "#f5f5f5f5",
          },

          // screenOptions={{ headerShown: false }}
        })}
      />
    </GlobalProvider>
  );
}

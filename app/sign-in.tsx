import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Redirect } from "expo-router";
import icons from "@/constants/icons";
import images from "@/constants/images";

const Auth = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <Text>Ciao</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Auth;

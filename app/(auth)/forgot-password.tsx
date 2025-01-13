import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import LabeledInput from "@/components/LabeledInput";
import { router } from "expo-router";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");

  return (
    // Serve a rimuovere la tastiera con il click outside
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="bg-white">
      {/* Aggiunge spazio tra la tastiera e gli elementi */}

      <KeyboardAvoidingView behavior="height" className="flex-1 bg-white">
        {/* Contenuto */}
        <SafeAreaView className="flex-1 px-5 justify-center">
          {/* Testo di benvenuto */}
          <Text className="text-5xl font-poppins-bold">Forgot password</Text>
          <Text className="text-lg font-poppins-medium mt-2">
            Enter your email address below and we'll send yo an email with
            instruction on how to change your password
          </Text>

          {/* Campi di input */}

          <LabeledInput
            label="Enter your email"
            value={password}
            onChangeText={setPassword}
            isPassword={true}
          />
          {/* Pulsanti */}
          <View className="mt-16 ">
            <TouchableOpacity
              className="bg-primary p-4 rounded-xl flex justify-center items-center mb-5"
              onPress={(handlePress) => router.push("/sign-in")}
            >
              <Text className="text-white font-poppins-medium text-xl">
                Send
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;

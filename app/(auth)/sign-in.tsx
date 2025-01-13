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
import { useGlobalContext } from "@/lib/global-provider";

import LabeledInput from "@/components/LabeledInput";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { Link, router } from "expo-router";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { logged, setLogged } = useGlobalContext();
  const handlePress = ({ route }: { route: any }) => {
    setLogged(true);
    router.push(route);
  };

  return (
    // Serve a rimuovere la tastiera con il click outside
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="bg-black">
      {/* Aggiunge spazio tra la tastiera e gli elementi */}

      <KeyboardAvoidingView behavior="height" className="flex-1 bg-black">
        {/* behavior options:
        1. padding
          Aggiunge un margine di spazio tra la tastiera e il contenuto, spostando verso l'alto tutti gli elementi figli in modo da renderli visibili sopra la tastiera. 
        
        2. height
          Ridimensiona l'altezza del contenitore padre per adattarsi alla comparsa della tastiera.
        
        3. position
          Cambia la posizione del contenitore principale utilizzando il posizionamento assoluto (absolute).  */}
        <Image
          source={images.welcome}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Image
          source={images.card_gradient}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Contenuto */}
        <SafeAreaView className="flex-1 px-5 justify-center">
          {/* Testo di benvenuto */}
          <Text className="text-white text-5xl font-poppins-bold">
            Welcome Back
          </Text>
          <Text className="text-white text-xl font-poppins-light mt-2">
            Sign in to continue
          </Text>

          {/* Campi di input */}
          <LabeledInput
            label="User name"
            value={username}
            onChangeText={setUsername}
          />
          <LabeledInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            isPassword={true}
          />
          {/* Pulsanti */}
          <View className="mt-16 ">
            <TouchableOpacity
              className="bg-primary p-4 rounded-xl flex justify-center items-center mb-5"
              onPress={() => handlePress({ route: "/" })}
            >
              <Text className="text-white font-poppins-medium text-xl">
                SIGN IN
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-[#2173c8] p-4 rounded-xl flex justify-center items-center mb-10">
              <View className="flex flex-row items-center">
                <Image source={icons.facebook} className="mr-2" />
                <Text className="text-white font-poppins-medium text-lg">
                  Connect with Facebook
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex justify-center items-center"
              onPress={() => handlePress({ route: "/forgot-password" })}
            >
              <Text className="text-white font-poppins-light text-lg">
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        {/* Frase in fondo */}
        <TouchableOpacity
          className="absolute bottom-2 w-full flex justify-center items-center p-5"
          onPress={() => handlePress({ route: "/sign-up" })}
        >
          <Text className="text-white font-poppins-light text-lg">
            Don't have an account? <Text className="text-primary">Sign up</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;

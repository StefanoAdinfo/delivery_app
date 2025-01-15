import React from "react";
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Button,
  SafeAreaView,
} from "react-native";

import images from "@/constants/images";
import icons from "@/constants/icons";

const stars = [1, 2, 3, 4, 5];

const FeaturedCard = ({ item }: any) => {
  return (
    <TouchableOpacity
      className="flex-1  my-4 h-[250px] mx-1 p-3 bg-white relative"
      style={{
        // Box shadow con una leggera sfocatura per un effetto elegante
        shadowColor: "#000", // Colore dell'ombra
        shadowOffset: { width: 0, height: 0 }, // Direzione dell'ombra (sopra/basso)
        shadowOpacity: 0.6, // Opacità dell'ombra
        shadowRadius: 4, // Sfocatura dell'ombra (più alto = più sfocato)
        elevation: 5, // Ombra per Android
        borderRadius: 6,
      }}
    >
      {/* <FlatList
        data={[1, 2, 3]}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View className="mr-3">
            <Image
              source={images.giapponese2}
              className="w-44 h-32 rounded-md"
            />
          </View>
        )}
      /> */}

      <Image source={images.giapponese2} className="w-full h-40 rounded-md" />
      <View className="flex flex-col mt-2 px-2 pb-2">
        <Text className="text-lg font-poppins-bold text-black-300">
          Conrad Chicago Restaurant
        </Text>
        <Text className="text-md font-poppins-bold text-headline">
          976 Madyson Drive Suite 679
        </Text>

        <View className="flex flex-row items-center justify-between mt-4">
          <View className="flex flex-row items-center ">
            {stars.map((item, index) => (
              <Image source={icons.star} key={index} />
            ))}
          </View>
          <Text className="text-md font-poppins-bold text-headline">
            Open 8:00 AM
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCard;

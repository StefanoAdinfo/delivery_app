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

import FeaturedCard from "./FeaturedCard";

import images from "@/constants/images";
import icons from "@/constants/icons";

const stars = [1, 2, 3, 4, 5];
const Card = () => {
  return (
    <TouchableOpacity
      className="flex-1 w-80 my-4 h-full  bg-white relative"
      style={{
        // Box shadow con una leggera sfocatura per un effetto elegante
        shadowColor: "#000", // Colore dell'ombra
        shadowOffset: { width: 0, height: 0 }, // Direzione dell'ombra (sopra/basso)
        shadowOpacity: 0.6, // Opacità dell'ombra
        shadowRadius: 4, // Sfocatura dell'ombra (più alto = più sfocato)
        elevation: 5, // Ombra per Android
        borderRadius: 6,
        marginLeft: 4,
      }}
    >
      <View className="flex flex-row items-center absolute px-2 top-2 right-0 p-1 z-50">
        <Image
          source={icons.star}
          className="w-10 h-10 mr-2"
          tintColor="#f54257"
        />
      </View>

      <Image source={images.giapponese2} className="w-full h-40 rounded-t-md" />

      <View className="flex flex-col mt-2 px-2 pb-2">
        <Text className="text-lg font-poppins-bold text-black-300">
          Crispy Chicken Sandwich
        </Text>
        <Text className="text-md font-poppins-bold text-headline">
          Korean BBQ
        </Text>

        <View className="flex flex-row items-center justify-between mt-4">
          <View className="flex flex-row items-center ">
            {stars.map((item, index) => (
              <Image source={icons.star} key={index} />
            ))}
          </View>
          <Text className="text-lg font-poppins-bold ">$25.00</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CardCarusel = ({
  orientation,
  title,
  text,
}: {
  orientation?: string;
  title: string;
  text: string;
}) => {
  return (
    <View style={{ paddingBottom: 24 }}>
      <View className="flex flex-row items-center justify-between mx-1">
        <Text className="font-poppins-bold" style={{ fontSize: 20 }}>
          {title}
        </Text>
        <TouchableOpacity>
          <Text className="font-poppins-medium text-primary">
            {text} &gt;&gt;
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        nestedScrollEnabled={true}
        {...(orientation === "horizontal" ? { horizontal: true } : {})}
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3, 4]}
        renderItem={({ item, index }) => {
          return orientation === "horizontal" ? (
            <View
              style={{
                flex: 1,
                marginRight: 12,
              }}
            >
              <Card />
            </View>
          ) : (
            <FeaturedCard item={item} />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CardCarusel;

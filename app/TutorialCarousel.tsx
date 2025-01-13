import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { router } from "expo-router";

import images from "@/constants/images";

const { width, height } = Dimensions.get("window");

const TutorialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      id: "1",
      image: images.carusel1,
      title: "Discover place near you",
      text: "We make it simple to find the food you crave. Enter your address and let us do the rest.",
    },
    {
      id: "2",
      image: images.carusel2,
      title: "Choose A Tasty Dish",
      text: "When you order Eat Street, we'll hook you up with exclusive coupons, specials and rewards.",
    },
    {
      id: "3",
      image: images.carusel3,
      title: "Pick Up Or Delivery",
      text: "We make food ordering fast, simple and free - no matter if you order online or cash.",
      button: "Get Started",
    },
  ];

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      {/* Skip Button */}
      <TouchableOpacity
        className="absolute top-16 right-5 z-10"
        onPress={() => {
          router.push("/sign-in");
        }}
      >
        <Text className="text-red-500 font-bold">Skip &gt;&gt;</Text>
      </TouchableOpacity>
      {/* Carousel */}
      <Carousel
        width={width}
        height={height}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setCurrentIndex(index)} // Aggiorna l'indice corrente
        renderItem={({ item }) => (
          <View className="flex justify-center items-center w-full h-full px-6">
            <Image source={item.image} className="w-72 h-72 mb-8" />
            <Text className="text-3xl font-bold text-center">{item.title}</Text>
            <Text className="text-lg font-medium mt-2 text-center">
              {item.text}
            </Text>
            {item.button && (
              <View className="absolute bottom-36 left-0 right-0 flex-row justify-center items-center">
                <TouchableOpacity
                  className="bg-red-500 px-12 py-4 rounded-md mt-10"
                  onPress={() => {
                    router.push("/sign-in");
                  }}
                >
                  <Text className="text-white font-poppins text-xl">
                    Get Started
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />
      {/* barra progressi */}
      <View className="absolute bottom-10 left-0 right-0 flex-row justify-center items-center">
        {data.map((_, index) => (
          <View
            key={index}
            className={`h-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-red-500 w-8" : "bg-gray-300 w-4"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default TutorialCarousel;

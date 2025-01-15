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
  TextInput,
} from "react-native";

import icons from "@/constants/icons";

const caruselData = [
  {
    orientation: "horizontal",
    title: "Trending this week",
    text: "View all",
  },
  {
    title: "Most Popular",
    text: "26 places",
  },
];

import CardCarusel from "@/components/CardCarusel";
export default function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="height" className="flex-1 ">
        <SafeAreaView className="bg-primary ">
          <View className="mb-5 mt-5 px-5">
            <View className="flex flex-row justify-between">
              <Text className="text-white text-4xl font-poppins-bold">
                Eat Street
              </Text>
              <TouchableOpacity className="flex flex-row items-center">
                <Image
                  source={icons.filter}
                  style={{ width: 25, height: 25 }}
                />
                <Text className="text-white text-xl font-poppins-light">
                  Filter
                </Text>
              </TouchableOpacity>
            </View>

            <View className=" mt-5 ">
              <View className=" flex flex-row items-center justify-between bg-white  w-full rounded-xl py-2 px-4">
                <View className="flex-1 flex flex-row items-center justify-start z-50 ">
                  <Image
                    source={icons.search}
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                  <TextInput
                    // value={search}
                    // onChangeText={handleSearch}
                    placeholder="Search..."
                    placeholderTextColor="lightgray"
                    className="text-lg font-poppins flex-1 mt-1"
                    style={{ marginLeft: 10 }}
                  />
                </View>

                {/* <TouchableOpacity>
               <Image source={icons.filter} style={{ width: 25, height: 25 }} />
             </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </SafeAreaView>
        <SafeAreaView className="flex-1 mt-10">
          <FlatList
            data={caruselData}
            renderItem={({ item, index }) => (
              <View key={index}>
                <CardCarusel
                  orientation={item.orientation}
                  title={item.title}
                  text={item.text}
                />
              </View>
            )}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

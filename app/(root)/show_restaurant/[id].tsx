import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import CaruselRestaurant from "@/components/CaruselRestaurant";
import { router, useLocalSearchParams } from "expo-router";

import icons from "@/constants/icons";
import images from "@/constants/images";

const stars = [1, 2, 3, 4, 5];
const Restaurant = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="px-5 ">
        <TouchableOpacity
          className="flex flex-row items-center"
          onPress={() => router.back()}
        >
          <Image source={icons.leftArrow} className=" h-3" />
          <Text className="text-primary font-poppins-medium ml-1 text-lg">
            Back Restaurant
          </Text>
        </TouchableOpacity>

        <View className="mt-5  ">
          <Text className="text-4xl font-poppins-bold">
            Conrad Chicago Restaurant
          </Text>

          <Text className="text-md font-poppins-bold mt-2 text-headline">
            123 Main Street, Chicago, IL
          </Text>
          <View className="flex flex-row items-center mt-2">
            {stars.map((star, index) => (
              <Image source={icons.star} key={index} />
            ))}
            <Text
              className="text-md font-poppins-medium text-headline mt-1 "
              style={{ marginLeft: 5 }}
            >
              (245 review)
            </Text>
          </View>
          <View className="flex flex-row items-center mt-2 ">
            <View style={{ marginRight: 75 }}>
              <Text className="text-md font-poppins-bold">Delivery</Text>
              <Text className="text-md font-poppins-medium text-headline mt-1">
                Free
              </Text>
            </View>
            <View>
              <Text className="text-md font-poppins-bold">Open time</Text>
              <Text className="text-md font-poppins-medium text-headline mt-1">
                8:00 AM
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        className=" mt-5 py-3"
        style={{
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderColor: "#C1C0C9",
        }}
      >
        <View className="px-5 flex flex-row items-center justify-between">
          <View className="flex flex-row">
            <TouchableOpacity
              className=" p-2 rounded-full"
              style={{ backgroundColor: "#DAD9E2" }}
            >
              <Image source={icons.share} style={{ height: 25, width: 25 }} />
            </TouchableOpacity>
            <TouchableOpacity
              className=" p-2 rounded-full mx-3"
              style={{ backgroundColor: "#DAD9E2" }}
            >
              <Image source={icons.share} style={{ height: 25, width: 25 }} />
            </TouchableOpacity>
            <TouchableOpacity
              className=" p-2 rounded-full "
              style={{ backgroundColor: "#DAD9E2" }}
            >
              <Image source={icons.share} style={{ height: 25, width: 25 }} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text
              className="text-md font-poppins-bold text-primary rounded-full "
              style={{
                borderColor: "#f54257",
                borderWidth: 2,
                paddingHorizontal: 20,
                paddingVertical: 5,
              }}
            >
              Contact
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-5">
        <Text className="text-2xl font-poppins-bold mt-5">FEATURED ITEMS</Text>
        <CaruselRestaurant />
      </View>
    </SafeAreaView>
  );
};

export default Restaurant;

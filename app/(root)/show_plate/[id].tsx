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
import { router, useLocalSearchParams } from "expo-router";

import icons from "@/constants/icons";
import images from "@/constants/images";

const Plate = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  return (
    <SafeAreaView>
      <View className="px-5">
        <TouchableOpacity
          className="flex flex-row items-center"
          onPress={() => router.back()}
        >
          <Image source={icons.leftArrow} className=" h-3" />
          <Text className="text-primary font-poppins-medium ml-1 text-lg">
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Plate;

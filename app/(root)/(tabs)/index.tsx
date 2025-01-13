import { useRoute } from "@react-navigation/native";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
export default function Home() {
  const route = useRoute();

  // Log della rotta corrente
  console.log("Current route:", route.name);
  return <Text className="text-red-500">Homeok</Text>;
}

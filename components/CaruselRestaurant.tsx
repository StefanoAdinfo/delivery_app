// import React from "react";
// import { Image, Dimensions, SafeAreaView, Text, View } from "react-native";
// import { useSharedValue } from "react-native-reanimated";

// import images from "@/constants/images";

// const CaruselRestaurant = () => {
//   const progress = useSharedValue<number>(0);
//   const { width } = Dimensions.get("window");

//   const data = [
//     {
//       title: "Crispy Chicken Sandwich",
//       price: "$25.00",
//       image: images.pizza1,
//     },
//     {
//       title: "Berry Waffles",
//       price: "$20.00",
//       image: images.pasta1,
//     },
//     {
//       title: "Fruit Salad",
//       price: "$15.00",
//       image: images.giapponese2,
//     },
//   ];

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View className="h-full mt-5">
//         <Carousel
//           data={data}
//           height={258}
//           loop={true}
//           width={width}
//           renderItem={({ item }) => (
//             <View className="rounded-lg  w-full bg-white mx-2">
//               <Image
//                 source={item.image}
//                 style={{ width: width * 0.9, height: 150 }}
//                 className="rounded-lg"
//               />
//               <View className="py-4">
//                 <Text className="text-lg font-poppins-bold">{item.title}</Text>
//                 <Text className="text-headline font-poppins-bold">
//                   {item.price}
//                 </Text>
//               </View>
//             </View>
//           )}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default CaruselRestaurant;

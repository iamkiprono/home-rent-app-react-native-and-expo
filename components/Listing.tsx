import { View, Text } from "react-native";
import React from "react";

const Listing = ({ data }) => {
  return (
    <View className="">
      <View className="flex-row py-2 gap-4">
        <View className="h-[74px] w-[70px] bg-gray-200 rounded-lg"></View>
        <View className="justify-around">
          <Text className="text-lg font-bold">{data.name}</Text>
          <Text className="text-[#0A8ED9]">{data.price}/ Year</Text>
          <Text className="text-gray-400">
            {data.bedrooms} Bedroom {data.bathrooms} Bathroom
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Listing;

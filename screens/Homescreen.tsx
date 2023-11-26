import React, { useState } from "react";
import {
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Listing from "../components/Listing";
import { houses } from "../houses";

export default function Homescreen({ navigation }) {
  const categories = ["House", "Apartment", "Hotel", "Villa"];

  const [selected, setSelected] = useState("House");
  return (
    <View className="flex-1 py-12 px-6">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-[#858585]">Location</Text>
          <Text className="font-bold text-xl">Ruaka</Text>
        </View>
        <View>
          <Text>Bell</Text>
        </View>
      </View>
      <View>
        <TextInput
          placeholder="Search address or near you"
          className="my-4 p-4 rounded-full bg-gray-100"
        />
      </View>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          className="gap-12 py-4 "
          horizontal
        >
          {categories.map((categorie, i) => {
            return (
              <TouchableOpacity onPress={() => setSelected(categorie)} key={i}>
                <Text
                  className={`p-4 ${
                    categorie === selected ? "bg-blue-400 text-white" : ""
                  } ${
                    categorie === selected ? " text-white" : "text-[#858585]"
                  }  rounded-lg`}
                >
                  {categorie}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-bold">Near from you</Text>
        <Text className="text-[#858585]">See more</Text>
      </View>
      <View className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              className="py-6 gap-4"
              horizontal
            >
              {houses
                .filter((name) => name.location === "Ruaka")
                .map((house, i) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Details", {
                          itemId: 86,
                          otherParam: "anything you want here",
                        })
                      }
                      key={i}
                      className="w-[222px] h-[272px] bg-transparent relative"
                    >
                      <View className="z-10 text-white ml-4 px-2 rounded bg-[#473d3d45] absolute right-5 top-5">
                        <Text className="text-white my-2">
                          {house.location}
                        </Text>
                      </View>

                      <View className="z-10 text-white ml-4 p-2 rounded bg-[#473d3d45] absolute bottom-5">
                        <Text className="text-white my-2">{house.name}</Text>
                        <Text className="text-white ">
                          {house.owner.propertyName}
                        </Text>
                      </View>
                      <Image
                        className="w-full h-full rounded-2xl"
                        source={require("../assets/dreamsville.jpg")}
                      />
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
          </View>

          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold">Best for you</Text>
            <Text className="text-[#858585]">See more</Text>
          </View>
          <View>
            {houses
                .filter((name) => name.location !== "Ruaka").map((house, i) => {
              return <Listing data={house} key={i} />;
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

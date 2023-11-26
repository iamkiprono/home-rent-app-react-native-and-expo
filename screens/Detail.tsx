import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

const Detail = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params;
  return (
    <View className="flex-1 py-12 px-6">
      <View>
        <ScrollView showsVerticalScrollIndicator={false} className="pb-8">
          <View className="w-full h-[319px] bg-gray-400 rounded-2xl relative ">
            <View className="absolute z-10 top-4 w-full">
              <View className="flex-row justify-between px-2">
                <View>
                  <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <Text className="text-lg bg-[#726a6a4e] rounded-full text-white p-2">
                      {" "}
                      Back{" "}
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
                <View>
                  <Text className="text-lg bg-[#726a6a4e] rounded-full text-white p-2">
                    {" "}
                    Save{" "}
                  </Text>
                </View>
              </View>
            </View>
            <Image
              resizeMode="contain"
              className="w-full h-full rounded-2xl "
              source={require("../assets/dreamsville.jpg")}
            />
          </View>
          <View>
            <Text className="text-lg font-bold my-4">Description</Text>
            <Text className="text-gray-400">
              The 3 level house that has a modern design, has a large pool and a
              garage that fits up to four cars... Show More
            </Text>
          </View>
          <View className="my-4 flex-row items-center justify-between ">
            <View className="flex-row items-center gap-4">
              <View>
                <Text>Image</Text>
              </View>
              <View>
                <Text className="text-lg font-bold">Garry Lee</Text>
                <Text className="text-gray-400">Owner</Text>
              </View>
            </View>
            <View className="flex-row gap-4 ">
              <Text>Call</Text>
              <Text>messafe</Text>
            </View>
          </View>
          <View>
            <Text className="text-lg font-bold my-4">Gallery</Text>
          </View>
          <View className="my-4 ">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="gap-2"
            >
              {[...Array(10)].map((_, i) => {
                return (
                  <View
                    className="w-[72px] h-[72px] bg-gray-400 rounded-lg"
                    key={i}
                  ></View>
                );
              })}
            </ScrollView>
          </View>
          <View>
            <Text className="text-lg font-bold my-4">Location</Text>
          </View>
          <View className="w-full h-40 bg-gray-300 rounded-lg"></View>

        <View className="bg-white py-8 my-4 rounded px-4">
          <View>
            <Text className="text-lg font-bold ">Price</Text>
          </View>
          <View className="flex-row  items-center justify-between">
            <View>
              <Text>250000</Text>
            </View>
            <View className="bg-blue-400  py-2 px-6">
              <Text className="text-white">Rent Now</Text>
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Detail;

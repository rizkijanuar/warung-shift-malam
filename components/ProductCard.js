import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

export default function ProductCard({
  image,
  category,
  title,
  price,
  description,
}) {
  const [count, setCount] = React.useState(1);
  const { colorScheme } = useColorScheme();

  return (
    <View className="w-full p-5 my-5 bg-white dark:bg-gray-50/10 rounded-3xl">
      <View>
        <Image
          source={{ uri: image }}
          className="w-full rounded-xl h-72"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">
          {category}
        </Text>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>
        <View className="flex-row items-center justify-between my-3">
          <View className="flex-row items-center gap-2">
            <AntDesign
              name="minuscircleo"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
              onPress={() => setCount(count - 1)}
            />
            <Text className="text-xl font-semibold dark:text-white">
              {count}
            </Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text className="text-2xl font-extrabold dark:text-white">
            ${price * count}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          className="text-sm text-black/60 dark:text-white/70"
        >
          {description}
        </Text>
        <TouchableOpacity className="flex-row self-center justify-center w-10/12 p-3 my-3 bg-black rounded-full dark:bg-white">
          <Text className="font-bold text-white dark:text-black">
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

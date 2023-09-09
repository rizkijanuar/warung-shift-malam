import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Switch } from "react-native";
import { useColorScheme } from "nativewind";
import ProductsList from "./components/ProductsLists";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="items-center justify-center flex-1 bg-gray-200 dark:bg-black">
      <View className="flex-row items-center w-full gap-5">
        <Text className="text-2xl font-bold dark:text-white">
          Warung Shift Malam
        </Text>
        <Switch onChange={toggleColorScheme} value={colorScheme === "dark"} />
      </View>
      <ProductsList />
      <StatusBar
        translucent={false}
        style={colorScheme === "dark" ? "light" : "dark"}
      />
    </SafeAreaView>
  );
}

import { Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { View, ActivityIndicator, TouchableOpacity, Image, Text } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Yomogi: require("../../assets/fonts/Yomogi-Regular.ttf"),
  });

  const router = useRouter(); // 画面遷移用

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "#ccc" },
        headerTintColor: "#000",
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "sans-serif" },
        headerRight: () =>
          route.name !== "index" && route.name !== "login" ? ( // indexとloginでは非表示
            <TouchableOpacity
              onPress={() => router.push("/login")}
              style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}
            >
              <Image
                source={require("../../assets/images/logout.png")} // フリーアイコンを設定
                style={{ width: 24, height: 24, marginRight: 5 }}
              />
              <Text style={{ fontSize: 16, color: "#000" }}>ログアウト</Text>
            </TouchableOpacity>
          ) : null,
      })}
    >
      <Stack.Screen name="index" options={{ title: "Future Diary", headerRight: () => null }} />
      <Stack.Screen name="login" options={{ title: "ログイン", headerRight: () => null }} />
      <Stack.Screen name="home" options={{ title: "ホーム" }} />
    </Stack>
  );
}

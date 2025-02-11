import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { View, ActivityIndicator } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Yomogi: require("../../assets/fonts/Yomogi-Regular.ttf"), // 手書き風フォント
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#ccc" }, // ヘッダーを灰色に
        headerTintColor: "#000", // 文字を黒に
        headerTitleAlign: "center", // ヘッダーのタイトルを中央に配置
        headerTitleStyle: { fontFamily: "sans-serif" }, // 通常のフォントに設定
      }}
    >
      <Stack.Screen name="index" options={{ title: "Future Diary" }} />
      <Stack.Screen name="login" options={{ title: "ログイン" }} />
    </Stack>
  );
}

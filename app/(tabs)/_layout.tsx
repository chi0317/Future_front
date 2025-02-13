import { Tabs } from "expo-router";
import { Image, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

// 画像をインポート
const homeIcon = require("../../assets/images/home.png");
const realDiaryIcon = require("../../assets/images/real_diary.png");
const futureDiaryIcon = require("../../assets/images/future_diary.png");
const logoutIcon = require("../../assets/images/logout.png");

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "#ccc" }, // ヘッダーの背景を灰色
        headerTintColor: "#000", // ヘッダーの文字色
        headerTitleAlign: "center", // ヘッダーのタイトルを中央に
        headerTitleStyle: { fontFamily: "sans-serif", fontSize: 18 }, // タイトルのスタイル

        tabBarIcon: ({ focused }) => {
          let icon;
          if (route.name === "home") {
            icon = homeIcon;
          } else if (route.name === "real_diary") {
            icon = realDiaryIcon;
          } else if (route.name === "future_diary") {
            icon = futureDiaryIcon;
          }

          return (
            <Image
              source={icon}
              style={{ width: 24, height: 24, tintColor: focused ? "blue" : "gray" }}
            />
          );
        },

        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",

        headerRight: () => (
          <TouchableOpacity
            onPress={() => router.push("/login")}
            style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}
          >
            <Image source={logoutIcon} style={{ width: 24, height: 24, marginRight: 5 }} />
            <Text style={{ fontSize: 16, color: "#000" }}>ログアウト</Text>
          </TouchableOpacity>
        ),
      })}
    >
      <Tabs.Screen name="home" options={{ title: "ホーム" }} />
      <Tabs.Screen name="real_diary" options={{ title: "リアル日記" }} />
      <Tabs.Screen name="future_diary" options={{ title: "未来日記" }} />
      <Tabs.Screen name="explore" options={{ href: null }} />

    </Tabs>
  );
}

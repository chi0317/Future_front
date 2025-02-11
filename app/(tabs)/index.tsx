import React, { useEffect } from "react";
import { View, Text, Animated, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const titleOpacity = new Animated.Value(0);
  const tapOpacity = new Animated.Value(0);
  const router = useRouter(); // 画面遷移用

  useEffect(() => {
    Animated.timing(titleOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(tapOpacity, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }).start();
      }, 1000);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, { opacity: titleOpacity }]}>
        Future Diary
      </Animated.Text>
      <TouchableOpacity onPress={() => router.push("/login")}>
        <Animated.Text style={[styles.tapText, { opacity: tapOpacity }]}>
          Tap to Start
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // 背景を白に
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000", // 文字を黒に
    fontFamily: "Yomogi", // 手書き風フォント（Google Fonts）
  },
  tapText: {
    fontSize: 20,
    color: "#000", // 文字を黒に
    marginTop: 20,
  },
});

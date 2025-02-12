import React, { useEffect, useRef } from "react";
import { View, Text, Animated, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const tapOpacity = useRef(new Animated.Value(0)).current;
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
    <Pressable style={styles.container} onPress={() => router.push("/login")}>
      <Animated.Text style={[styles.title, { opacity: titleOpacity }]}>
        Future Diary
      </Animated.Text>
      <Animated.Text style={[styles.tapText, { opacity: tapOpacity }]}>
        Tap to Start
      </Animated.Text>
    </Pressable>
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

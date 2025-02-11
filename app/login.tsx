import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import * as Google from "expo-auth-session/providers/google";

export default function LoginScreen() {
  const router = useRouter();

  // ここでは認証処理はおこないません
  const handleLoginPress = () => {
    // ログインボタンを押したときに次の画面へ遷移
    router.push("/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ログイン</Text>
      {/* Googleでログインボタン */}
      <Button title="Googleでログイン" onPress={handleLoginPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

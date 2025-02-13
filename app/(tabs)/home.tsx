import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Calendar } from "react-native-calendars";

export default function HomeScreen() {
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
  const [selectedDate, setSelectedDate] = useState(today);

  // 日付を押したときの処理
  const handleDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString); // 選択した日付を更新
    router.push({
      pathname: "/real_diary",
      params: { date: day.dateString },
    });
  };

  useEffect(() => {
    // markedDates を選択した日付だけに適用（前の選択をクリア）
  }, [selectedDate]); // selectedDateが更新されるたびに再実行

  // markedDates の設定
  const markedDates = {
    [selectedDate]: { selected: true, selectedColor: "blue", selectedTextColor: "white" }, // 選択日を青色に
    [today]: selectedDate !== today ? { selected: true, selectedColor: "red", selectedTextColor: "white" } : {}, // 今日の日付を赤色に
  };

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={markedDates}
        onDayPress={handleDayPress}
        theme={{
          todayTextColor: "red",
          selectedDayBackgroundColor: "blue",
          selectedDayTextColor: "white",
        }}
      />
      <View style={styles.diaryContainer}>
        <Text style={styles.diaryTitle}>未来日記</Text>
        <Text style={styles.diaryText}>バックエンドから取得した1日分の未来日記</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  diaryContainer: { marginTop: 20, padding: 15, backgroundColor: "#f0f0f0", borderRadius: 10 },
  diaryTitle: { fontSize: 18, fontWeight: "bold" },
  diaryText: { fontSize: 16, marginTop: 5 },
});

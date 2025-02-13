import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function RealDiaryScreen() {
    const { date } = useLocalSearchParams(); // どの日付から遷移したかを取得
    const [weekOffset, setWeekOffset] = useState(0);

  // 仮のデータ（本番ではバックエンドから取得）
    const diaryEntries = [
    { id: "1", date: "2025-02-01", text: "日記エントリー1" },
    { id: "2", date: "2025-02-02", text: "日記エントリー2" },
    { id: "3", date: "2025-02-03", text: "日記エントリー3" },
    { id: "4", date: "2025-02-04", text: "日記エントリー4" },
    { id: "5", date: "2025-02-05", text: "日記エントリー5" },
    { id: "6", date: "2025-02-06", text: "日記エントリー6" },
    { id: "7", date: "2025-02-07", text: "日記エントリー7" },
    ];

    return (
    <View style={styles.container}>
        <Text style={styles.title}>{date} のリアル日記</Text>

        <ScrollView style={styles.scrollView}>
        {diaryEntries.map((entry) => (
            <View key={entry.id} style={styles.diaryEntry}>
            <Text style={styles.diaryDate}>{entry.date}</Text>
            <Text style={styles.diaryText}>{entry.text}</Text>
            </View>
        ))}
        </ScrollView>

      {/* 前の1週間・次の1週間のボタン */}
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setWeekOffset(weekOffset - 1)} style={styles.arrowButton}>
            <Text style={styles.arrowText}>← 前の1週間</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setWeekOffset(weekOffset + 1)} style={styles.arrowButton}>
            <Text style={styles.arrowText}>次の1週間 →</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
    scrollView: { flex: 1 },
    diaryEntry: { marginBottom: 15, padding: 10, backgroundColor: "#f0f0f0", borderRadius: 10 },
    diaryDate: { fontSize: 16, fontWeight: "bold" },
    diaryText: { fontSize: 14 },
    buttonContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
    arrowButton: { padding: 10, backgroundColor: "#ddd", borderRadius: 5 },
    arrowText: { fontSize: 16 },
});

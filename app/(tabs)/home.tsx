import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Calendar } from "react-native-calendars";
import { useRouter } from "expo-router";

export default function HomeScreen() {
    const [diaryEntries, setDiaryEntries] = useState<{ id: string; date: string; text: string }[]>([]);
    const router = useRouter();

    useEffect(() => {
    // バックエンドから未来日記データを取得する（仮のデータを使用）
    setDiaryEntries([
        { id: "1", date: "2025-02-12", text: "未来日記のエントリー1" },
    ]);
    }, []);

    return (
    <View style={styles.container}>
        <Calendar
        // 今日の日付をマーク
        markedDates={{
            "2025-02-12": { selected: true, marked: true, selectedColor: "blue" },
        }}
        />
        <FlatList
        data={diaryEntries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View style={styles.diaryItem}>
                <Text style={styles.diaryDate}>{item.date}</Text>
                <Text style={styles.diaryText}>{item.text}</Text>
            </View>
        )}
        />
    </View>
    );
}

// スタイル
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff",
    },
    diaryItem: {
        padding: 10,
        marginVertical: 8,
        backgroundColor: "#f0f0f0",
        borderRadius: 5,
    },
    diaryDate: {
        fontSize: 14,
        fontWeight: "bold",
    },
    diaryText: {
        fontSize: 16,
    },
});

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

export default function App() {
    const titleOpacity = new Animated.Value(0);
    const tapOpacity = new Animated.Value(0);

    useEffect(() => {
    // タイトルが浮かび上がるアニメーション
    Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
    }).start(() => {
      // "Tap to Screen"の文字が浮かび上がる
        Animated.timing(tapOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
        }).start();
    });
    }, []);

    return (
    <View style={styles.container}>
        <Animated.Text style={[styles.title, { opacity: titleOpacity }]}>
        My App Title
        </Animated.Text>
        <Animated.Text style={[styles.tapText, { opacity: tapOpacity }]}>
        Tap to Screen
        </Animated.Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white'
    },
    tapText: {
    fontSize: 20,
    color: 'white',
    marginTop: 20
    }
});

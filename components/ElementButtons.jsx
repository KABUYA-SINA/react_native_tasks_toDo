import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

export default function ElementButtons({ children, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#007AFF",
        borderRadius: 14,
        marginTop: 40

    },
    title: {
        color: "white",
        margin: 17,
        fontSize: 17,
        fontWeight: "600"
    }
})
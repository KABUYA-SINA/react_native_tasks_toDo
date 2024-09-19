import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'

import { Ionicons } from '@expo/vector-icons';

export default function ToDoCards({title, description, handleDelete, checked, handleUpdate}) {
    
    <View>
        <TouchableOpacity onPress={handleUpdate} style={styles.checkbox}>
            {checked && <Ionicons name="checkmark"  size={32} color="black"/>}
        </TouchableOpacity>
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description === "" ? "No description added" : description}</Text>
        </View>
        <TouchableOpacity  onPress={handleDelete}>
            <Text style={styles.delete}>
                Delete
            </Text>
        </TouchableOpacity>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomColor: "rga(60, 60, 67, 06)",
        borderBottomWidth: 1,
        alignItems: "center",
        backgroundColor: "#007AFF",
        borderRadius: 14,
        width: "100%",

    },
    title: {
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 4
    },
    checkbox: {
        width: 40,
        height: 40,
        marginRight: 12,
        borderWidth: 1,
        borderColor: "rga(60, 60, 67, 06)",
        borderRadius: 4,
        paddingBottom:  10,
        marginBottom: 16,
        justifyContent:  "center",
        alignItems: "center"


    },
    description: {
        color: "rga(60, 60, 67, 06)",
        marginBottom: 7,
        fontSize: 15,
    },
    delete:{
        color: "rgba(0, 122, 255, 1)",
        fontSize: 15,
        fontWeight: "600"
    }
})
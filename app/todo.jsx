import { View, Text, StyleSheet } from 'react-native';
import Form from "../components/Form";

export default function ToDoCreate() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task To-Do</Text>
      <Form  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 45,
  }})

import { Text, ScrollView, StyleSheet, View, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import {updateStatus, removeTodo} from "../redux/todo"
import ElementButtons from "@/components/ElementButtons"


export default function Index({ navigation }) {

  const todoList = useSelector(state => state.todo.list)
  const dispatch = useDispatch()

  const handleNavigationOnPress = () => {
    navigation.navigate("todo")
  }

  const handleRemove = (id) => {
    // Dispatch the action with the ID
    if (id) {
        dispatch(removeTodo( id )); // Dispatching with the ID
    } else {
        console.error("Invalid ID for todo removal");
    }
  }

  const handleToggleStatus = (id, currentStatus) => {
    // Dispatch the updateStatus action with the new status
    dispatch(updateStatus({ id, completed: !currentStatus }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>To Do</Text>
      {
        todoList.map((todo, index) => {
          return (
            <View key={index} style={styles.containerCards}>
              <Pressable onPress={() => handleToggleStatus(todo.id, todo.checked)} style={styles.checkbox}>
                  {todo.checked && <Ionicons name="checkmark"  size={32} color="black" selectable={true}/>}
              </Pressable>
              <View>
                  <Text style={styles.titleCards}>{todo.name}</Text>
                  <Text style={styles.description}>{todo.description === "" ? "No description added" : todo.description}</Text>
                  <Pressable onPress={() => handleRemove(todo)}>
                    <Text style={styles.delete} selectable={true}>
                        Delete
                    </Text>
                  </Pressable>
              </View>
            </View>
          )
        })
      }
      <ElementButtons onPress={handleNavigationOnPress} selectable={true}>Add to do</ElementButtons>
    </ScrollView>
  );
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
    marginBottom: 45
  },
  containerCards: {
    flexDirection: "row",
    borderBottomColor: "rgba(211,211,211,1)",
    borderBottomWidth: 1,
    alignItems: "flex-start",
    gap: 10,
    width: "70%",
    padding: 20
  },
  titleCards: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 4
  },
  checkbox: {
      width: 40,
      height: 40,
      borderWidth: 1,
      borderColor: "rga(60, 60, 67, 06)",
      borderRadius: 4,
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

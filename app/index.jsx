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
              <View style={styles.parent}>
                <Text style={styles.titleCards}>{todo.name}</Text>
                <Text style={styles.description}>
                    {todo.description ? todo.description : "No description added"}
                </Text>
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
      <ElementButtons onPress={handleNavigationOnPress} >Add to do</ElementButtons>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  containerCards: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  checkbox: {
    marginRight: 15,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "rga(60, 60, 67, 06)",
    borderRadius: 4,
    justifyContent:  "center",
    alignItems: "center"
  },
  titleCards: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: 'grey',
  },
  delete: {
    color: 'red',
    marginTop: 5,
  },
  parent: {
    width: "85%"
  }
});
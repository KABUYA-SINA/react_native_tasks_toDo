import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextInput,  View, StyleSheet } from "react-native";
import ElementButtons from "./ElementButtons";
import { addTodo } from "../redux/todo";

export default function Form() {

    const [todo, setTodo] = useState("")
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random() * 888888) + 100000,
            name: todo,
            description: description,
            checked: false
        }
        dispatch(addTodo(newTodo))
        setTodo('')
        setDescription('')
    }

    return (
        <>
            <View  style={styles.container}>

                <TextInput
                    style={styles.task}
                    placeholder="Name"
                    value={todo}
                    onChangeText={newText => setTodo(newText)}
                    placeholderTextColor="grey"
                     maxLength={15}
                />
                <TextInput
                    style={styles.desc}
                    placeholder="Desciption (optional)"
                    value={description}
                    onChangeText={newText => setDescription(newText)}
                    rows={10}
                    multiline={true}
                    maxLength={70}
                    editable
                    placeholderTextColor="grey"
                />
            </View>
            <View>
                <ElementButtons onPress={handleSubmit}> Add-To-Do </ElementButtons>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#F7F7F7",
        width: "90%"
    },
    task: {
        width: '100%',
        padding: 15,
        borderColor: "#007BFF",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        fontSize: 16,
        marginBottom: 10,
    },
    desc: {
        width: '100%',
        justifyContent: "flex-start",
        borderColor: "#007BFF",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        padding: 10,
        fontSize: 16,
        marginBottom: 10,
    }
})
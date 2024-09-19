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
                    onChange={(e) => setTodo(e.target.value)}
                    placeholderTextColor="grey"
                />
                <TextInput
                    style={styles.desc}
                    placeholder="Desciption (optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    numberOfLines={15}
                    multiline={true}
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
        gap: 5,
        width: "70%"
    },
    task: {
        padding: 5,
        borderColor: "rgba(211,211,211,1)",
        borderWidth: 1
    },
    desc: {
        height: 150,
        justifyContent: "flex-start",
        borderColor: "rgba(211,211,211,1)",
        borderWidth: 1,
        padding: 5
    }
})
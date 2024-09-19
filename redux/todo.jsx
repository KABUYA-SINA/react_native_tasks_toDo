import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({

    name: 'todo',
    initialState: { list: [] },
    reducers: {
        addTodo(state, action) {
            if(action.payload.name === "") {
                alert('name are required')
            }else{
                state.list.push(action.payload)
            }

        },
        removeTodo(state, action) {
            const { id } = action.payload; // Destructure id from action payload

            if (!id) {
                console.error('Todo id is required to remove a todo.'); // Error logging
                return; // Exit if no id is provided
            }

            const initialLength = state.list.length; // Save initial length
            state.list = state.list.filter(todo => todo.id !== id); // Filter the list
            const newLength = state.list.length; // Check if length has changed

            if (newLength === initialLength) {
                console.warn(`No todo found with id: ${id}`); // Warning if nothing was removed
            }
        },
        updateStatus: (state, action) => {
            const { id, completed } = action.payload; // Extracting both id and status
            const todo = state.list.find(todo => todo.id === id);

            if (todo) {
                todo.checked = completed; // Updating the completed status
            } else {
                console.error(`Todo not found with ID: ${id}`); // Logging error if not found
            }
        }
    }
})

export const { addTodo, removeTodo, updateStatus } = todoSlice.actions
export default  todoSlice.reducer;

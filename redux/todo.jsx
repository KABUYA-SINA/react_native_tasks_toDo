import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: { list: [] },
    reducers: {
        addTodo(state, action) {
            const { name, description } = action.payload;

            if (!name || name.trim() === "") {
                alert('Name is required!')
                return { ...state, error: 'Name is required!' }; // Update state with an error
            } else {
                state.list.push({
                    ...action.payload,
                });
                state.error = null;
            }
        },
        removeTodo(state, action) {
            const { id } = action.payload; // Destructure id from action payload

            if (!id) {
                console.error('Todo id is required to remove a todo.');
                return; // Exit if no id is provided
            }

            const initialLength = state.list.length;
            state.list = state.list.filter(todo => todo.id !== id);
            const newLength = state.list.length;

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

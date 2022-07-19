import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { todoSliceInitialState, todosType } from "../types/todo";

const initialState: todoSliceInitialState = {
  todos: [
    {
      id: 1,
      createdAt: new Date().toLocaleDateString(),
      title: "Do Math Homework",
    },
    {
      id: 2,
      createdAt: new Date().toLocaleDateString(),
      title: "Tack out dogs",
    },
    {
      id: 3,
      createdAt: new Date().toLocaleDateString(),
      title: "Business meeting with CEO",
    },
    { id: 4, createdAt: new Date().toLocaleDateString(), title: "Buy Grocery" },
  ],
  enteredInput: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    inputChange: (state, { payload }: PayloadAction<string>) => {
      state.enteredInput = payload;
    },
    clearInput: (state) => {
      state.enteredInput = "";
    },
    addTodo: (state, { payload }: PayloadAction<todosType>) => {
      state.todos.push(payload);
    },
    deleteTodo: (state, { payload }: PayloadAction<number>) => {
      const targetIndex = state.todos.findIndex((todo) => todo.id === payload);
      state.todos.splice(targetIndex, 1);
    },
    editTodo: (
      state,
      { payload }: PayloadAction<{ id: number; title: string }>
    ) => {
      console.log(payload);
      const targetIndex = state.todos.findIndex(
        (todo) => todo.id === payload.id
      );
    },
  },
});

export default todoSlice.reducer;
export const { inputChange, clearInput, addTodo, deleteTodo, editTodo } =
  todoSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../reducers/modalSlice";
import todoSlice from "../reducers/todoSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    todo: todoSlice,
  },
});

export default store;

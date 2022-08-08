import { RootState } from "./../types/store";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import modalSlice from "../reducers/modalSlice";
import todoSlice from "../reducers/todoSlice";

// const store = configureStore({
//   reducer: {
//     modal: modalSlice,
//     todo: todoSlice,
//   },
// });

export const rootReducer = combineReducers({
  modal: modalSlice,
  todo: todoSlice,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// export default store;

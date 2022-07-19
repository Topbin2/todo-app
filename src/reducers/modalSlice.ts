import { modalSliceInitialState } from "./../types/modal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: modalSliceInitialState = {
  isModalOpen: false,
  isEditModalOpen: false,
  editTodoId: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    openEditModal: (state, { payload }: PayloadAction<number>) => {
      state.editTodoId = payload;
      state.isEditModalOpen = true;
    },
    closeEditModal: (state) => {
      state.isEditModalOpen = false;
      state.editTodoId = null;
    },
  },
});

export const { openModal, closeModal, openEditModal, closeEditModal } =
  modalSlice.actions;
export default modalSlice.reducer;

import { ChangeEvent, useCallback } from "react";
import { closeEditModal } from "../../reducers/modalSlice";
import { clearInput, editTodo, inputChange } from "../../reducers/todoSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Backdrop } from "./Backdrop";

export const EditModal = () => {
  const dispatch = useAppDispatch();
  const editTodoId = useAppSelector((state) => state.modal.editTodoId);
  const inputValue = useAppSelector((state) => state.todo.enteredInput);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(inputChange(e.target.value));
    },
    [dispatch]
  );

  const handleEdit = () => {
    console.log(editTodoId, inputValue);
    // dispatch(editTodo({ id: editTodoId, title: inputValue }));
    dispatch(clearInput());
    dispatch(closeEditModal());
  };

  return (
    <>
      <div className="modal">
        <h2>Edit task</h2>
        <input type="text" onChange={handleChange} />
        <button onClick={handleEdit}>EDIT</button>
      </div>
      <Backdrop />
    </>
  );
};

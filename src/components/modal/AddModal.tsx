import { Backdrop } from "./Backdrop";
import { TiLocationArrowOutline } from "react-icons/ti";
import { BsClockHistory } from "react-icons/bs";
import { AiOutlineTag } from "react-icons/ai";
import { BsFlag } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { closeModal } from "../../reducers/modalSlice";
import { ChangeEvent, useCallback } from "react";
import { addTodo, clearInput, inputChange } from "../../reducers/todoSlice";

export const Modal = () => {
  const dispatch = useAppDispatch();
  const { enteredInput } = useAppSelector((state) => state.todo);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(inputChange(e.target.value));
    },
    [dispatch]
  );

  const handleClick = useCallback(() => {
    dispatch(
      addTodo({
        id: Math.random(),
        createdAt: new Date().toLocaleDateString(),
        title: enteredInput,
      })
    );
    dispatch(clearInput());
    dispatch(closeModal());
  }, [dispatch, enteredInput]);

  return (
    <>
      <div className="modal">
        <h2>Add Task</h2>
        <input type="text" onChange={handleChange} />
        <p>Description</p>
        <div className="iconContainer">
          <BsClockHistory />
          <AiOutlineTag />
          <BsFlag />
          <TiLocationArrowOutline onClick={handleClick} />
        </div>
      </div>
      <Backdrop />
    </>
  );
};

import { useCallback } from "react";
import { Wrapper } from "../assets/wrapper/ToDo";
import { useAppDispatch } from "../hooks/reduxHooks";
import { deleteTodo } from "../reducers/todoSlice";
import { openEditModal } from "../reducers/modalSlice";

interface IProps {
  id: number;
  title: string;
  createdAt: string;
}

export const ToDo: React.FC<IProps> = ({ id, title, createdAt }) => {
  const dispatch = useAppDispatch();

  const handleDeleteTodo = useCallback(() => {
    dispatch(deleteTodo(id));
  }, [dispatch, id]);

  const handleEditTodo = useCallback(() => {
    dispatch(openEditModal(id));
  }, [dispatch, id]);

  return (
    <Wrapper>
      <h3>{title}</h3>
      <div className="utilsContainer">
        <p>{createdAt}</p>
        <div>
          <button onClick={handleDeleteTodo}>DELETE</button>
          <button onClick={handleEditTodo}>EDIT</button>
        </div>
      </div>
    </Wrapper>
  );
};

import { Wrapper } from "../assets/wrapper/EmptyTodo";
import main from '../assets/images/main.svg';

export const EmptyTodo = () => {
  return (
    <Wrapper>
      <div className="imgContainer">
        <img src={main} alt="task" />
      </div>
      <div className="textContainer">
        <h2>What do you want to do today?</h2>
        <h3>Tap + to add your tasks</h3>
      </div>
    </Wrapper>
  );
};

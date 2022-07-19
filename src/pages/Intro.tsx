import { Link } from "react-router-dom";
import intro from "../assets/images/intro.svg";
import { Wrapper } from "../assets/wrapper/Intro";

export const Intro = () => {
  return (
    <Wrapper>
      <img src={intro} alt="intro" />

      <div>
        <h3>Orgonaize your tasks</h3>
        <p>
          You can organize your daily tasks by
          <br />
          adding your tasks into separate categories
        </p>
      </div>
      <Link to="/login">
        <button>GET STARTED</button>
      </Link>
    </Wrapper>
  );
};

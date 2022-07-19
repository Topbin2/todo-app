import { IoIosArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { Wrapper } from "../assets/wrapper/Login";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <IoIosArrowBack onClick={() => navigate(-1)} />
      <h2>Login</h2>
      <form>
        <label htmlFor="userName">Username</label>
        <input type="text" id="userName" placeholder="Enter your Username" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your Password"
        />
        <button onClick={() => navigate("/")}>Login</button>
      </form>
      <div className="line">or</div>
      <button className="oauthBtn">
        <FcGoogle />
        Login with Google
      </button>
      <button className="oauthBtn">
        <AiFillApple />
        Login with Apple
      </button>
      <footer>
        <span>Don't have an account?</span> <strong>Register</strong>
      </footer>
    </Wrapper>
  );
};

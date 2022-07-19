import { BiHomeAlt } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { IoPersonOutline, IoCalendarNumberOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Wrapper } from "../assets/wrapper/Footer";
import { openModal } from "../reducers/modalSlice";
import { useAppDispatch } from "../hooks/reduxHooks";

export const Footer = () => {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <div className="tab">
        <Link to="/">
          <BiHomeAlt />
        </Link>
        <p>Home</p>
      </div>
      <div className="tab">
        <Link to="/calendar">
          <IoCalendarNumberOutline />
        </Link>
        <p>Calendar</p>
      </div>
      <div className="tab" onClick={() => dispatch(openModal())}>
        <button className="addBtn">+</button>
      </div>
      <div className="tab">
        <Link to="/focus">
          <BsClock />
        </Link>
        <p>Focus</p>
      </div>
      <div className="tab">
        <Link to="/profile">
          <IoPersonOutline />
        </Link>
        <p>Profile</p>
      </div>
    </Wrapper>
  );
};

export default Footer;

import { GiHamburgerMenu } from "react-icons/gi";
import { Wrapper } from "../assets/wrapper/Header";

export const Header = () => {
  return (
    <Wrapper>
      <GiHamburgerMenu />
      <p>Home</p>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="person" />
    </Wrapper>
  );
};

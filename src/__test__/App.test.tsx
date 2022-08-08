import "@testing-library/jest-dom";
import App from "../App";
import { render, screen } from "./test-utils";

test("Home 화면이 렌더링 된다.", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /home11/i })).toBeInTheDocument();
});

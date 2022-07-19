import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Intro,
  Login,
  Home,
  SharedLayout,
  Calendar,
  Focus,
  Profile,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/focus" element={<Focus />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

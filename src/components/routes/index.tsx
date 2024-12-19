import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from "@/constants/path";
import Login from "@/page/auth/login";
import SignUp from "@/page/auth/signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.signup} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

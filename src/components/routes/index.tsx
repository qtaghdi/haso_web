import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from "@/constants/path";
import Login from "@/hooks/auth/google";
import SignUp from "@/page/auth/signup";
import Main from "@/page/main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.signup} element={<SignUp />} />
        <Route path={paths.main} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {paths} from 'src/constants/path'
import Login from "src/hooks/auth/google";
import SignUp from "src/page/auth/signup";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={paths.login} element={<Login/>}/>
                <Route path={paths.signup} element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;

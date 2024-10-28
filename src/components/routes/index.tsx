import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Main from "@/page/main";
import Login from "@/page/auth/login";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;
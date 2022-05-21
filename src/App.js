import { BrowserRouter, Routes, Route } from "react-router-dom";

import TestPage from "./components/TestPage.js";
import UserContext from "./contexts/UserContext.js";

import GlobalStyle from "./assets/globalStyles";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Menu from "./components/Menu.js";

export default function App() {
    

    function Error(e) {
        console.log(`${e.response.status} - ${e.response.statusText}`);
        alert("Um erro aconteceu, tente novamente");
    }

    return (
        <UserContext.Provider value={Error}>
            <GlobalStyle />
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/test" element={<TestPage />}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
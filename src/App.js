import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "./components/TestPage.js";
import GlobalStyle from "./assets/globalStyles";

import Login from "./components/Login.js";

export default function App() {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/test" element={<TestPage />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

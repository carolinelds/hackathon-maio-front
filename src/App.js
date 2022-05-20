import "./assets/css/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "./components/TestPage.js";
import GlobalStyle from "./assets/css/globalStyles";

export default function App() {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/test" element={<TestPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

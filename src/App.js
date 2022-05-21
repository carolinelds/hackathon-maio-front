import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "./contexts/UserContext.js";

import TestPage from "./components/TestPage.js";
import GlobalStyle from "./assets/globalStyles";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Menu from "./components/Menu.js";
import Course from "./components/Course.js";
import SummaryPage from "./components/SummaryPage.js";
import ExamPage from "./components/ExamPage.js";

export default function App() {
    const [course, setCourse] = useState({});

    function Error(e) {
        console.log(`${e.response.status} - ${e.response.statusText}`);
        alert("Um erro aconteceu, tente novamente");
    }

    return (
        <UserContext.Provider value={{ Error, course, setCourse }}>
            <GlobalStyle />
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/courses/:idCourse/summary" element={<SummaryPage />}></Route>
                    <Route path="/courses/:idCourse/exam" element={<ExamPage />}></Route>
                    <Route path="/" element={<Login />} />
                    <Route path="/test" element={<TestPage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/course/:idCourse" element={<Course />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

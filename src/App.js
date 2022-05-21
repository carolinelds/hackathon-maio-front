import { BrowserRouter, Routes, Route } from "react-router-dom";

import TestPage from "./components/TestPage.js";
import HomePage from './components/HomePage.js'
import UserContext from "./contexts/UserContext.js";

import GlobalStyle from "./assets/globalStyles";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Menu from "./components/Menu.js";
import SummaryPage from "./components/SummaryPage.js";
import ResultPage from './components/ResultPage.js';
import ExamPage from "./components/ExamPage.js";


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
                    <Route path='/home' element={<HomePage />}></Route>
                    <Route path="/courses/:idCourse/summary" element={<SummaryPage />}></Route>
                    <Route path="/courses/:idCourse/exam" element={<ExamPage />}></Route>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/test" element={<TestPage />}/>
                    <Route path='/courses/:idCourse/result' element={<ResultPage />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
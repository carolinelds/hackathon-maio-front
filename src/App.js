import { BrowserRouter, Routes, Route } from "react-router-dom";

import TestPage from "./components/TestPage.js";
<<<<<<< HEAD
import HomePage from './components/HomePage.js'
=======
import UserContext from "./contexts/UserContext.js";

import GlobalStyle from "./assets/globalStyles";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Menu from "./components/Menu.js";
import SummaryPage from "./components/SummaryPage.js";
<<<<<<< HEAD
>>>>>>> 635a3bd811f0648c5b11adb7628e68c5aff8f342
=======
import ExamPage from "./components/ExamPage.js";
>>>>>>> b062403b46903ed2f273fed413b455c0a131d752

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
<<<<<<< HEAD
                    <Route path ='/home' element={<HomePage />}></Route>
                    <Route path="/test" element={<TestPage />}></Route>
=======
                    <Route path="/courses/:idCourse/summary" element={<SummaryPage />}></Route>
                    <Route path="/courses/:idCourse/exam" element={<ExamPage />}></Route>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/test" element={<TestPage />}/>
>>>>>>> 635a3bd811f0648c5b11adb7628e68c5aff8f342
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
import "./assets/css/reset.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestPage from "./components/TestPage.js";
import HomePage from './components/HomePage.js'

export default function App() {

    return (
        <Div>
            <BrowserRouter>
                <Routes>
                    <Route path ='/home' element={<HomePage />}></Route>
                    <Route path="/test" element={<TestPage />}></Route>
                </Routes>
            </BrowserRouter>
        </Div >
    );
}

const Div = styled.div`
    /*background-color: ?;*/
    display: flex;
    justify-content: center;
    align-items: center;
    
    * {
        /*font-family: ?;*/
        box-sizing: border-box;
    }
`;
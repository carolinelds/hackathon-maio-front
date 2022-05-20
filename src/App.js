import "./assets/css/reset.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TestPage from "./components/TestPage.js";
import UserContext from "./contexts/UserContext.js";
import Menu from "./components/Menu.js";

export default function App() {
    

    function Error(e) {
        console.log(`${e.response.status} - ${e.response.statusText}`);
        alert("Um erro aconteceu, tente novamente");
    }

    return (
        <UserContext.Provider value={Error}>
            <Div>
                <BrowserRouter>
                    <Menu />
                    <Routes>
                        <Route path="/test" element={<TestPage />}></Route>
                    </Routes>
                </BrowserRouter>
            </Div >
        </UserContext.Provider>
    );
}

const Div = styled.div`
    background-color: #d5e0d8;
    display: flex;
    justify-content: center;
    align-items: center;
    
    * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }
`;
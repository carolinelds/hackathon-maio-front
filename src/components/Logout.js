import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";

export default function Logout() {
    const { Error } = useContext(UserContext);
    const navigate = useNavigate();
    const [hidden, setHidden] = useState(true);

    function logout({ setSidebar }) {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
            },
        };
        const promise = axios.delete("http://localhost:5000/logout", config);
        promise.then(() => {
            localStorage.clear();
            navigate("/");
            setHidden(false);
            setSidebar(false);
        });
        promise.catch((err) => {
            Error(err);
        });
    }

    return (
        <Article hidden={hidden} content={loading}>
            {loading ? (
                <Loading color={"white"} />
            ) : (
                <>
                    <h4>Você tem certeza ?</h4>
                    <div className="Buttons">
                        <button onClick={() => logout()}> Sim </button>
                        <button
                            onClick={() => {
                                setHidden(false);
                                setHiddenLogout(false);
                            }}
                        >
                            {" "}
                            Não{" "}
                        </button>
                    </div>
                </>
            )}
        </Article>
    );
}

const Article = styled.article`
    display: ${(props) => (!props.hidden ? "none" : "flex")};
    flex-direction: column;
    align-items: center;
    justify-content: ${(props) =>
        props.content ? "center" : "space-around"};
    height: 45vh;
    width: 30vw;
    position: absolute;
    top: 25%;
    left: 250%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000000;
    background-color: #F5F5F5;
    z-index: 3;
    
    h2 {
        
        font-size: 100%;
        line-height: 50px;
    }
    
    h4 {
        font-weight: 700;
        font-size: 150%;
        text-align: center;
        margin: 8% 0;
        margin-top: 10% }
    .pic {
        width: 40%;
        margin: -8% auto;
        object-fit: cover;
    }
    .Buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
    }
    button {
        background-color: #FFF;
        border: none;
        border-radius: 30px;
        margin: 10% 0;
        padding: 3%;
        width: 30%;
        font-size: 100%;
        cursor: pointer;
        box-shadow: 0px 0px 3px #000000;
        font-weight: 700;
    }
    @media (max-width: 700px) {
        width: 60vw;
        height: 40vh;
        left: 60%;
        img{
            width: 30%;
        }
    }
    @media (max-width: 500px) {
        left : 40%;
    }
    
    @media (min-width: 700px) {
        left : 160%
    }
    
    @media (min-width: 1200px) {
        height: 45vh;
        width: 30vw;
        position: absolute;
        top: 25%;
        left: 230%;}
`;

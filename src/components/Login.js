import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Loading from "./Loading";

export default function Login() {
    // eslint-disable-next-line
    const [login, setLogin] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    function requestAcess(loginObj) {
        setLoading(true);
        const promise = axios.post(
            "https://hackathon-maio.herokuapp.com/login",
            loginObj
        );

        promise.then((res) => {
            const user = {
                name: res.data.name,
                courses: res.data.courses,
            }
            const token = res.data.token;

            localStorage.setItem("TOKEN", token);
            localStorage.setItem("USER", JSON.stringify(user));
            navigate("/");
            setLoading(false);
        });
        promise.catch((err) => {
            Error(err);
            navigate("/");
            setLoading(false);
        });
    }

    function sendInputData(e) {
        e.preventDefault();
        requestAcess(login);
    }

    return (
        <MainStyle>
            {loading ? (
                <Loading color={"orange"}/>
            ) : (
                <>
                    <h1>Courson</h1>
                    <form onSubmit={(e) => sendInputData(e)}>
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={login.email}
                            disabled={loading}
                            onChange={(e) =>
                                setLogin({ ...login, email: e.target.value })
                            }
                            required
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={login.password}
                            disabled={loading}
                            onChange={(e) =>
                                setLogin({ ...login, password: e.target.value })
                            }
                            required
                        />
                        <button type="submit">
                            Entrar
                        </button>
                    </form>

                    <Link to="/signup">Primeira Vez? Cadastre-se</Link>
                </>
            )}
        </MainStyle>
    );
}

const MainStyle = styled.main`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-family: 'Roboto', cursive;
        font-weight: bold;
        color: #49fc8b;
        font-size: 400%;
        line-height: 50px;
        margin: -5px 0px 24px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 10px;
    }
    button {
        background-color: var(--cyan);
        border: none;
        width: 31%;
        height: 54px;
        color: #ffffff;
        font-weight: 700;
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
    }
    button:hover {
        cursor: pointer;
    }
    input {
        width: 60%;
        max-width: 470px;
        height: 58px;
        padding: 18px 15px;
        border-radius: 30px;
        border: none;
        background-color: var(--light-gray);
        color: #000000;
        font-size: 12 px;
        margin-bottom: 13px;
    }
    a {
        color: #49fc8b;
        text-decoration: none;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
    }
`;
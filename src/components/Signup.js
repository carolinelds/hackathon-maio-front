import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {Rings} from "react-loader-spinner"

export default function SignUp() {
    const [loading, setLoading] = useState(false);
    const [registerUser, setregisterUser] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
    });
    const navigate = useNavigate();


    function register(registerUser) {
        setLoading(true);
        if (registerUser.password !== registerUser.confirm) {
            alert("Senhas diferentes!");
            setregisterUser({ ...registerUser, password: "", confirm: "" });
            return;
        }
        delete registerUser.confirm;
        const promise = axios.post("https://hackathon-maio.herokuapp.com/signup", registerUser);
        promise.then(() => {
            navigate("/");
        });
        promise.catch((err) => {
            if (err.response.status === 409) {
                alert("E-mail já cadastrado!");
                setLoading(false)
            }
            else {
                Error(err);
                setLoading(false)
            }
        });
    }

    function sendUser(e) {
        e.preventDefault();
        register(registerUser);
    }

    return (
        <MainStyle>
            {loading ? <Rings width={40} color="#02f75c" /> : 
            <>
            <h1>Courson</h1>
            <form
                onSubmit={(e) => {
                    sendUser(e);
                }}
            >
                <input
                    type="text"
                    placeholder="Nome"
                    value={registerUser.name}
                    onChange={(e) => setregisterUser({ ...registerUser, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={registerUser.email}
                    onChange={(e) =>
                        setregisterUser({ ...registerUser, email: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={registerUser.password}
                    onChange={(e) =>
                        setregisterUser({ ...registerUser, password: e.target.value })
                    }
                    required
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    value={registerUser.confirm}
                    onChange={(e) =>{
                        setregisterUser({ ...registerUser, confirm: e.target.value })
                    }
                }
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
            </>
}
        </MainStyle>
    );
}

const MainStyle = styled.main`
display: flex;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1 {
    font-weight: bold;
    color: var(--light-green);
    font-size: 32px;
    line-height: 50px;
    margin: -5px 0px 24px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
button {
    background-color: var(--green);
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
button:hover{
    cursor: pointer;
}

input{
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
    color: var(--light-green);
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
}
`;
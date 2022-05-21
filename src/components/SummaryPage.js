import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


export default function SummaryPage() {
    const { idCourse } = useParams();
    const [course, setCourse ] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://hackathon-maio.herokuapp.com/courses/${idCourse}`);
        //const promise = axios.get(`http://localhost:5000/courses/${idCourse}`);

        promise.then((res) => {
            setCourse(res.data);
        });
        promise.catch((err) => {
            Error(err);
        });
        // eslint-disable-next-line
    }, []);

    const navigate = useNavigate();
    function nextPage(){
        navigate(`/course/${idCourse}/exam`);
    }

    return (
        <Div>
            <h1>{course.title}: resumo</h1>
            <p>{course.summary}</p>
            <button onClick={nextPage}>
                <p>Fazer teste de conclusão</p>
                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </button>
        </Div>
    );
}

const Div = styled.div`
    padding: 70px 25px 20px 25px;
    height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 18px;
        line-height: 20px;
        font-weight: 500;
        color: #293845;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    > p {
        border-radius: 8px;
        padding: 20px;
        background-color: #aab3ac;
        line-height: 23px;
        font-weight: 400;
    }

    button {
        padding: 8px;
        background-color: #02cf2b;
        border: none;
        color: #ffffff;
        font-weight: 500;
        font-size: 16px;
        margin-top: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        opacity: 0.6;
    }
    
    button p {
        margin-right: 10px;
    }

    ion-icon {
        font-size: 24px;
    }

    button:hover {
        cursor: pointer;
        opacity: 1;
    }



    
`;
/* import { useEffect, useState } from 'react'; */
/* import { Link } from 'react-router-dom'; */
/* import axios from 'axios';*/
import styled from 'styled-components'; 

export default function ResultPage(){
/*     const [courses, setCourses] = useState("");

    useEffect(() => {
        const promise = axios.get(`https://hackathon-maio.herokuapp.com/courses/`);
        promise.then(response => setCourses(response.data));
        promise.catch((e) => console.log(e));
    }, []); */

    return /* (courses.length > 0) ? */ (
        <Result>
            <h1>Você passou !</h1>
            <img src="https://https://upload.wikimedia.org/wikipedia/commons/d/d3/Emoji_u1f60e.svg" />
            <p>Afinal, o que vale é tentar!</p>
        </Result>
    ) /* : (<p>Loading...</p>) ; */ /* configurar tela de loading */
}

const Result = styled.section`
    background-color: #d5e0d8;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: #aab3ac;

    }

    img {
        width: 50px;
        height: 50px;
    }

    p {
        color: #aab3ac;
    }
`
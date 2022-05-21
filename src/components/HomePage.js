import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';



export default function HomePage(){
    const [courses, setCourses] = useState("");

    useEffect(() => {
        const promise = axios.get(`http://localhost:5000/courses`);
        promise.then(response => setCourses(response.data));
        promise.catch((e) => console.log(e));
    }, []);

    return (courses.length > 0) ? (
        <Home>
            <div className='title'>Cursos</div>
            <section className='courses'>
                {
                    courses.map((course) => {
                        const {_id, title} = course
                        return (
                            <Link to={`/course/${title}`} key={_id} style={{ textDecoration: 'none' }}>
                            <div className="course">{title}</div>
                            </Link>
                        )
                    })
                }
            </section>
        </Home>
    ) : (<p>Loading...</p>) ; /* configurar tela de loading */
}

// configurar css
const Home = styled.main`
    & {
        background-color: #575757;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        overflow-y: scroll;
        padding-top: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Roboto', sans-serif;
    }
    .title {
        display: flex;
        align-items: center;
        color: #02cf2b;
        font-style: normal;
        font-weight: 700;
        font-size: 42px;
        line-height: 45px;
        letter-spacing: 0.01em;
        margin: 40px 0 40px 0;
    }
    .courses {
        display: flex;
        flex-direction: column;
        width: 100vw;
        align-items: center;
    }
    .course {
        display: flex;
        width: calc(100vw - 40px);
        height: 65px;
        background: #02cf2b;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px 0 15px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0.01em;
        color: #F5F5F5;
        margin-bottom: 20px;
    }
`
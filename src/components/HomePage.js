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
                            <Link to={`/course/${title}`} key={_id}>
                            <div>{title}</div>
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
        padding-top: 70px;
    }

    div {
        width: 300px;
        height: 65px;
        background: #FFFFFF;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        align-items: center;
        justify-content: space-between;
        padding: 0 22px 0 15px;
    }

    .title {

    }

    .courses {
        display: flex;
        margin: 0 0 25px 0;
    }

`
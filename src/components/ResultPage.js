/* import { useEffect, useState } from 'react'; */
/* import { Link } from 'react-router-dom'; */
/* import axios from 'axios';
import styled from 'styled-components'; */

export default function ResultPage(){
/*     const [courses, setCourses] = useState("");

    useEffect(() => {
        const promise = axios.get(`https://hackathon-maio.herokuapp.com/courses/`);
        promise.then(response => setCourses(response.data));
        promise.catch((e) => console.log(e));
    }, []); */

    return /* (courses.length > 0) ? */ (
        <>
            <div className='title'>Cursos</div>
            <section className='courses'>
 
            </section>
        </>
    ) /* : (<p>Loading...</p>) ; */ /* configurar tela de loading */
}
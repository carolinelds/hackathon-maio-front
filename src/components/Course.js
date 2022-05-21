import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

import UserContext from "./../contexts/UserContext";
import Questions from "./Questions";

export default function Course() {
    const { idCourse } = useParams();
    const { course, setCourse, Error } = useContext(UserContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`http://localhost:5000/courses/${idCourse}`);
        promise.then((res) => {
            setCourse(res.data);
        });
        promise.catch((err) => {
            Error(err);
        });
    }, []);
    
    function checkCourseExists() {
        for (const property in course) {
            return true;
        }
        return false;
    }

    return (
        checkCourseExists() ? (
            <>
                <h1>Curso {course.title}</h1>
                {course.sections.map((section, index) => {
                    return(
                        <Questions index={index} currentQuestion={currentQuestion} section={section} setCurrentQuestion={setCurrentQuestion} />
                    )
                })}
                {(currentQuestion === course.sections.length) ? (
                    <button onClick={()=>navigate("/courses/:idCourse/summary")}>Continuar</button>
                ): (
                    <></>
                )}
            </>
        ):(
            <h1>Nenhum Curso encontrado!</h1>
        ) 
    )
}

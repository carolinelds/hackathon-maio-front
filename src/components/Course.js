import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

import UserContext from "./../contexts/UserContext";
import Questions from "./Questions";

export default function Course() {
    const { idCourse } = useParams();
    const { course, setCourse, Error } = useContext(UserContext);
    const [currestQuestion, setCurrestQuestion] = useState(0);

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
                        <Questions index={index} currestQuestion={currestQuestion} section={section} setCurrestQuestion={setCurrestQuestion} />
                    )
                })}
            </>
        ):(
            <h1>Nenhum Curso encontrado!</h1>
        ) 
    )
}

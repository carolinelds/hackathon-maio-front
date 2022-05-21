import { useParams } from "react-router-dom";
import {useContext, useState, useEffect} from "react";
import axios from "axios";

import UserContext from "./../contexts/UserContext";

export default function Course(){
    const {idCourse} = useParams();
    const {course, setCourse, Error} = useContext(UserContext);

    useEffect(()=> {
        const promise = axios.get(`http://localhost:5000/courses/${idCourse}`);
        promise.then((res) => {
            setCourse(res.data);
        });
        promise.catch((err) => {
            Error(err);
        })

    }, [])
    console.log(course);
    return(
        <h1>Cursooo {idCourse}</h1>
    )
}
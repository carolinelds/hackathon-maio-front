import styled from "styled-components";
import { useState } from "react";


export default function ExamQuestion(props) {
    const { index, question, answer } = props;

    return (
        <Div>
            <p className="question-title">{index + 1}. {question}</p>
            {
                answer.map((a, index) => {
                    const { title } = a;
                    return (
                        <div key={index}>
                            <p className="answer-option">{title}</p>
                        </div>
                    )
                })
            }
        </Div>
    )
}

const Div = styled.div`
    background-color: #aab3ac;
    border-radius: 6px;
    padding: 18px;

    .question-title {
        margin-bottom: 20px;
    }

    .answer-option {
        margin-bottom: 10px;
    }

    .answer-container-marked {
        width: 100%;
        font-weight: 600;
    }
    
    .answer-container-not-marked {
        width: 100%;
    }

    .answer-option {
        padding: 10px;
        border-radius: 5px;
        background-color: #d5e0d8;
        font-size: 14px;
        opacity: 0.7;
    }

    .answer-option:hover {
        opacity: 1;
    }
`;
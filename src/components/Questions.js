import { useState, useContext } from "react";
import styled from "styled-components";
import Answer from "./Answer";

export default function Questions({
    index,
    currestQuestion,
    setCurrestQuestion,
    section,
}) {
    
    const answers = section.answer;

    return currestQuestion === index ? (
        <Section>
            <div className="video"></div>
            <h3>{section.question}</h3>
            {answers.map(answer => <Answer answer={answer} />)}
            <button onClick={() => setCurrestQuestion(currestQuestion + 1)}>
                Próxima questão
            </button>
        </Section>
    ) : (
        <></>
    );
}

const Section = styled.section``;

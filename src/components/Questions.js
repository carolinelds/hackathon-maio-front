import { useState, useContext } from "react";
import styled from "styled-components";
import Answer from "./Answer";

export default function Questions({
    index,
    currentQuestion,
    setCurrentQuestion,
    section,
}) {
    const [correct, setCorrect] = useState("");
    const answers = section.answer;

    return currentQuestion === index ? (
        <Section>
            <div className="video"></div>
            <h3>{section.question}</h3>
            {answers.map(answer => <Answer answer={answer} setCorrect={setCorrect} />)}
            <button onClick={() => setCurrentQuestion(currentQuestion + 1)} disabled={correct === ""}>
                Próxima questão
            </button>
        </Section>
    ) : (
        <></>
    );
}

const Section = styled.section``;

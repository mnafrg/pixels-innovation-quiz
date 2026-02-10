import { useState } from "react";
import questions from "../data/questions";
import Question from "./Question";
import Result from "./Result";

export default function Quiz() {
    const [currentQ, setCurrentQ] = useState(0);
    const [scores, setScores] = useState({
        design: 0,
        pr: 0,
        hr: 0,
        tech: 0
    });
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (optionScores) => {
        const updated = { ...scores };
        for (let key in optionScores) {
            updated[key] += optionScores[key];
        }
        setScores(updated);

        if (currentQ + 1 < questions.length) {
            setCurrentQ(currentQ + 1);
        } else {
            setShowResult(true);
        }
    };

    return showResult ? (
        <Result scores={scores} />
    ) : (
        <Question data={questions[currentQ]} onAnswer={handleAnswer} />
    );
}

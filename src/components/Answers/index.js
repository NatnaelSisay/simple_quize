import React, { useState } from "react";
import "./index.css";
function Answers({ correct, inCorrect, handleClick }) {
    const [disabled, setDisabled] = useState(false);
    const allAnswers = [correct, ...inCorrect];

    allAnswers.sort(); // alpabetical sorting could shuffle answers

    const choiceClick = (choosenAnswer) => {
        setDisabled(true);
        handleClick(choosenAnswer);
    };

    return (
        <div className="question_choices">
            {allAnswers.map((answer, index) => (
                <div key={index}>
                    <button
                        onClick={() => choiceClick(answer)}
                        disabled={disabled}
                    >
                        {answer}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Answers;

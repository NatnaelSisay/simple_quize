import React, { useEffect, useState } from "react";
import "./index.css";
function Answers({ correct, inCorrect, handleClick, disalbeButton }) {
    const allAnswers = [correct, ...inCorrect];

    allAnswers.sort(); // alpabetical sorting could shuffle answers

    const choiceClick = (choosenAnswer) => {
        // setDisabled(true);
        handleClick(choosenAnswer);
    };

    return (
        <div className="question_choices">
            {allAnswers.map((answer, index) => (
                <div key={index}>
                    <button
                        onClick={() => choiceClick(answer)}
                        disabled={disalbeButton}
                    >
                        {answer}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Answers;

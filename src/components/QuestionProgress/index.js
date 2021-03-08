import React from "react";
import "./index.css";

function QuestionProgress({ currentPage, totalQuestions }) {
    const questionProgressSize = Math.round(
        ((currentPage + 1) / totalQuestions) * 100
    );
    return (
        <div
            className="question_progress"
            style={{ width: `${questionProgressSize}%` }}
        ></div>
    );
}

export default QuestionProgress;

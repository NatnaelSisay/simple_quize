import "./App.css";

import Rating from "./components/Rating";
import Answers from "./components/Answers";
import Progress from "./components/Progress";
import QuestionProgress from "./components/QuestionProgress";

import Questions from "./questions";
import { useState } from "react";

function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const totalQuestions = Questions.length;

    const [answerd, setAnswerd] = useState(false);
    const [currentAnswerWasCorrect, setCurrentAnswerWasCorrect] = useState(
        false
    );
    const [disalbeButton, setDisableButton] = useState(false);

    const question = Questions[currentPage];

    const getNextQuestion = () => {
        if (currentPage < totalQuestions - 1) {
            setCurrentPage(currentPage + 1);
        }

        setDisableButton(false);
        setAnswerd(false);
        setCurrentAnswerWasCorrect(false);
    };

    const handleAnswer = (studentAnswer) => {
        if (question.correct_answer == studentAnswer) {
            setCorrectAnswers(correctAnswers + 1);
            setAnswerd(true);
            setCurrentAnswerWasCorrect(true);
        }

        setAnswerd(true);
        setDisableButton(true);
    };

    return (
        <div className="App">
            <div className="container">
                <QuestionProgress
                    currentPage={currentPage}
                    totalQuestions={totalQuestions}
                />
                <div className="main_container">
                    <div className="question">
                        <div className="question_header">
                            <h1>{`Question ${
                                currentPage + 1
                            } of ${totalQuestions}`}</h1>
                            <p>{question.category}</p>
                            <div>
                                <Rating rate={question.difficulty} />
                            </div>
                        </div>
                        <div className="question_body">{question.question}</div>
                        <div className="">
                            <Answers
                                correct={question.correct_answer}
                                inCorrect={question.incorrect_answers}
                                handleClick={(value) => handleAnswer(value)}
                                disalbeButton={disalbeButton}
                            />
                        </div>

                        {answerd && (
                            <div className="answer">
                                <p>
                                    {currentAnswerWasCorrect
                                        ? "Correct!"
                                        : "Sorry!"}
                                </p>
                                <button onClick={() => getNextQuestion()}>
                                    Next Question
                                </button>
                            </div>
                        )}
                    </div>

                    <Progress
                        currentPage={currentPage + 1}
                        correctAnswers={correctAnswers}
                        totalQuestions={totalQuestions}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;

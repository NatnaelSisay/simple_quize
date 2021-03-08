import "./App.css";

import Rating from "./components/Rating";
import Answers from "./components/Answers";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="question_progress"></div>
                <div className="main_container">
                    <div className="question">
                        <div className="question_header">
                            <h1>Question 16 of 20</h1>
                            <p>Entertainment: Board Game</p>
                            <div>
                                <Rating />
                            </div>
                        </div>
                        <div className="question_body">
                            At the start of a standard game of the Monopoly, if
                            you throw a double six, which square would you land
                            on?
                        </div>
                        <div className="">
                            <Answers
                                correct="Java"
                                inCorrect={["Two", "Three", "Four"]}
                                handleClick={(value) =>
                                    console.log("button Click => ", value)
                                }
                            />
                        </div>

                        <div className="answer">
                            <p>Correct!</p>
                            <button>Next Question</button>
                        </div>
                    </div>

                    <div className="score">
                        <div className="score_numbers">
                            <p>Score: 69%</p>
                            <p>Max Score: 75%</p>
                        </div>
                        <div className="score_progress">
                            <div className="result_1"></div>
                            <div className="result_2"></div>
                            <div className="result_3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

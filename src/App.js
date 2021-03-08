import "./App.css";

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
                            <div>Stars</div>
                        </div>
                        <div className="question_body">
                            At the start of a standard game of the Monopoly, if
                            you throw a double six, which square would you land
                            on?
                        </div>
                        <div className="question_choices">
                            <div>
                                <button>One</button>
                            </div>
                            <div>
                                <button>Two</button>
                            </div>
                            <div>
                                <button>Three</button>
                            </div>
                            <div>
                                <button>Four</button>
                            </div>
                        </div>

                        <div className="answer">
                            <p>Correct</p>
                            <button>Next Question</button>
                        </div>
                    </div>

                    <div className="score"></div>
                </div>
            </div>
        </div>
    );
}

export default App;

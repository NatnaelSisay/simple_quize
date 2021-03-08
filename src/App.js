import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="question_progress"></div>
                <div className="main_container">
                    <div className="question">
                        <div className="question_header"></div>
                        <div className="question_body"></div>
                        <div className="question_choices"></div>
                    </div>

                    <div className="answer">
                        <p>Correct</p>
                        <button>Next Question</button>
                    </div>

                    <div className="score"></div>
                </div>
            </div>
        </div>
    );
}

export default App;

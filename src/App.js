import './App.css'

import { useEffect, useState } from 'react'
import Rating from './components/Rating'
import Answers from './components/Answers'
import Progress from './components/Progress'
import QuestionProgress from './components/QuestionProgress'

import Questions from './questions'

/*
Shuffling Algorizem
Fisher-Yates Algorithm
https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
*/
const randomizeAnswers = (answers) => {
  const randomAnswers = [...answers]
  for (let i = randomAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const tempo = randomAnswers[i]
    randomAnswers[i] = randomAnswers[j]
    randomAnswers[j] = tempo
  }

  return randomAnswers
}

function App () {
  const [currentPage, setCurrentPage] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const totalQuestions = Questions.length

  const [answerd, setAnswerd] = useState(false)
  const [currentAnswerWasCorrect, setCurrentAnswerWasCorrect] = useState(false)
  const [disalbeButton, setDisableButton] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const [choosen, setChoosen] = useState('')

  const [question, setQuestion] = useState({})
  const [shuffledAnswers, setShuffledAnswers] = useState([])
  const [unAnswerdQuestion, setUnAnswerdQuestion] = useState(Questions.length)
  console.log(unAnswerdQuestion)
  // const question = Questions[currentPage]

  const getNextQuestion = () => {
    setUnAnswerdQuestion(unAnswerdQuestion - 1)
    if (currentPage < totalQuestions - 1) {
      setCurrentPage(currentPage + 1)
    }

    setDisableButton(false)
    setAnswerd(false)
    setCurrentAnswerWasCorrect(false)
    setChoosen('')
  }

  const handleAnswer = (studentAnswer) => {
    if (gameOver) {
      return
    }

    setChoosen(studentAnswer)
    if (question.correct_answer === studentAnswer) {
      setCorrectAnswers(correctAnswers + 1)
      setAnswerd(true)
      setCurrentAnswerWasCorrect(true)

      if (currentPage === totalQuestions - 1) {
        setGameOver(true)
      }
    }

    setAnswerd(true)
    setDisableButton(true)
  }

  useEffect(() => {
    const currentQuestion = Questions[currentPage]
    setQuestion(currentQuestion)
    setShuffledAnswers(randomizeAnswers([currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]))
  }, [currentPage])

  if (!question.question) return null
  // console.log("The Question => ", question)

  return (
    <div className='App'>
      <div className='container'>
        <QuestionProgress
          currentPage={currentPage}
          totalQuestions={totalQuestions}
        />
        <div className='main_container'>
          <div className='question'>
            <div className='question_header'>
              <h1>{`Question ${currentPage + 1} of ${totalQuestions}`}</h1>
              <p>{question.category}</p>
              <div>
                <Rating rate={question.difficulty} />
              </div>
            </div>
            <div className='question_body'>{question.question}</div>
            <div className=''>
              <Answers
                correct={question.correct_answer}
                shuffledAnswers={shuffledAnswers}
                handleClick={(value) => handleAnswer(value)}
                disalbeButton={disalbeButton}
                choosen={choosen}
              />
            </div>

            {answerd && (
              <div className='answer'>
                <p>{currentAnswerWasCorrect ? 'Correct!' : 'Sorry!'}</p>
                <button onClick={() => getNextQuestion()}>Next Question</button>
              </div>
            )}
          </div>

          <Progress
            currentPage={currentPage}
            correctAnswers={correctAnswers}
            totalQuestions={totalQuestions}
            unAnswerdQuestion={unAnswerdQuestion}
          />
        </div>
      </div>
    </div>
  )
}

export default App

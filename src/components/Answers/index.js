import React from 'react'
import './index.css'

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

function Answers ({ correct, inCorrect, handleClick, disalbeButton }) {
  const allAnswers = randomizeAnswers([correct, ...inCorrect])

  const choiceClick = (choosenAnswer) => {
    // setDisabled(true)
    handleClick(choosenAnswer)
  }

  return (
    <div className='question_choices'>
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
  )
}

export default Answers

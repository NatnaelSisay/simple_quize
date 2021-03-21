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

function Answers ({ correct, inCorrect, handleClick, disalbeButton, choosen }) {
  const allAnswers = randomizeAnswers([correct, ...inCorrect])

  const choiceClick = (choosenAnswer) => {
    // setDisabled(true)
    handleClick(choosenAnswer)
  }

  console.log('Choosen after click => ', choosen)

  return (
    <div className='question_choices'>
      {allAnswers.map((answer, index) => (
        <div key={index}>
          <button
          /** When Answer is revealed it shoudn't send a click handler,
           * since the question is already answerd */
            className={`answer_button ${(disalbeButton && answer !== correct) && 'answer_wrong'} 
                                      ${(disalbeButton && answer === correct) && 'answer_correct'} 
                                      ${(disalbeButton && answer === choosen) && 'answer_choosen'}`}
            onClick={() => disalbeButton || choiceClick(answer)}
            // disabled={disalbeButton && answer !== correct}
          >
            {answer}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Answers

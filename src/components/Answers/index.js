import React from 'react'
import './index.css'

function Answers ({ correct, shuffledAnswers, handleClick, disalbeButton, choosen, gameOver }) {
  // const allAnswers = randomizeAnswers([correct, ...inCorrect])
  const allAnswers = shuffledAnswers

  const choiceClick = (choosenAnswer) => {
    // setDisabled(true)
    handleClick(choosenAnswer)
  }

  // console.log('Choosen after click => ', choosen)

  return (
    <div className='question_choices'>
      {allAnswers.map((answer, index) => (
        <div key={index}>
          <button
          /** When Answer is revealed it shoudn't send a click handler,
           * since the question is already answerd */
            className={`answer_button ${(disalbeButton && answer !== correct) && 'answer_wrong'} 
                                      ${(disalbeButton && answer === correct) && 'answer_correct'} 
                                      ${(disalbeButton && answer === choosen) && 'answer_choosen'}
                                      ${(gameOver && 'answer_wrong')}`}
            onClick={() => disalbeButton || choiceClick(answer)}
            // disabled={gameOver}
          >
            {answer}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Answers

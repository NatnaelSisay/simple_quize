import React from 'react'
import './index.css'

function Progress ({ currentPage = 0, correctAnswers = 0, totalQuestions = 0, unAnswerdQuestion }) {
  // progress bar length
  currentPage += 1 // page number should start from 1 -> totalQuestions
  const minScore = (correctAnswers / totalQuestions) * 100
  const currentScore = Math.round((correctAnswers / currentPage) * 100)
  const maxScore = ((correctAnswers + unAnswerdQuestion) / totalQuestions) * 100
  // Bar Length
  const maxScoreBar = maxScore - currentScore
  const currentScoreBar = currentScore - minScore

  return (
    <div className='score'>
      <div className='score_numbers'>
        <p>Score: {currentScore}%</p>
        <p>Max Score: {maxScore}%</p>
      </div>
      <div className='score_progress'>
        <div
          className='result_1'
          style={{ width: `${minScore}%` }}
        />
        <div
          className='result_2'
          style={{ width: `${currentScoreBar}%` }}
        />
        <div
          className='result_3'
          style={{ width: `${maxScoreBar}%` }}
        />
      </div>
    </div>
  )
}

export default Progress

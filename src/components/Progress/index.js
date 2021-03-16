import React from 'react'
import './index.css'

function Progress ({ currentPage = 0, correctAnswers = 0, totalQuestions = 0 }) {
  /** Reason for reducing test questions is b/c the currnetPage is always 1 lower
   * and we can't fully get the bars to overlap
   */
  totalQuestions = totalQuestions - 1
  const currentScore = currentPage && Math.round((correctAnswers / currentPage) * 100)
  const maxScore = Math.round(
    ((correctAnswers + (totalQuestions - currentPage)) / totalQuestions) *
            100
  )
  const minScore = Math.round((correctAnswers / totalQuestions) * 100)

  // progress bar length
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

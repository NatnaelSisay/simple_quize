import React from 'react'

import Star from '../../assets/star.png'
import './index.css'

const ratingValues = {
  easy: 1,
  medium: 2,
  hard: 3
}

function Rating ({ rate = 'medium' }) {
  const currentRating = ratingValues[rate]
  if (!currentRating) return 'Unknown-Rate'

  const stars = []

  for (let i = 0; i < currentRating; i++) {
    stars.push(<img src={Star} className='star' alt='star' />)
  }

  return (
    <div className='star_container'>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  )
}

export default Rating

import React from 'react'
import { COLOR_CLASS_LIGHT_GRAY } from '../constants/styles'

interface Props {
  numWords: number
}

const formatEstimate = (estimate: number) => (estimate === 0 ? '< 1' : estimate)

const numWordsToReadingTime = (numWords: number) => ({
  // Do floor() to account for the excerpt, which can be read in a minute
  englishLearners: formatEstimate(Math.floor(numWords / 100)),
  nativeSpeakers: formatEstimate(Math.floor(numWords / 250)),
})

const ReadingTimeText: React.SFC<Props> = ({ numWords }) => {
  const { englishLearners, nativeSpeakers } = numWordsToReadingTime(numWords)
  return (
    <span>
      <span className="db mb1">
        Remaining time: <strong>{nativeSpeakers}</strong> min{nativeSpeakers >
          1 && 's'}
      </span>
      <span className={`db ${COLOR_CLASS_LIGHT_GRAY}`}>
        For English learners: <strong>{englishLearners}</strong> min{englishLearners >
          1 && 's'}
      </span>
    </span>
  )
}

export default ReadingTimeText

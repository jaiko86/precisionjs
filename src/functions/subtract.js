import {compareArnum} from './comparator'
import {MAX_ARNUM_DIGIT} from '../constants'

// PRE: minuend >= subtrahend
export const subtractArnums = (minuend, subtrahend) => {
  const comparison = compareArnum(minuend, subtrahend)
  if(comparison === 0) return [0]
  if(comparison === -1) 
    throw new Error(`Minuend must be greater than or equal to subtrahend`)
  const diff = []
  let place = 0
  let carryToLastDigit = false
  while(minuend[place] !== undefined) {
    if(carryToLastDigit) {
      diff[place - 1] += MAX_ARNUM_DIGIT
    }
    const minuendDigit = minuend[place] + (carryToLastDigit ? -1 : 0)
    const subtrahendDigit = subtrahend[place] || 0
    const differenceDigit = minuendDigit - subtrahendDigit
    carryToLastDigit = differenceDigit < 0
    diff[place] = differenceDigit

    place++
  }

  while(diff[diff.length - 1] === 0) {
    diff.pop()
  }

  return diff
}

/*
2   1   7   3
-       9   7
---------------
            6

*/
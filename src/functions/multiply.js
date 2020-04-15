import { addArnums } from '../functions/add'

/**
 * @param {a} obj An array of numbers, where each index has a 0 <= number < MAX_ARNUM_DIGIT
 * @param {b} obj An array of numbers, where each index has a 0 <= number < MAX_ARNUM_DIGIT
 * @return {Array} An array of numbers, where each index has a 0 <= number < MAX_ARNUM_DIGIT
 * 
 * ex: multiply([3,2,1], [0,1]) => [0, 3, 2, 1]
 */
const multiplyTwoArnums = (a, b) => {
  const products = []
  a.forEach((n1, idx1) => {
    b.forEach((n2, idx2) => {
      const row = Array(idx1 + idx2).fill(0)
      row.push(n1 * n2)
      products.push(row)
    })
  })
  return addArnums(...products)
}

const multiplyArnums =  (...nums) => nums.reduce(multiplyTwoArnums)

export default multiplyArnums
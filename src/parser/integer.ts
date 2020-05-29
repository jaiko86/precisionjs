import getArnum from '../numbers/arnum/arnum'

export default (n: string) => ({
  numerator: getArnum(n),
  denominator: getArnum('1'),
})

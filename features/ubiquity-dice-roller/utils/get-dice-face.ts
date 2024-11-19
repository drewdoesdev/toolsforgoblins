import { DiceTypes } from '@/ubiquity-dice-roller/ubiquity-dice-roller-types'

export const getDiceFace = (diceType: DiceTypes) => {
  const { single, double, tripple } = require('../dice-faces.json')
  switch (diceType) {
    case DiceTypes.Single:
      return single
    case DiceTypes.Double:
      return double
    case DiceTypes.Tripple:
      return tripple
    default:
      console.error('diceType not set on line 21')
  }
}

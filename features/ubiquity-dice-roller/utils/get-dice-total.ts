import { DiceTypes } from '@/ubiquity-dice-roller/ubiquity-dice-roller-types'

export const getDiceTotal = (diceType: DiceTypes): number => {
  switch (diceType) {
    case DiceTypes.Single:
      return 1
    case DiceTypes.Double:
      return 2
    case DiceTypes.Tripple:
      return 3
    default:
      console.error('Invalid dice type when getting dice total')
      return 0
  }
}

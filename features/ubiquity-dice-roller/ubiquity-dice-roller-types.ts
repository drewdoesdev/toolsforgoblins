export enum DiceTypes {
  Single = 'single',
  Double = 'double',
  Tripple = 'tripple',
}

export interface IDice {
  diceType: DiceTypes
  diceRoll?: number
  staticVal?: string
  hasRolled?: boolean
  onClick?: () => void
}

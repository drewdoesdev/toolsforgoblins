import { IDice } from '@/ubiquity-dice-roller/ubiquity-dice-roller-types'
import { getDiceFace } from '@/ubiquity-dice-roller/utils/get-dice-face'

export const Dice = ({
  diceType,
  staticVal,
  diceRoll,
  hasRolled = false,
  onClick = () => null,
}: IDice) => {
  //Set Faces
  const faces: string[] = getDiceFace(diceType)

  const renderRoll = () => {
    if (staticVal) {
      return staticVal
    } else if (diceRoll !== undefined) {
      return faces[diceRoll]
    }

    return ''
  }

  return (
    <button onClick={() => onClick()} data-dice-type={diceType}>
      <span>{renderRoll()}</span>
    </button>
  )
}

import { IDice } from '@/ubiquity-dice-roller/ubiquity-dice-roller-types'
import { getDiceFace } from '@/ubiquity-dice-roller/utils/get-dice-face'

export const Dice = ({
  diceType,
  staticVal,
  diceRoll,
  hasRolled = false,
  onClick = () => null,
}: IDice) => {
  const wrapperClasses = `
        flex justify-center items-center rotate-45 m-6 cursor-pointer text-white animate-pop-in
        ${staticVal ? 'w-12 h-12' : 'w-16 h-16'}
        ${diceType === 'single' ? 'bg-gradient-to-b from-blue-700 via-blue-500 to-sky-400' : ''}
        ${diceType === 'double' ? 'bg-gradient-to-b from-green-700 via-green-500 to-yellow-400' : ''}
        ${diceType === 'tripple' ? 'bg-gradient-to-b from-red-700 via-pink-500 to-orange-400' : ''}
        ${hasRolled ? 'rolled' : ''}
    `.trim()

  const numberClasses = `
        -rotate-45 select-none font-bold
        ${staticVal ? 'text-2xl' : 'text-3xl'}
    `.trim()

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
    <button className={wrapperClasses} onClick={() => onClick()} data-dice-type={diceType}>
      <span className={numberClasses}>{renderRoll()}</span>
    </button>
  )
}

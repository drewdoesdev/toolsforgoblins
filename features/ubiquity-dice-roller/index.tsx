import { useEffect, useState } from 'react'
import { Dice } from './components/Dice'
import { IDice, DiceTypes} from './ubiquity-dice-roller-types'
import { getDiceFace } from './utils/get-dice-face'
import Logo from './assets/coinflip.svg'
import styles from './App.module.scss'
import { getDiceTotal } from './utils/get-dice-total'

export const UbiquityDiceRoller = () => {
  const [diceArray, updateDiceArray] = useState<IDice[]>([])
  const [successTotal, setSuccessTotal] = useState<number>(0)
  const [hasRolled, setHasRolled] = useState<boolean>(false)
  const [totalDice, setTotalDice] = useState<number>(0)

  useEffect(() => {
    if (hasRolled) {
      diceArray.forEach((dice) => {
        const { diceRoll, diceType } = dice
        const faces = getDiceFace(diceType)
        if (diceRoll) {
          const total = parseInt(faces[diceRoll])
          setSuccessTotal((prevState) => prevState + total)
        }
      })
    }
  }, [hasRolled, diceArray])

  const onDiceClick = async (diceType: DiceTypes) => {
    const dice: IDice = {
      diceType,
    }

    if (hasRolled) {
      updateDiceArray([dice])
      setSuccessTotal(0)
      setTotalDice(0 + getDiceTotal(dice.diceType))
      setHasRolled(false)
    } else {
      setTotalDice(totalDice + getDiceTotal(dice.diceType))
      updateDiceArray([...diceArray, dice])
    }
  }


  const rollDice = () => {
    const arrayCopy = diceArray
    arrayCopy.forEach((dice) => {
      dice.diceRoll = Math.floor(Math.random() * 8)
    })
    updateDiceArray(arrayCopy)
    setHasRolled(true)
  }

  const rollButtonText = hasRolled ? 'Reroll Dice' : 'Roll Dice'

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" width={125} />
        </div>
        <h1 className={styles.title}>Ubiquity Dice Roller</h1>
        <p className={styles.instructions}>
          <span className={styles.blue}>Blue dice</span> are a 50/50 roll.{' '}
          <span className={styles.green}>Green dice</span> are the equivalent of 2 Blue dice, and{' '}
          <span className={styles.red}>Red dice</span> the equivalent of 3 Blue dice.{' '}
          <em>Click a dice to start rolling!</em>
        </p>
        <div className={styles.diceControls}>
          <Dice
            diceType={DiceTypes.Single}
            staticVal="x1"
            onClick={() => onDiceClick(DiceTypes.Single)}
            hasRolled={hasRolled}
          />
          <Dice
            diceType={DiceTypes.Double}
            staticVal="x2"
            onClick={() => onDiceClick(DiceTypes.Double)}
            hasRolled={hasRolled}
          />
          <Dice
            diceType={DiceTypes.Tripple}
            staticVal="x3"
            onClick={() => onDiceClick(DiceTypes.Tripple)}
            hasRolled={hasRolled}
          />
        </div>
        {diceArray.length > 0 && !hasRolled && (
          <button className={styles.rollDiceButton} onClick={rollDice}>
            {rollButtonText}
          </button>
        )}
        {!hasRolled && totalDice > 0 && (
          <h2 className={styles.successes}>Total Dice: {totalDice}</h2>
        )}
        {hasRolled && <h2 className={styles.successes}>Successes: {successTotal}</h2>}
        <div className={styles.diceResults}>
          {diceArray.map((dice) => {
            return <Dice {...dice} />
          })}
        </div>
        {hasRolled && (
          <span className={styles.clearInstructions}>Reselect dice to start again</span>
        )}
      </div>
    </div>
  )
}

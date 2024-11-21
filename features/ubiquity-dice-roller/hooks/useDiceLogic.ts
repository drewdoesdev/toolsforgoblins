import { useEffect, useState } from 'react'
import { IDice } from '../ubiquity-dice-roller-types'
import { getDiceFace } from '../utils/get-dice-face'

/**
 * Custom hook to manage dice rolling logic and state
 * Handles dice array manipulation, success calculation, and roll status
 */
export const useDiceLogic = () => {
  const initState = {
    diceArray: [],
    successTotal: 0,
    hasRolled: false,
    totalDice: 0,
  }
  // Array of dice objects containing type and current roll value
  const [diceArray, updateDiceArray] = useState<IDice[]>(initState.diceArray)
  // Running total of successful dice rolls
  const [successTotal, setSuccessTotal] = useState<number>(initState.successTotal)
  // Flag to track if dice have been rolled in current session
  const [hasRolled, setHasRolled] = useState<boolean>(initState.hasRolled)
  // Total number of dice in play
  const [totalDice, setTotalDice] = useState<number>(initState.totalDice)

  /**
   * Effect to calculate total successes after dice are rolled
   * Triggers when hasRolled changes or diceArray is updated
   */
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

  /**
   * Rolls all dice in the array by generating random numbers
   * Updates dice array and sets hasRolled flag
   */
  const rollDice = (): void => {
    const arrayCopy: IDice[] = [...diceArray]
    arrayCopy.forEach((dice: IDice): void => {
      dice.diceRoll = Math.floor(Math.random() * 8)
    })
    updateDiceArray(arrayCopy)
    setHasRolled(true)
  }

  /**
   * Resets all dice-related state to initial values
   * Clears dice array, success total, and roll status
   */
  const resetDice = (): void => {
    updateDiceArray(initState.diceArray)
    setSuccessTotal(initState.successTotal)
    setTotalDice(initState.totalDice)
    setHasRolled(initState.hasRolled)
  }

  // Return all state variables and functions needed by components
  return {
    resetDice,
    rollDice,
    successTotal,
    totalDice,
    updateDiceArray,
    setSuccessTotal,
    setTotalDice,
    setHasRolled,
    hasRolled,
    diceArray,
  }
}

'use client'
import { Dice } from './components/Dice'
import { IDice, DiceTypes } from './ubiquity-dice-roller-types'
import Image from 'next/image'
import { getDiceTotal } from './utils/get-dice-total'
import { useDiceLogic } from './hooks/useDiceLogic'

type OnDiceClickFunction = ({ diceType }: { diceType: DiceTypes }) => Promise<void>

export const UbiquityDiceRoller = () => {
  // Custom hook that manages dice state and rolling logic
  const {
    hasRolled,
    diceArray,
    successTotal,
    totalDice,
    updateDiceArray,
    setSuccessTotal,
    setTotalDice,
    setHasRolled,
    resetDice,
    rollDice,
  } = useDiceLogic()

  // Handles clicking on a dice buttons
  const onDiceClick: OnDiceClickFunction = async ({ diceType }) => {
    const dice: IDice = {
      diceType,
    }

    if (hasRolled) {
      // Reset and start new roll with single clicked dice
      updateDiceArray([dice])
      setSuccessTotal(0)
      setTotalDice(0 + getDiceTotal(dice.diceType))
      setHasRolled(false)
    } else {
      // Add to existing unrolled dice pool
      setTotalDice(totalDice + getDiceTotal(dice.diceType))
      updateDiceArray([...diceArray, dice])
    }
  }

  // Dynamic button text based on roll state
  const rollButtonText = hasRolled ? 'Reroll Dice' : 'Roll Dice'

  return (
    <div className="text-black-500 flex h-auto items-start justify-center">
      <div className="flex h-full w-full max-w-[768px] flex-col flex-nowrap items-center justify-start">
        {/* Logo and title section */}
        <div className="mt-8 pr-12">
          <Image
            className="fill-black"
            src="/static/images/ubiquity-dice-roller/coinflip.svg"
            alt="logo"
            width={125}
            height={125}
          />
        </div>
        <h1 className="my-8 font-adventure text-4xl">Ubiquity Dice Roller</h1>
        <p className="mb-8">
          <span className="font-bold text-blue-700">Blue dice</span> are a 50/50 roll.{' '}
          <span className="font-bold text-green-700">Green dice</span> are the equivalent of 2 Blue
          dice, and <span className="font-bold text-red-700">Red dice</span> equivalent of 3 Blue
          dice. <em>Click a dice to start rolling!</em>
        </p>
        {/* Dice selection buttons - Blue (x1), Green (x2), Red (x3) */}
        <div className="mb-8 flex w-full items-center justify-center">
          <Dice
            diceType={DiceTypes.Single}
            staticVal="x1"
            onClick={() => onDiceClick({ diceType: DiceTypes.Single })}
            hasRolled={hasRolled}
          />
          <Dice
            diceType={DiceTypes.Double}
            staticVal="x2"
            onClick={() => onDiceClick({ diceType: DiceTypes.Double })}
            hasRolled={hasRolled}
          />
          <Dice
            diceType={DiceTypes.Tripple}
            staticVal="x3"
            onClick={() => onDiceClick({ diceType: DiceTypes.Tripple })}
            hasRolled={hasRolled}
          />
        </div>
        {/* Roll/Reset button - disabled if no dice selected */}
        <button
          className="btn-primary min-w-28"
          disabled={diceArray.length === 0}
          onClick={hasRolled ? resetDice : rollDice}
        >
          {rollButtonText}
        </button>
        {/* Display total dice count before rolling */}
        {!hasRolled && totalDice > 0 && (
          <h2 className="my-3 mb-8 py-3 text-2xl font-[var(--body-font)]">
            Total Dice: {totalDice}
          </h2>
        )}
        {hasRolled && (
          <h2 className="my-3 mb-8 py-3 text-2xl font-[var(--body-font)]">
            Successes: {successTotal}
          </h2>
        )}
        {/* Visual display of all selected dice */}
        <div className="mb-8 flex w-full flex-row flex-wrap items-center justify-center">
          {diceArray.map((dice, index) => {
            return <Dice key={`dice-${index}`} {...dice} />
          })}
        </div>
        {/* Helper text shown after rolling */}
        {hasRolled && <span>Reselect dice to start again</span>}
      </div>
    </div>
  )
}

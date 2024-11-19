'use client'
import { useEffect, useState } from 'react'
import { Dice } from './components/Dice'
import { IDice, DiceTypes } from './ubiquity-dice-roller-types'
import { getDiceFace } from './utils/get-dice-face'
import Logo from './assets/coinflip.svg'
import Image from 'next/image'
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
    <div className="flex h-auto min-h-screen w-screen items-start justify-center overflow-x-hidden overflow-y-scroll bg-[color:var(--cocoa-brown)] text-[color:var(--champagne)]">
      <div className="flex h-full w-full max-w-[768px] flex-col flex-nowrap items-center justify-start p-8">
        <div className="mt-8 pr-12">
          <Image src={Logo} alt="logo" width={125} />
        </div>
        <h1 className="my-8 text-4xl font-[var(--title-font)]">Ubiquity Dice Roller</h1>
        <p className="mb-8 font-[var(--body-font)]">
          <span className="text-[color:var(--sky-blue)]">Blue dice</span> are a 50/50 roll.{' '}
          <span className="text-[color:var(--bright-green)]">Green dice</span> are the equivalent of
          2 Blue dice, and <span className="text-[color:var(--bright-orange)]">Red dice</span> the
          equivalent of 3 Blue dice. <em>Click a dice to start rolling!</em>
        </p>
        <div className="mb-8 flex w-full items-center justify-center">
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
          <button className="mb-8" onClick={rollDice}>
            {rollButtonText}
          </button>
        )}
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
        <div className="mb-8 flex w-full flex-row flex-wrap items-center justify-center">
          {diceArray.map((dice, index) => {
            return <Dice key={`dice-${index}`} {...dice} />
          })}
        </div>
        {hasRolled && <span>Reselect dice to start again</span>}
      </div>
    </div>
  )
}

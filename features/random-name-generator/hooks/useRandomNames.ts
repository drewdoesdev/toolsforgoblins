import { useState, useCallback } from 'react'
import { IName } from '../random-name-generator-types'
import { namesDatabase } from '../data/names-database'

export const useRandomNames = (initialCount: number = 5) => {
  const [names, setNames] = useState<IName[]>([])

  const generateRandomNames = useCallback(() => {
    const shuffled = [...namesDatabase].sort(() => 0.5 - Math.random())
    setNames(shuffled.slice(0, initialCount))
  }, [initialCount])

  return { names, generateRandomNames }
}

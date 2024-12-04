'use client'
import React, { Suspense, useEffect } from 'react'
import { useRandomNames } from './hooks/useRandomNames'

export const RandomNameGenerator: React.FC = () => {
  const { names, generateRandomNames } = useRandomNames()

  useEffect(() => {
    generateRandomNames()
  }, [generateRandomNames])

  return (
    <div className="mx-auto mt-8 max-w-full rounded-lg bg-white p-6 shadow-lg">
      <ul className="mb-4 space-y-2">
        <Suspense fallback={<div>Loading...</div>}>
          {names.map((name) => (
            <li key={name.id} className="rounded bg-gray-100 p-2">
              <span className="font-medium text-gray-700">{name.name}</span>{' '}
            </li>
          ))}
        </Suspense>
      </ul>
      <button onClick={generateRandomNames} className="btn-primary w-full">
        Generate New Names
      </button>
    </div>
  )
}

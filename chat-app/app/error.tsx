'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Something went wrong!</h1>
      <button
        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}
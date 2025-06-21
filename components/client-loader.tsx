"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import FuturisticLoader from "./futuristic-loader"

export default function ClientLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Show loader on every page change
    setIsLoading(true)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // 2.5 seconds for all page loads

    return () => clearTimeout(timer)
  }, [pathname]) // Trigger on every pathname change

  return <FuturisticLoader isLoading={isLoading} onComplete={() => setIsLoading(false)} />
}

"use client"

import { useEffect, useRef } from "react"
import type React from "react" // Added import for React

interface TouchHandlerProps {
  onTap?: (x: number, y: number) => void
  children: React.ReactNode
}

export function TouchHandler({ onTap, children }: TouchHandlerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleTouch = (e: TouchEvent) => {
      e.preventDefault()
      if (onTap && e.touches.length === 1) {
        const touch = e.touches[0]
        const rect = container.getBoundingClientRect()
        const x = touch.clientX - rect.left
        const y = touch.clientY - rect.top
        onTap(x, y)
      }
    }

    container.addEventListener("touchstart", handleTouch, { passive: false })
    return () => {
      container.removeEventListener("touchstart", handleTouch)
    }
  }, [onTap])

  return (
    <div ref={containerRef} className="w-full h-full touch-manipulation">
      {children}
    </div>
  )
}


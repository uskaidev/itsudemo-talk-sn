"use client"

import { useState, useEffect } from "react"

export function useResponsiveGrid() {
  const [columns, setColumns] = useState(2)

  useEffect(() => {
    function updateColumns() {
      const height = window.innerHeight
      if (height >= 1080) {
        setColumns(4)
      } else if (height >= 900) {
        setColumns(3)
      } else {
        setColumns(2)
      }
    }

    updateColumns()
    window.addEventListener("resize", updateColumns)
    return () => window.removeEventListener("resize", updateColumns)
  }, [])

  return columns
}


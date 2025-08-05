"use client"

import { useEffect, useState } from "react"

interface StardustBackgroundProps {
  density?: "low" | "medium" | "high"
}

export function StardustBackground({ density = "medium" }: StardustBackgroundProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // 检测用户是否偏好减少动画
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsVisible(false)
    }
  }, [])

  if (!isVisible) return null

  const densityConfig = {
    low: { large: 10, medium: 15, small: 25 },
    medium: { large: 20, medium: 30, small: 50 },
    high: { large: 30, medium: 45, small: 75 },
  }

  const config = densityConfig[density]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 第一层星尘 - 大颗粒，慢速 */}
      <div className="stardust-layer-1">
        {Array.from({ length: config.large }).map((_, i) => (
          <div
            key={`large-${i}`}
            className="stardust-particle large"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* 第二层星尘 - 中等颗粒，中速 */}
      <div className="stardust-layer-2">
        {Array.from({ length: config.medium }).map((_, i) => (
          <div
            key={`medium-${i}`}
            className="stardust-particle medium"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* 第三层星尘 - 小颗粒，快速 */}
      <div className="stardust-layer-3">
        {Array.from({ length: config.small }).map((_, i) => (
          <div
            key={`small-${i}`}
            className="stardust-particle small"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

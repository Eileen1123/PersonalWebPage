"use client"

import { useState, useEffect, useRef } from "react"

export function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const rafRef = useRef<number>()

  useEffect(() => {
    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // 检查目标元素及其父元素是否是按钮、链接或有特定类名
      let currentElement: HTMLElement | null = target
      let hoverState = false
      while (currentElement && currentElement !== document.body) {
        if (
          currentElement.tagName === "BUTTON" ||
          currentElement.tagName === "A" ||
          currentElement.classList.contains("cursor-hover")
        ) {
          hoverState = true
          break
        }
        currentElement = currentElement.parentElement
      }
      setIsHovering(hoverState)
    }

    const updateCursor = () => {
      currentX += (targetX - currentX) * 0.1
      currentY += (targetY - currentY) * 0.1

      setMousePos({ x: currentX, y: currentY })
      rafRef.current = requestAnimationFrame(updateCursor)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseover", handleMouseOver)

    rafRef.current = requestAnimationFrame(updateCursor)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseover", handleMouseOver)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <div
      className={`fixed w-6 h-6 pointer-events-none z-[9999] transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: mousePos.x - 12,
        top: mousePos.y - 12,
        transform: `translate3d(0, 0, 0) scale(${isHovering ? 1.5 : 1})`,
        transition: "transform 0.2s ease",
      }}
    >
      <div className="relative w-full h-full">
        {/* 外圈 */}
        <div className="absolute inset-0 rounded-full border-2 border-[#FFD700] animate-pulse" />
        {/* 内圈 */}
        <div className="absolute inset-2 rounded-full bg-[#FFD700] opacity-60" />
        {/* 中心点 */}
        <div className="absolute inset-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </div>
    </div>
  )
}

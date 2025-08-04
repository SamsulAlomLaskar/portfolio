"use client"

import { useState, useEffect } from "react"

interface TypingTransitionProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
  prefix?: string
  suffix?: string
  showCursor?: boolean
}

export default function TypingTransition({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = "",
  prefix = "",
  suffix = "",
  showCursor = true,
}: TypingTransitionProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (texts.length === 0) return

    const targetText = texts[currentTextIndex]

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimer)
    }

    if (isDeleting) {
      if (currentText.length > 0) {
        const deleteTimer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(deleteTimer)
      } else {
        setIsDeleting(false)
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
      }
    } else {
      if (currentText.length < targetText.length) {
        const typeTimer = setTimeout(() => {
          setCurrentText(targetText.slice(0, currentText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(typeTimer)
      } else {
        setIsPaused(true)
      }
    }
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={`inline-block ${className}`}>
      {prefix}
      <span className="inline-block min-h-[1em]">
        {currentText}
        {showCursor && <span className="inline-block w-0.5 h-[1em] bg-current ml-1 animate-pulse opacity-75"></span>}
      </span>
      {suffix}
    </span>
  )
}

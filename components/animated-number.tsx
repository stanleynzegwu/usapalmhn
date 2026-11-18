"use client"

import { useEffect, useState } from "react"

export function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0)
  const [element, setElement] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!element || !("IntersectionObserver" in window)) return
    let frame = 0
    let started = false
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      started = true
      const start = performance.now()
      const step = (now: number) => {
        const progress = Math.min((now - start) / 1800, 1)
        setValue(Math.round((1 - Math.pow(1 - progress, 3)) * target))
        if (progress < 1) frame = requestAnimationFrame(step)
      }
      frame = requestAnimationFrame(step)
      observer.disconnect()
    }, { threshold: 0.3 })
    observer.observe(element)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [element, target])

  return <div ref={setElement} className="impact-number">{value}{suffix}</div>
}

export function YearsActive() {
  const [target, setTarget] = useState(0)

  useEffect(() => {
    setTarget(Math.max(0, new Date().getFullYear() - 2016))
  }, [])

  return <AnimatedNumber target={target} />
}

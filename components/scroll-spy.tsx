"use client"

import Link from "next/link"
import { createContext, useContext, useEffect, useRef, useState, type ComponentProps, type ReactNode } from "react"

const ScrollSpyContext = createContext<{ activeId: string; setActiveId: (id: string) => void }>({
  activeId: "",
  setActiveId: () => undefined,
})

export function ScrollSpyProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState("")
  return <ScrollSpyContext.Provider value={{ activeId, setActiveId }}>{children}</ScrollSpyContext.Provider>
}

export function ScrollSpySection({ children, ...props }: ComponentProps<"section">) {
  const { setActiveId } = useContext(ScrollSpyContext)
  const sectionRef = useRef<HTMLElement | null>(null)
  const sectionId = props.id || ""

  useEffect(() => {
    const section = sectionRef.current
    if (!section || !sectionId || !("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) setActiveId(sectionId)
    }, { rootMargin: "-140px 0px -70% 0px" })
    observer.observe(section)
    return () => observer.disconnect()
  }, [sectionId, setActiveId])

  return <section {...props} ref={sectionRef}>{children}</section>
}

export function ScrollSpyLink({ href, className, children, onClick, ...props }: React.ComponentProps<typeof Link>) {
  const { activeId, setActiveId } = useContext(ScrollSpyContext)
  const hrefText = typeof href === "string" ? href : ""
  const targetId = hrefText.startsWith("#") ? hrefText.slice(1) : ""
  const active = Boolean(targetId && targetId === activeId)
  const preservedClasses = className?.split(/\s+/).filter((name) => name && name !== "active" && name !== "cursor-pointer").join(" ")
  const classes = [preservedClasses, active ? "active" : "", "cursor-pointer"].filter(Boolean).join(" ")

  return (
    <Link
      {...props}
      href={href}
      className={classes}
      aria-current={active ? "location" : undefined}
      onClick={(event) => {
        if (targetId) setActiveId(targetId)
        onClick?.(event)
      }}
    >
      {children}
    </Link>
  )
}

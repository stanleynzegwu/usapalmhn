"use client"

import { Children, cloneElement, useEffect, useState, type ComponentProps, type CSSProperties, type ReactElement, type ReactNode } from "react"

type SlideProps = { className?: string; "aria-hidden"?: boolean }

type HeroCarouselProps = Omit<ComponentProps<"section">, "children"> & {
  slides: ReactNode[]
  stats: ReactNode
  slidesStyle?: CSSProperties
}

export function HeroCarousel({ slides, stats, slidesStyle, ...sectionProps }: HeroCarouselProps) {
  const slideElements = Children.toArray(slides)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (slideElements.length < 2) return
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slideElements.length)
    }, 8000)
    return () => window.clearInterval(timer)
  }, [activeSlide, slideElements.length])

  const showSlide = (index: number) => setActiveSlide(index)

  return <section {...sectionProps} id={sectionProps.id || "hero"}>
    <div className="keffiyeh-overlay" />
    <div className="hero-slides" style={slidesStyle}>
      {slideElements.map((slide, index) => {
        if (typeof slide === "string" || typeof slide === "number") return slide
        const element = slide as ReactElement<SlideProps>
        const className = (element.props.className || "hero-slide").split(" ").filter((name) => name !== "active").join(" ")
        return cloneElement(element, {
          className: `${className}${index === activeSlide ? " active" : ""}`,
          "aria-hidden": index !== activeSlide,
        })
      })}
      <div className="hero-dots">
        {slideElements.map((_, index) => <button
          key={index}
          className={`hero-dot${index === activeSlide ? " active" : ""} cursor-pointer`}
          type="button"
          aria-label={`Show slide ${index + 1}`}
          aria-current={index === activeSlide}
          onClick={() => showSlide(index)}
        />)}
      </div>
    </div>
    {stats}
  </section>
}

"use client"

import { useEffect, useRef, useState } from "react"
import React from "react"
import parse, { attributesToProps, domToReact } from "html-react-parser"
import { SiteFooter, SiteNav, Newsletter } from "@/components/site-nav"
import { UpdatesList } from "@/components/updates-list"

function ImpactNumber({ target, suffix }: { target: number; suffix: string }) {
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

function ScrollSpySection({ sectionId, onEnter, children, ...props }: Omit<React.HTMLAttributes<HTMLElement>, "id"> & { sectionId: string; onEnter: (id: string) => void; children: React.ReactNode }) {
  const sectionRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const element = sectionRef.current
    if (!element || !("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) onEnter(sectionId)
    }, { rootMargin: "-140px 0px -70% 0px" })
    observer.observe(element)
    return () => observer.disconnect()
  }, [onEnter, sectionId])
  return <section {...props} ref={sectionRef} id={sectionId}>{children}</section>
}

export function PageContent({ markup, page, stylesheet }: { markup: string; page: string; stylesheet: string }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeSection, setActiveSection] = useState("")
  const hasScrollSpy = markup.includes("data-scrollspy")
  const slideCount = (markup.match(/class=["'][^"']*hero-slide/g) || []).length
  useEffect(() => {
    if (slideCount < 2) return
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slideCount), 5000)
    return () => window.clearInterval(timer)
  }, [slideCount])

  let slideIndex = 0
  let dotIndex = 0
  const options = {
    replace(node: any) {
      if (node.type !== "tag") return
      const attrs = node.attribs || {}
      const safeAttrs = { ...attrs }
      delete safeAttrs.onclick
      const props = attributesToProps(safeAttrs)
      if (node.name === "script") return <></>
      if (attrs["data-site"] === "nav") return <SiteNav page={page} />
      if (attrs["data-site"] === "newsletter") return <Newsletter />
      if (attrs["data-site"] === "footer") return <SiteFooter />
      if (attrs.class?.split(" ").includes("upd-toolbar")) return <></>
      if (attrs.id === "updates-mount") return <UpdatesList />
      if (hasScrollSpy && node.name === "section" && attrs.id) {
        const sectionProps = { ...props }
        delete sectionProps.id
        const children = domToReact(node.children as any, options)
        return <ScrollSpySection {...sectionProps} sectionId={attrs.id} onEnter={setActiveSection}>{children}</ScrollSpySection>
      }
      if (hasScrollSpy && node.name === "a" && attrs.href?.startsWith("#")) {
        const isActive = activeSection === attrs.href.slice(1)
        const children = domToReact(node.children as any, options)
        const className = [attrs.class?.split(" ").filter((value: string) => value !== "active").join(" "), isActive ? "active" : "", "cursor-pointer"].filter(Boolean).join(" ")
        return React.createElement("a", { ...props, className }, children)
      }
      if (attrs.class?.split(" ").includes("hero-slide")) {
        const index = slideIndex++
        const children = domToReact(node.children as any, options)
        return <div {...props} className={`${attrs.class.split(" ").filter((value: string) => value !== "active").join(" ")}${index === activeSlide ? " active" : ""}`} aria-hidden={index !== activeSlide}>{children}</div>
      }
      if (attrs.class?.split(" ").includes("hero-dot")) {
        const index = dotIndex++
        const children = domToReact(node.children as any, options)
        return <button {...props} type="button" aria-label={`Show slide ${index + 1}`} aria-current={index === activeSlide} className={`${attrs.class}${index === activeSlide ? " active" : ""} cursor-pointer`} onClick={() => setActiveSlide(index)}>{children}</button>
      }
      if (attrs.class?.split(" ").includes("impact-number")) {
        return <ImpactNumber target={Number(attrs["data-target"] || 0)} suffix={attrs["data-suffix"] || ""} />
      }
      if (attrs.onclick) {
        const className = `${attrs.class || ""} cursor-pointer`.trim()
        const children = domToReact(node.children as any, options)
        return React.createElement(node.name, { ...props, className, onClick: () => { if (attrs.class?.includes("form-submit")) window.location.assign("https://usapalmhn.org/join-our-mailing-list/") } }, children)
      }
      if (["a", "button"].includes(node.name)) {
        const children = domToReact(node.children as any, options)
        return React.createElement(node.name, { ...props, className: `${attrs.class || ""} cursor-pointer`.trim() }, children)
      }
    },
  }

  return <>
    <link rel="stylesheet" href={stylesheet} />
    {parse(markup, options)}
  </>
}

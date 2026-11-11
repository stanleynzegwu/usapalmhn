"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: { translate?: { TranslateElement?: new (options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean }, element: string) => unknown } }
  }
}

type NavItem = { href: string; label: string; mobileLabel?: string; children?: { href: string; label: string }[] }
const links: NavItem[] = [
  { href: "about.html", label: "About" }, { href: "updates.html", label: "Updates" }, { href: "campaigns.html", label: "Campaigns" },
  { href: "voices.html", label: "Voices", mobileLabel: "Voices on Mental Health" },
  { href: "resources.html", label: "Resources", children: [{ href: "resources.html", label: "Resource Library" }, { href: "crisis-resources.html", label: "Crisis Resources" }] },
  { href: "get-involved.html", label: "Get Involved" }, { href: "donate.html", label: "Donate" },
]

function LanguageToggle({ mobile = false }: { mobile?: boolean }) {
  const [arabic, setArabic] = useState(false)
  useEffect(() => {
    const enabled = document.cookie.includes("googtrans=/en/ar")
    setArabic(enabled)
    if (enabled) {
      document.documentElement.setAttribute("dir", "rtl")
      document.documentElement.setAttribute("lang", "ar")
    }
    window.googleTranslateElementInit = () => {
      const TranslateElement = window.google?.translate?.TranslateElement
      if (TranslateElement) new TranslateElement({ pageLanguage: "en", includedLanguages: "en,ar", autoDisplay: false }, "google_translate_element")
    }
  }, [])
  const toggle = () => {
    const toArabic = !arabic
    document.cookie = `googtrans=${toArabic ? "/en/ar" : "/en/en"}; path=/`
    window.location.reload()
  }
  return <>
    <button type="button" data-lang-toggle className={`lang-toggle notranslate cursor-pointer${mobile ? " lang-toggle-mobile" : ""}`} onClick={toggle}>{arabic ? <><span lang="ar">عربي</span> | EN</> : <>EN | <span lang="ar">عربي</span></>}</button>
    {!mobile && <><div id="google_translate_element" className="sr-only" aria-hidden="true" /><Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" /></>}
  </>
}

export function SiteNav({ page }: { page: string }) {
  const [open, setOpen] = useState(false)
  return <header className="nav-wrapper">
    <nav className="nav-top" aria-label="Main header">
      <a href="index.html" className="nav-logo"><img src="/assets/logo.png" alt="USA Palestine Mental Health Network logo" /><span className="nav-logo-text">USA Palestine<br />Mental Health Network</span></a>
      <div className="nav-org-name">USA Palestine Mental Health Network</div>
      <div className="nav-top-right">
        <LanguageToggle />
        <a href="https://givebutter.com/USAPALMHN" target="_blank" rel="noopener noreferrer" className="btn-join cursor-pointer">Donate Now</a>
        <button className="hamburger cursor-pointer" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}><span /><span /><span /></button>
      </div>
    </nav>
    <nav className="nav-bottom" aria-label="Primary navigation"><ul className="nav-links">{links.map((item) => <li key={item.href} className={item.children ? "has-sub" : ""}><a href={item.href} className={page === item.href || item.children?.some((child) => child.href === page) ? "active" : ""}>{item.label}{item.children && <span className="sub-caret" aria-hidden="true">▾</span>}</a>{item.children && <ul className="nav-submenu">{item.children.map((child) => <li key={child.href}><a href={child.href} className={page === child.href && child.href !== item.href ? "active" : ""}>{child.label}</a></li>)}</ul>}</li>)}</ul></nav>
    <nav id="mobileMenu" className={`mobile-menu${open ? " open" : ""}`} aria-label="Mobile navigation">{links.flatMap((item) => [{ href: item.href, label: item.mobileLabel || item.label, sub: false }, ...(item.children || []).map((child) => ({ ...child, sub: true }))]).map((item) => <a key={`${item.href}-${item.label}`} href={item.href} className={item.sub ? "mobile-sub" : ""} onClick={() => setOpen(false)}>{item.label}</a>)}<LanguageToggle mobile /></nav>
  </header>
}

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  return <section id="newsletter">
    <h2>Stay Connected with the Network</h2>
    <p>Clinical updates, new resources, and network statements — delivered to your inbox.</p>
    <form className="newsletter-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input id="newsletter-email" type="email" required placeholder="your@email.com" value={email} onChange={(event) => setEmail(event.target.value)} />
      <button className="cursor-pointer" type="submit">Subscribe</button>
    </form>
    {submitted ? <p role="status">Thanks for your interest. Please contact sc@usapalmhn.org to join the mailing list.</p> : <p className="fine-print">You can unsubscribe anytime. We respect your privacy.</p>}
  </section>
}

export function SiteFooter() {
  const columns = [
    { title: "About", links: [["about.html#mission", "Our Mission"], ["about.html#advisory-council", "Advisory Council"], ["about.html#affiliates", "Partner Networks"], ["statement-on-anti-semitism.html", "Statement on Anti-Semitism"], ["about.html#contact", "Contact Us"]] },
    { title: "Navigate", links: [["updates.html", "Updates"], ["campaigns.html", "Campaigns"], ["voices.html", "Voices on Mental Health"], ["resources.html", "Resources"], ["crisis-resources.html", "Crisis Resources"]] },
    { title: "Get Involved", links: [["get-involved.html#join", "Join the Network"], ["get-involved.html#delegations", "Travel to Palestine"], ["get-involved.html#reading-circles", "Reading Circles"], ["get-involved.html#how-to-help", "How to Help"], ["donate.html", "Donate"]] },
  ]
  return <footer><div className="footer-grid">
    <div><div className="footer-logo"><div className="footer-logo-mark"><img src="/assets/logo.png" alt="" /></div><span>USA Palestine<br />Mental Health Network</span></div><p className="footer-tagline">A 100% volunteer-led network of U.S. mental health professionals in solidarity with Palestinian communities since 2016.</p><div className="footer-socials"><a href="https://twitter.com/UsaPalMhn" target="_blank" rel="noreferrer" className="social-btn" title="Twitter/X">𝕏</a><a href="https://www.facebook.com/USA-Palestine-Mental-Health-Network-794365367408972" target="_blank" rel="noreferrer" className="social-btn" title="Facebook">f</a><a href="https://www.instagram.com/us_pmhn/" target="_blank" rel="noreferrer" className="social-btn" title="Instagram">ig</a></div></div>
    {columns.map((column) => <div className="footer-col" key={column.title}><h4>{column.title}</h4>{column.links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</div>)}
  </div><div className="footer-bar"><p>© {new Date().getFullYear()} USA Palestine Mental Health Network. All rights reserved.</p><div className="footer-bar-links"><a href="about.html#contact">Contact</a><a href="donate.html">Donate</a></div></div></footer>
}

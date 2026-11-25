"use client"

import type { ReactNode } from "react"

export function MailingListButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  const classes = [...new Set(`${className} cursor-pointer`.split(/\s+/).filter(Boolean))].join(" ")
  return <button className={classes} type="button" onClick={() => window.location.assign("https://usapalmhn.org/join-our-mailing-list/")}>{children}</button>
}

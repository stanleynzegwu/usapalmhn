import type { ReactNode } from "react"
import { Newsletter, SiteFooter, SiteNav } from "@/components/site-nav"

export function SitePage({ page, children }: { page: string; children: ReactNode }) {
  return <>
    <SiteNav page={page} />
    {children}
    <Newsletter />
    <SiteFooter />
  </>
}

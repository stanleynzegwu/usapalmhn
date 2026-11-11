import { readFile } from "node:fs/promises"
import path from "node:path"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { PageContent } from "@/components/page-content"

const pages = ["about", "updates", "campaigns", "voices", "resources", "crisis-resources", "get-involved", "donate", "statement-on-anti-semitism"]
const titles: Record<string, string> = {
  about: "About — USA Palestine Mental Health Network",
  updates: "Updates — USA Palestine Mental Health Network",
  campaigns: "Campaigns — USA Palestine Mental Health Network",
  voices: "Voices on Mental Health — USA Palestine Mental Health Network",
  resources: "Resources — USA Palestine Mental Health Network",
  "crisis-resources": "Crisis Resources — USA Palestine Mental Health Network",
  "get-involved": "Get Involved — USA Palestine Mental Health Network",
  donate: "Donate — USA Palestine Mental Health Network",
  "statement-on-anti-semitism": "Statement on Anti-Semitism — USA Palestine Mental Health Network",
}

export function generateStaticParams() { return pages.map((slug) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return { title: titles[slug] || titles.about }
}

export default async function StaticPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!pages.includes(slug)) notFound()
  const html = await readFile(path.join(process.cwd(), `${slug}.html`), "utf8")
  const markup = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || ""
  const stylesheet = `/legacy/css/pages/${slug === "statement-on-anti-semitism" ? "statement" : slug}.css`
  return <PageContent markup={markup} page={`${slug}.html`} stylesheet={stylesheet} />
}

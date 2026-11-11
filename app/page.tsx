import { readFile } from "node:fs/promises"
import path from "node:path"
import { PageContent } from "@/components/page-content"

async function getPage() {
  const html = await readFile(path.join(process.cwd(), "index.html"), "utf8")
  const markup = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || ""
  const stylesheet = "/legacy/css/pages/index.css"
  return { markup, stylesheet }
}

export default async function HomePage() {
  const { markup, stylesheet } = await getPage()
  return <PageContent markup={markup} page="index.html" stylesheet={stylesheet} />
}

import type { Metadata } from "next";
import Link from "next/link";
import { overallVoiceArchive } from "@/content/voices/manifest";
import "../../styles/pages/voices-archive.css";

export const metadata: Metadata = {
  title: "Voices on Mental Health — Archive",
  alternates: { canonical: "https://usapalmhn.org/voices/archive" },
};

export default function VoicesOverallArchivePage() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="voice-breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">›</span>
        <Link href="/voices">Voices on Mental Health</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">Archive</span>
      </nav>

      <main className="voice-archive-page">
        <header className="voice-archive-header">
          <p className="voice-archive-eyebrow">Overall archive</p>
          <h1>{overallVoiceArchive.title}</h1>
        </header>
        <ol className="voice-archive-list" aria-label="Voices on Mental Health archive entries">
          {overallVoiceArchive.items.map((item) => (
            <li className="voice-archive-card" key={item.sourceUrl}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}

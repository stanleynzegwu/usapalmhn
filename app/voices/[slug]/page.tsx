import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VoiceDetail } from "@/components/voices/voice-detail";
import { voiceEntries } from "@/content/voices/manifest";
import "../../styles/pages/voices-archive.css";

const siteOrigin = "https://usapalmhn.org";

export const dynamicParams = false;

export function generateStaticParams() {
  return voiceEntries
    .filter((entry) => entry.canonicalPath.startsWith("/voices/"))
    .map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = voiceEntries.find((candidate) => candidate.slug === slug);
  if (!entry) return { title: "Voices on Mental Health" };

  return {
    title: `${entry.title} — USA Palestine Mental Health Network`,
    alternates: { canonical: `${siteOrigin}${entry.canonicalPath}` },
  };
}

export default async function VoiceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = voiceEntries.find((candidate) => candidate.slug === slug);
  if (!entry) notFound();

  return <VoiceDetail entry={entry} />;
}

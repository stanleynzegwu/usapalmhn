import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryArchive } from "@/components/voices/category-archive";
import { voiceCategoryArchives } from "@/content/voices/manifest";
import "../../../styles/pages/voices-archive.css";

const siteOrigin = "https://usapalmhn.org";

export const dynamicParams = false;

export function generateStaticParams() {
  return voiceCategoryArchives.map((archive) => ({ category: archive.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const archive = voiceCategoryArchives.find((candidate) => candidate.slug === category);
  if (!archive) return { title: "Voices archive" };

  return {
    title: `${archive.title} — Voices archive`,
    alternates: { canonical: `${siteOrigin}/voices/categories/${archive.slug}` },
  };
}

export default async function VoicesCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const archive = voiceCategoryArchives.find((candidate) => candidate.slug === category);
  if (!archive) notFound();

  return <CategoryArchive archive={archive} page={1} />;
}

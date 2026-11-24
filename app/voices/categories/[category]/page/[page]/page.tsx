import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryArchive } from "@/components/voices/category-archive";
import { voiceCategoryArchives } from "@/content/voices/manifest";
import "../../../../../styles/pages/voices-archive.css";

const siteOrigin = "https://usapalmhn.org";

export const dynamicParams = false;

export function generateStaticParams() {
  return voiceCategoryArchives.flatMap((archive) =>
    [...new Set(archive.items.map((item) => item.page))]
      .filter((page) => page > 1)
      .map((page) => ({ category: archive.slug, page: String(page) })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; page: string }>;
}): Promise<Metadata> {
  const { category, page } = await params;
  const archive = voiceCategoryArchives.find((candidate) => candidate.slug === category);
  if (!archive || !archive.items.some((item) => item.page === Number(page))) {
    return { title: "Voices archive" };
  }

  return {
    title: `${archive.title} — Page ${page}`,
    alternates: {
      canonical: `${siteOrigin}/voices/categories/${archive.slug}/page/${page}`,
    },
  };
}

export default async function VoicesCategoryPageTwo({
  params,
}: {
  params: Promise<{ category: string; page: string }>;
}) {
  const { category, page: pageParam } = await params;
  const archive = voiceCategoryArchives.find((candidate) => candidate.slug === category);
  const page = Number(pageParam);
  if (!archive || !Number.isInteger(page) || page < 2 || !archive.items.some((item) => item.page === page)) {
    notFound();
  }

  return <CategoryArchive archive={archive} page={page} />;
}

import Link from "next/link";
import type { VoiceCategoryArchive } from "@/content/voices/manifest";

export function CategoryArchive({
  archive,
  page,
}: {
  archive: VoiceCategoryArchive;
  page: number;
}) {
  const visibleItems = archive.items.filter((item) => item.page === page);
  const lastPage = Math.max(...archive.items.map((item) => item.page));
  const itemsBeforePage = archive.items.filter((item) => item.page < page).length;
  const firstVisibleItem = itemsBeforePage + 1;
  const lastVisibleItem = itemsBeforePage + visibleItems.length;
  const basePath = `/voices/categories/${archive.slug}`;
  const introductionPath =
    archive.slug === "gaza"
      ? "/voices/gaza"
      : archive.slug === "west-bank"
        ? "/voices/west-bank"
        : "/voices/may-2021";

  return (
    <>
      <nav aria-label="Breadcrumb" className="voice-breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">›</span>
        <Link href="/voices">Voices on Mental Health</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">{archive.title}</span>
      </nav>

      <main className="voice-archive-page">
        <header className="voice-archive-header">
          <p className="voice-archive-eyebrow">Voices archive</p>
          <h1>{archive.title}</h1>
          <p className="voice-archive-count">
            Showing {firstVisibleItem}–{lastVisibleItem} of {archive.items.length} entries
          </p>
          <p className="voice-archive-context">
            This complete archive is listed in its original order. The separate{" "}
            <Link href={introductionPath}>introductory page</Link> remains a curated overview.
          </p>
        </header>

        <ol className="voice-archive-list" aria-label={`${archive.title} entries`}>
          {visibleItems.map((item) => (
            <li className="voice-archive-card" key={item.sourceUrl}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ol>

        {lastPage > 1 && (
          <nav aria-label="Archive pagination" className="voice-pagination">
            {Array.from({ length: lastPage }, (_, index) => index + 1).map(
              (pageNumber) => {
                const href =
                  pageNumber === 1 ? basePath : `${basePath}/page/${pageNumber}`;
                return (
                  <Link
                    key={pageNumber}
                    href={href}
                    aria-current={pageNumber === page ? "page" : undefined}
                  >
                    {pageNumber}
                  </Link>
                );
              },
            )}
            <span className="voice-pagination-label">
              Page {page} of {lastPage}
            </span>
          </nav>
        )}
      </main>
    </>
  );
}

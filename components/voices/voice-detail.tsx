import { readFile } from "node:fs/promises";
import { join } from "node:path";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";
import type { VoiceEntry } from "@/content/voices/manifest";

const inlineDocumentNames = new Set([
  "Gaza-Children-Save-the-date-flyer.pdf",
  "Maha-article-Gaza-Oct2023.pdf",
  "Manifesto.pdf",
  "Once-upon-a-time-in-Palestine-Saed-Zboun.pdf",
  "plea-from-Gaza.pdf",
]);

function MdxLink({ href, children, ...props }: ComponentProps<"a">) {
  if (!href) return <span>{children}</span>;

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  const external = /^https?:\/\//i.test(href);
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

function MdxImage({ src, alt = "", ...props }: ComponentProps<"img">) {
  if (!src) return null;
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}

const mdxComponents = { a: MdxLink, img: MdxImage };

function getDocumentFilename(href: string) {
  return href.split("/").pop()?.split("?")[0] ?? "";
}

export async function VoiceDetail({ entry }: { entry: VoiceEntry }) {
  const source = await readFile(
    join(process.cwd(), "content/voices", entry.bodyFile),
    "utf8",
  );

  return (
    <>
      <nav aria-label="Breadcrumb" className="voice-breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">›</span>
        <Link href="/voices">Voices on Mental Health</Link>
        {entry.categories[0] && (
          <>
            <span aria-hidden="true">›</span>
            <Link href={`/voices/categories/${entry.categories[0]}`}>
              {entry.categories[0] === "west-bank"
                ? "Voices from the West Bank"
                : entry.categories[0] === "may-2021"
                  ? "May 2021 Assault on Palestine"
                  : "Voices on Gaza"}
            </Link>
          </>
        )}
        <span aria-hidden="true">›</span>
        <span aria-current="page">{entry.title}</span>
      </nav>

      <main className="voice-article-page">
        <article className="voice-article">
          <header className="voice-article-header">
            <h1>{entry.title}</h1>
          </header>

          {entry.audio && (
            <figure className="voice-audio">
              <figcaption>{entry.audio.label}</figcaption>
              <audio controls preload="metadata" aria-label={entry.audio.label}>
                <source src={entry.audio.src} type="audio/mp4" />
                <a href={entry.audio.src}>Open the audio recording</a>
              </audio>
            </figure>
          )}

          <div className="voice-article-body">
            <MDXRemote source={source} components={mdxComponents} />
          </div>

          {entry.documents.length > 0 && (
            <section className="voice-documents" aria-labelledby="voice-documents-title">
              <h2 id="voice-documents-title">Documents</h2>
              <div className="voice-document-list">
                {entry.documents.map((document) => {
                  const filename = getDocumentFilename(document.href);
                  const embed = document.local && inlineDocumentNames.has(filename);
                  return (
                    <article className="voice-document-card" key={document.sourceUrl}>
                      <h3>{document.label}</h3>
                      {embed && (
                        <iframe
                          className="voice-pdf-viewer"
                          src={document.href}
                          title={`${document.label} PDF`}
                          loading="lazy"
                        />
                      )}
                      <a
                        className="voice-document-link"
                        href={document.href}
                        download={document.local ? filename : undefined}
                        target={document.local ? undefined : "_blank"}
                        rel={document.local ? undefined : "noopener noreferrer"}
                      >
                        {document.local ? "Download PDF" : "Open original PDF"}
                      </a>
                    </article>
                  );
                })}
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
}

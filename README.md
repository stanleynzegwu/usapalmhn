# USA Palestine Mental Health Network website

A responsive, multi-page website for the USA Palestine Mental Health Network (USAPALMHN), implemented with the Next.js App Router. The project brings the organization’s public pages together with migrated Voices editorial content from the former WordPress site. The Voices migration preserves the curated `/voices/` landing page, retains its legacy introductory pages, and provides separate complete category archives with canonical article routes and legacy URL redirects.

## Project at a glance

- **Application:** Next.js 16 App Router with React 19 and TypeScript.
- **Editorial content:** MDX files for long-form copy; a typed TypeScript manifest for route identity, metadata, archive membership/order, and redirects.
- **Rendering:** Next.js statically generates Voice detail and archive pages from the manifest. Article bodies are rendered with `next-mdx-remote`.
- **Styling:** Shared site styles and page-specific CSS imported by the routes that use them; Tailwind CSS 4 is available in the toolchain, while the current pages primarily use the site’s CSS stylesheets and design tokens.
- **Persistent media:** Local images, PDFs, and an audio recording live under `public/voices/` and are referenced by public URL.
- **No application database:** the migrated editorial pages are static content and do not require a database.

The migration preserves the captured text and archive ordering, existing `/voices/` selection, legacy landing-page content, the existing standalone `/statement-on-anti-semitism/` route, and required WordPress redirects. It improves maintainability by separating prose from route/archive configuration and by reusing route templates and presentation components.

## Technology stack

| Technology | Role in this project |
|---|---|
| Next.js App Router | File-system routes, layouts, metadata, static route generation, redirects, and production hosting integration. |
| React 19 | Shared site chrome and interactive page components. |
| TypeScript | Route/content model types and typed component contracts. |
| MDX (`next-mdx-remote`) | Long-form article and legacy introductory-page bodies, written as readable Markdown with JSX/HTML-compatible rich content. |
| CSS | Design tokens, shared navigation/footer and page-level presentation. The Voices archive and article styles are in `app/styles/pages/voices-archive.css`. |
| `next/font/google` | Loads DM Sans, Playfair Display, Source Serif 4, and Noto Sans Arabic from the root layout. |
| Node.js | Local development and build runtime; `fs/promises` reads MDX at build/render time. |

## Repository structure

Important paths in the current project:

```text
app/
  layout.tsx                         Root metadata, viewport, fonts, shared site chrome
  page.tsx                           Home page
  about/page.tsx                     About page
  campaigns/page.tsx                 Campaign section (kept separate from Voices migration)
  crisis-resources/page.tsx          Crisis resources
  donate/page.tsx                    Donation page
  get-involved/page.tsx              Get involved page
  resources/page.tsx                 Resources, including the existing #films section
  statement-on-anti-semitism/page.tsx Existing statement route retained for archive cross-link
  updates/page.tsx                   Updates page
  voices/page.tsx                    Curated Voices landing page
  voices/[slug]/page.tsx             Manifest-driven Voice details and legacy intro pages
  voices/archive/page.tsx            Overall Voices archive
  voices/categories/[category]/page.tsx Category archive, first page
  voices/categories/[category]/page/[page]/page.tsx Later archive pages
  styles/shared.css                  Shared site-level CSS
  styles/pages/*.css                 Page-specific CSS, including voices.css and voices-archive.css
components/
  site-nav.tsx                       Shared navigation, newsletter, and footer components
  animated-number.tsx                Reusable animated number presentation
  hero-carousel.tsx                  Reusable hero carousel
  mailing-list-button.tsx             Mailing-list action component
  scroll-spy.tsx                     Scroll-aware section/navigation helpers used by Voices
  updates-list.tsx                   Updates rendering component
  voices/category-archive.tsx        Shared category archive list and pagination UI
  voices/voice-detail.tsx            Shared article template and MDX/media rendering
content/voices/
  manifest.ts                        Typed entry records, archive collections, overall archive, redirects
  articles/*.mdx                     Migrated Voices page bodies and articles
  ...
data/updates.json                    Updates content data
assets/logo.png                      Source/project logo asset
public/assets/logo.png               Public logo served by the application
public/voices/images/                Migrated Voice images
public/voices/documents/             Migrated PDFs and downloadable documents
public/voices/audio/                 Migrated M4A recording
next.config.ts                       Redirects, rewrites, headers, and MDX package transpilation
package.json                         Dependencies and npm scripts
package-lock.json                    Locked dependency graph
postcss.config.mjs                   Tailwind/PostCSS configuration
README.md                            This architecture and onboarding guide
```

The route tree intentionally reflects the distinction between editorial detail pages and archive collections. The dynamic Voice detail route resolves article and legacy introduction records by their manifest slug; category archives have explicit routes of their own and do not replace those pages.

## Voices content architecture

### MDX bodies and typed manifest

`content/voices/articles/*.mdx` holds the migrated long-form content. Each document remains separate from its route and archive metadata so editors can work on copy without editing routing logic.

`content/voices/manifest.ts` defines and exports the content model and collections:

- `VoiceEntry` describes an individual page: a stable `id`, `slug`, title/source identity, source URL/path, canonical route, `kind`, categories, MDX `bodyFile`, linked documents, editorial notes, and optional audio.
- `VoiceCategoryArchive` describes each complete category list: the category slug, archive title and original archive path, `itemsPerPage`, and an ordered array of `VoiceArchiveItem` records.
- `overallVoiceArchive` describes the overall `/voices/archive/` collection independently of category membership.
- `voiceRedirects` explicitly maps captured WordPress paths to canonical destinations.

The manifest is the source of truth for generated article routes and category archive membership/order. Keep editorial text in MDX; update the manifest when routes, category membership, pagination placement, links, source metadata, or redirects change. Do not infer a record’s identity from its title: the original path and content role distinguish items that share titles.

### Introductory pages versus complete archives

Three existing legacy pages remain individual pages with their original content and routes:

- `/voices/gaza/` — the legacy Voices on Gaza introduction (`kind: "legacy-landing"`).
- `/voices/west-bank/` — the legacy Voices from the West Bank introduction.
- `/voices/may-2021/` — the legacy May 2021 introduction.

They are not the category archives. The category archives are separate complete, ordered collections:

- `/voices/categories/gaza/` and `/voices/categories/gaza/page/2/`
- `/voices/categories/west-bank/`
- `/voices/categories/may-2021/` and `/voices/categories/may-2021/page/2/`

The existing `/voices/` route is also intentionally distinct: it is a curated landing page with selected content and links, not an exhaustive archive. Its three “View All”/“View Archive” calls to action point to the corresponding category archive routes. The archive UI links back to its separate introductory page, clarifying the relationship without replacing either page.

`/voices/archive/` is a further, independent overall archive and contains the captured Birzeit statement entry. Do not treat it as a combined listing of all three category archives.

### Routes, pagination, and redirects

- **Article / migrated detail routes:** `/voices/[slug]/`, generated from `voiceEntries` using each entry’s `canonicalPath`. The dynamic route uses `generateStaticParams`, and unknown slugs return `notFound()`.
- **Legacy introduction routes:** served through the same detail route and template as articles, but remain separate manifest records with `kind: "legacy-landing"` and their own MDX bodies.
- **Category archives:** `/voices/categories/[category]/` renders page 1; `/voices/categories/[category]/page/[page]/` renders later pages. `generateStaticParams` builds valid categories and later page numbers from the manifest. `dynamicParams = false` prevents undeclared archive routes from being generated dynamically.
- **Pagination:** the manifest assigns every item to an explicit page, retaining source ordering and page membership. Gaza remains 10 + 4 entries; May 2021 remains 10 + 1; West Bank remains a single five-entry page. The template derives the page links and displayed item range from that data.
- **Redirects:** `next.config.ts` consumes `voiceRedirects` from the manifest and makes the mappings permanent. Keep explicit mappings for role-specific routes; the legacy `/voices/gaza/` intro, `/portfolio-item/voices-on-gaza/` detail, and `/portfolio_entries/voices-on-gaza/` category archive must remain distinct. The same distinction applies to May 2021 intro, article, and archive URLs.
- **Rewrites:** `next.config.ts` also maps legacy `.html` paths and `/index.html` to the corresponding App Router path.
- **Cross-links:** Films and Videos on Gaza points to the existing `/resources#films` section rather than duplicating the resource page. The May 2021 anti-Semitism archive entry links to `/statement-on-anti-semitism/`. These relationships are recorded in the archive manifest.

### Shared Voices components

- `components/voices/voice-detail.tsx` renders the article shell, breadcrumb, optional audio player, MDX body, and associated document links/PDF viewers. MDX links route through an accessible internal/external link renderer; external links open safely in a new tab. Images are lazy-loaded and decoded asynchronously.
- `components/voices/category-archive.tsx` is shared by all category archives. It renders breadcrumbs, archive title/count, ordered entries, archive/introduction context, and pagination with the current page identified using `aria-current`.
- `app/voices/[slug]/page.tsx` and the two category route files provide route data, metadata, static generation, and not-found handling. They delegate presentation to the components rather than duplicating the layout.

## Styling and design system

`app/layout.tsx` loads the site fonts, global CSS, shared CSS, common navigation/newsletter/footer, and document-level metadata and viewport settings. `app/styles/shared.css` contains shared site styling and tokens; `app/styles/pages/` contains page-specific stylesheets imported by each relevant route.

For the Voices section:

- `app/styles/pages/voices.css` styles the curated `/voices/` landing page.
- `app/styles/pages/voices-archive.css` styles the detail/article and archive templates, including responsive archive columns and single-column mobile layout.

Prefer modifying the component’s existing page-specific stylesheet when presentation is local to Voices. Put truly cross-page tokens or shared site chrome styling in `app/styles/shared.css`. Keep semantic HTML, clear focus/hover affordances, responsive sizing, and accessible labels in reusable components; avoid duplicating route markup merely to make a page-specific visual adjustment.

## Common developer tasks

### Add a new Voices article

1. Create `content/voices/articles/<stable-slug>.mdx` with the source text, headings, links, captions, and any needed media references. Preserve the supplied source faithfully; do not silently rewrite migrated editorial copy.
2. Add a `VoiceEntry` object to `voiceEntries` in `content/voices/manifest.ts`. Use a unique ID and slug, record the original source URL/path, set the canonical path to `/voices/<slug>`, select the appropriate `kind`, and set `bodyFile` to `articles/<stable-slug>.mdx`.
3. Add the entry to the relevant `VoiceCategoryArchive.items` array if it belongs in an archive. Place it at the correct source-order position and assign its page number according to the existing pagination. Add it to `overallVoiceArchive.items` only if the source archive includes it.
4. Copy only verified supplied media to `public/voices/images/`, `public/voices/documents/`, or `public/voices/audio/`; refer to those files with their public URL (for example `/voices/images/photo.jpg`). Keep unavailable media as its verified external link instead of creating a broken local path.
5. Add a specific `voiceRedirects` entry for the original WordPress URL to the canonical route. Avoid broad/title-derived redirects.
6. Run the checks below and inspect both the canonical page and the relevant archive page.

For a new legacy introductory page, use the same route/body model, set `kind: "legacy-landing"`, preserve its own canonical path and content, and do not add it to a category archive unless the source archive explicitly includes it.

### Add, remove, or reorder archive entries

Edit only the intended category’s `items` array in `content/voices/manifest.ts`. Each item includes the title, source URL, canonical `href`, page number, and slug. Preserve the source ordering. A category archive’s `itemsPerPage` value records its source page size; update page assignments and, when necessary, redirects together if source membership/pagination truly changes. Do not remove an article’s `VoiceEntry` or MDX body solely because it is omitted from one category list: the detail page may have other references or cross-links.

The archive template computes the total, current visible item range, and page navigation from these records. The archive routes’ static params also derive from the arrays, so no per-item page file is needed.

### Modify shared presentation

- Shared site header/footer/newsletter: `components/site-nav.tsx` and `app/styles/shared.css`.
- Curated Voices landing page: `app/voices/page.tsx` and `app/styles/pages/voices.css`.
- Article shell and MDX/media behavior: `components/voices/voice-detail.tsx` and `app/styles/pages/voices-archive.css`.
- Archive list, its intro cross-link, and pagination: `components/voices/category-archive.tsx` and `app/styles/pages/voices-archive.css`.

Keep archive membership and ordering in the manifest; keep prose in MDX; keep repeated UI in shared components. Avoid changing route metadata or archive collection structure for a styling-only task.

## Migration notes and content integrity

The current implementation retains the original selected `/voices/` landing-page content and its design, existing legacy introductions, migrated long-form copy, archive order/page breaks, media references and existing dedicated statement page. It adds explicit canonical article/archive routes, shared rendering, metadata/static route generation, and permanent WordPress redirect mappings.

The Gaza Films and Videos archive entry links to `/resources#films`, which already exists, to avoid maintaining duplicate resource content. The May 2021 anti-Semitism item reuses the existing statement route. Missing source files remain external links where the source supplied a working URL; no replacement media or content should be invented. The Hanan Abubasheer title/source URL mismatch is preserved and recorded in `editorialNotes` for later editorial clarification.

`app/campaigns/` and its stylesheet are outside the Voices migration scope. Keep Campaign changes separate from content/archive work unless a task explicitly asks for them.

## Install, run, build, and validate

Use the repository root (`/vercel/share/v0-project` in the v0 workspace):

```bash
npm ci                 # install the locked dependency set
npm run dev            # start the Next.js development server
npx tsc --noEmit       # check TypeScript without emitting files
npm run build          # create and validate the production build
npm start              # serve the production build after npm run build
```

`package.json` currently defines `dev`, `build`, and `start`; it does not define dedicated `lint` or `test` scripts. There is no separate test runner configured. For content/archive changes, additionally verify:

- The relevant `/voices/` CTA points to `/voices/categories/<category>/`, while `/voices/gaza/`, `/voices/west-bank/`, and `/voices/may-2021/` still load their introduction content.
- Category totals and ordering match `voiceCategoryArchives`; confirm pagination membership (Gaza 10 + 4, May 2021 10 + 1, West Bank 5).
- Article links resolve, the statement cross-link remains `/statement-on-anti-semitism/`, and Films and Videos resolves to `/resources#films`.
- Redirect source/destination pairs do not loop and role-distinct routes resolve to the correct destination.
- Local media/document paths exist under `public/voices/`; unavailable source files remain valid external references.

For ordinary changes, start with the narrow type check and relevant route/preview review. Run the production build when the change affects routing, MDX compilation, dependencies, or build behavior. Never treat a missing script as a passing check; report any check that could not be run.

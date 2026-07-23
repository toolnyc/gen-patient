# Generation Patient 2025 Annual Report implementation specification

## 1. Purpose

Build a standalone public microsite for the Generation Patient 2025 Annual Report using Next.js, TypeScript, Sanity, and Vercel. The result must be:

- one story-driven scrolling report at `/`;
- editable by a non-technical content editor through one structured Sanity document;
- statically generated from published Sanity content;
- paired with a high-fidelity, downloadable US Letter PDF generated from the same content;
- responsive from narrow mobile through wide desktop;
- enhanced with restrained motion, without becoming a dashboard.

This specification is implementation-ready except for the decisions explicitly assigned to the design-lock or setup phases.

## 2. Authority and superseded decisions

Use sources in this order when they conflict:

1. Explicit approved repository decisions, including this specification.
2. [`content-source.md`](content-source.md).
3. Explicitly approved high-fidelity concepts and official assets in Figma.
4. The exploratory prototype in `prototype/annual-report`.
5. Other visual references and past samples.

Production code implements approved decisions but does not override them.

This specification supersedes these earlier directions where they conflict:

- there is no Sanity draft preview or visual-editing integration;
- visitors receive a stored PDF download, not a browser-print feature;
- the web app is a Next.js static export, with no request-time content rendering;
- editorial-review items warn but do not block launch;
- accessibility and performance are best effort, without a named compliance level or numeric budget;
- visual review is manual, not screenshot-regression automation.

Never invent or silently alter metrics, quotations, names, links, permissions, or program claims. Continue tracking uncertainty in [`editorial-review.md`](editorial-review.md).

## 3. Scope

### 3.1 In scope

- The 2025 report only.
- A single English (`en-US`) report page.
- Stable, shareable anchors for every major section.
- Desktop sticky chapter navigation.
- A compact, keyboard-operable chapter index on mobile.
- An intentionally designed tablet layout.
- Restrained reveals, type transitions, active navigation state, and optional metric count-up.
- One Sanity-hosted Studio containing one grouped report singleton.
- Fixed sections and fixed item slots in source-document order.
- Copy, structured metrics, optional links, and optional editorial images editable in Sanity.
- Sanity image hotspot and crop controls.
- A stable downloadable PDF generated during every production build.
- Designed non-photographic fallbacks for absent editorial images.
- Manual responsive and PDF visual QA.

### 3.2 Out of scope

- Astro.
- Multi-year content modeling or a year selector.
- A page builder or editor-controlled layout.
- Adding, deleting, or reordering sections or item slots.
- Draft preview, Sanity Presentation, click-to-edit, or custom approval workflows.
- A visitor-facing print route or browser-print control.
- Search, forms, user accounts, comments, video management, live data, or external data feeds.
- Complex charts or dashboard-style interactions.
- Analytics, tracking pixels, advertising, cookie consent, or behavioral telemetry.
- A public PDF archive.
- GitHub Actions or another separate CI service.
- Formal accessibility certification.
- Custom CMS authentication or role administration.

## 4. Design lock

Production implementation must not begin until the design is approved.

### 4.1 Baseline

Variant D, “Split Signal System,” is the selected direction. It is a visual baseline, not a production specification. Its current 18-page PDF is stale, incomplete, and does not lock the final page count.

The existing dependency-free prototype remains throwaway design code. Do not evolve it into the production application.

### 4.2 Required prototype coverage

Elaborate `prototype/annual-report` into a complete whole-report prototype that:

- renders every source section in the order defined in Section 9;
- covers 320px minimum width and explicit review widths of 375px, 768px, and 1440px;
- includes the complete US Letter portrait treatment;
- demonstrates desktop, tablet, and mobile chapter navigation;
- demonstrates every motion pattern and its reduced-motion state;
- demonstrates supplied-image and no-image states;
- contains no placeholder copy, mock photography, or fake credits;
- uses the approved static state for all PDF content.

Figma may elaborate selected high-fidelity concepts, components, or assets. It is not required to represent the whole report.

### 4.3 Design-lock record

At approval, record the following in a repository design-decision document:

- final section-to-page composition;
- approved PDF page count or exact accepted range;
- color, spacing, grid, border, layering, and breakpoint tokens;
- typography roles, type scales, line lengths, and responsive behavior;
- licensed font families, files, weights, and fallback stacks;
- styling approach and any styling dependency;
- motion implementation approach, durations, easing, triggers, and reduced-motion behavior;
- navigation behavior at desktop, tablet, and mobile sizes;
- image aspect ratios, crops, masks, captions, credits, and empty-state treatments;
- page-break, widow, orphan, and overflow rules;
- any intentional semantic, contrast, or keyboard-access exceptions;
- the manual visual-QA checklist.

Styling and motion libraries remain undecided until this gate. Prefer no dependency when platform CSS and small client components are sufficient.

## 5. System architecture

### 5.1 Repository shape

Use a pnpm workspace:

```text
apps/
  studio/                 Sanity Studio configuration and deployment entry
  web/                    Next.js App Router static site
packages/
  content/                Shared schemas, query, generated types, and mapping
scripts/
  seed-content.ts         Idempotent initial-content seed
prototype/
  annual-report/          Throwaway design prototype
docs/
```

Use package names such as:

- `@generation-patient/web`
- `@generation-patient/studio`
- `@generation-patient/content`

The shared content package owns:

- Sanity schema definitions and reusable object types;
- the singleton document ID and type name;
- the explicit GROQ projection;
- Sanity TypeGen output;
- runtime validation;
- the CMS-to-render-model mapper;
- normalized text extraction used by parity tests.

The Studio imports schemas from this package. The web app imports only query, generated types, validation, and mapping exports that are safe in a build process.

### 5.2 Deployments

- `apps/web` deploys to one Vercel project.
- `apps/studio` deploys separately using Sanity-hosted Studio.
- Both use one Sanity project and one production dataset.
- The dataset exposes published content publicly. Drafts still require authenticated Sanity access.
- The production site launches on its assigned `vercel.app` hostname.

The exact Vercel project slug, Sanity project ID, and Studio hostname are setup-time values.

### 5.3 Runtime model

The public deployment is immutable:

1. Sanity publishes the singleton.
2. A filtered webhook invokes a Vercel Deploy Hook.
3. `next build` fetches the published singleton and creates a static export.
4. the release script serves that export locally;
5. Playwright renders the internal PDF source;
6. structural release checks run;
7. Vercel promotes the complete static output only if every step succeeds.

Visitors make no Sanity content API requests. Browser requests to Sanity's image CDN are allowed.

If fetching, mapping, static generation, PDF generation, or structural validation fails, the build exits nonzero and the previous Vercel deployment remains public.

## 6. Web application

### 6.1 Next.js constraints

Use the App Router with `output: "export"`.

The implementation must not depend on features unavailable to static export:

- cookies or request headers;
- Draft Mode;
- Server Actions;
- ISR or on-demand revalidation;
- request-time Route Handlers;
- request-time redirects or rewrites;
- the default server-backed Next.js image optimizer.

Server Components may fetch and render content during `next build`. Client Components are allowed for narrowly scoped navigation and motion behavior.

Fetch Sanity with:

- the published perspective;
- a pinned API date;
- `useCdn: false` during release builds, so a deploy triggered by publishing reads the Content Lake API rather than a potentially stale edge cache;
- an explicit projection, never `*` or an unrestricted document spread.

Validate and map the result before rendering. Missing singleton data or a contract violation is a build error.

### 6.2 Routes

| Path | Purpose | Public navigation | Search indexing |
| --- | --- | --- | --- |
| `/` | Annual report | Yes | Yes |
| `/print/` | Internal HTML source for Playwright | No | No |
| `/generation-patient-2025-annual-report.pdf` | Generated PDF | Download link only | Not specified |

Do not add other product routes. Normal framework-generated not-found behavior is sufficient.

The print route must set `noindex, nofollow` metadata. It may remain technically reachable, but it is not a supported visitor feature.

### 6.3 Metadata

Keep page title, description, canonical URL, Open Graph data, social image, robots directives, and PDF title in code. Editors cannot change them.

The final metadata copy and `vercel.app` hostname must be approved and hard-coded before launch. Do not invent missing metadata copy.

Provide static `robots.txt` behavior appropriate for the root report and excluded print source. A sitemap is optional for this single-route site.

### 6.4 Rendering contract

Create one validated `AnnualReportViewModel` from the Sanity document. Web and PDF presentation must consume this same value.

Use presentation variants rather than separate content mappings:

```ts
type ReportMode = "web" | "pdf";

type AnnualReportViewModel = {
  revision: string;
  updatedAt: string;
  sections: ReportSections;
};
```

The web and PDF may use different composition components when high-fidelity print requires it, but neither may query, reshape, or maintain copy independently.

Recommended top-level boundaries:

```text
AnnualReport
  ReportHeader
  ChapterNavigation
  CoverSection
  AtAGlanceSection
  KeyResultsSection
  ThankYouSection
  LookingForwardSection
  WorkInDepthSection
    PeerSupportSection
    HealthPolicyLabSection
    CommunitySpotlightSection
    RoundtablesSection
    GlobalConsensusSection
    CcyanSection
    PolicyParticipationSection
    MediaCoverageSection
  DonorsSection
  ReportFooter
  PdfDownload
```

Section IDs are code-owned constants and must remain stable after launch.

### 6.5 Motion

Allowed motion:

- active chapter-state transitions;
- subtle reveal and typographic transitions;
- optional metric count-up;
- simple decorative motion approved at design lock.

Requirements:

- the report is complete and understandable before client JavaScript runs;
- controls remain keyboard operable;
- `prefers-reduced-motion: reduce` removes nonessential movement;
- PDF mode renders final states immediately;
- motion must not alter source order or hide content from the PDF.

Do not add complex explorable data views unless this specification is revised.

### 6.6 Responsive behavior

Support:

- 320px minimum width;
- explicit visual acceptance at 375px;
- an intentionally composed 768px tablet layout;
- explicit visual acceptance at 1440px;
- coherent layouts above 1440px without unbounded line lengths.

Support the current and previous major versions of Chrome, Safari, Firefox, and Edge, plus current iOS Safari.

## 7. Images and fonts

### 7.1 Editorial images

Every fixed editorial image slot is optional. When an image is absent, render the approved non-photographic fallback for that slot.

An image object supports:

```ts
type EditorialImage = {
  image: SanityImageWithHotspotAndCrop;
  alt?: string;
  caption?: string;
  credit?: string;
};
```

Alt text, captions, and credits remain optional by explicit decision. The UI must not invent any of them.

Use Sanity image URLs with explicit dimensions, fit, quality, and format. Generate responsive candidates and preserve hotspot/crop intent. Avoid downloading a full-resolution original when a smaller transformed image is sufficient.

Mock photographs, fake credits, and temporary image labels cannot ship. An approved designed fallback may ship.

### 7.2 Required static assets

The following are required before launch:

- durable official logo/wordmark files;
- the hard-coded social-sharing image;
- any code-owned fallback graphics approved at design lock.

Do not rely on temporary Figma MCP asset URLs.

### 7.3 Fonts

Select and license final font families during design lock. Self-host the exact production files. Subset only when licensing permits and required glyph coverage remains intact.

The web must use deterministic local font URLs. PDF generation waits for `document.fonts.ready` and fails if required font faces do not load. Playwright must capture real text, not rasterized page images.

## 8. Sanity Studio

### 8.1 Singleton

Use:

```text
document type: annualReport2025
document ID: annual-report-2025
```

The Studio structure exposes one item labeled “2025 Annual Report.” Remove generic create, duplicate, and delete actions for this type.

Use one document, grouped in source order. Each major source section is a field group or equivalent clearly labeled editing area. Nested fixed objects may be collapsible.

### 8.2 Editorial controls

Editors may:

- edit required copy;
- use constrained rich text in body fields;
- edit structured metrics;
- edit optional external-link labels and URLs;
- upload or replace optional fixed-slot images;
- set hotspot and crop;
- edit optional alt text, caption, and credit;
- publish the singleton.

Editors may not:

- add, remove, or reorder sections;
- add, remove, or reorder fixed result, priority, quote, category, media, or donor slots;
- change layout, colors, typography, motion, anchors, or metadata;
- create another annual report.

Avoid editable arrays for fixed slots. Model them as named objects or named fields. This makes item count and order structural rather than relying on array validation or drag-order restrictions.

### 8.3 Rich text

Use constrained Portable Text only for long-form body copy.

Allowed:

- paragraphs;
- strong and emphasis marks;
- ordered and unordered lists;
- external links;
- source-required inline quotations.

Do not expose arbitrary heading levels inside body fields, tables, code, embedded media, layout blocks, colors, alignment, or custom components unless the design-lock record explicitly requires one.

Headings, labels, image captions, image credits, quote text, quote attribution, and short callouts use plain strings.

### 8.4 Validation

Errors block publishing when:

- required core copy is empty;
- a fixed object is missing;
- a structured metric has an invalid numeric value or format;
- a supplied URL is malformed or not `https` except for an explicitly approved scheme;
- Portable Text contains a disallowed block or annotation;
- a short field exceeds a hard limit established at design lock.

Warnings do not block publishing when:

- an optional link is absent;
- an editorial image or its metadata is absent;
- body copy exceeds a tested design-length guideline;
- an item in `editorial-review.md` remains unresolved;
- a factual source or permission still needs confirmation.

Surface known editorial warnings through field descriptions or a document-level Studio notice that points editors to `editorial-review.md`. The Markdown file remains the source of truth; the Studio does not attempt to infer whether a factual or permission question has been resolved.

All links, including the donation link, are optional. Components render non-linked text or omit the action when a URL is absent. Never render an anchor with an empty or placeholder destination.

## 9. Fixed content schema

The schema follows [`content-source.md`](content-source.md) exactly. The names below describe fixed CMS slots, not editable route or layout configuration.

### 9.1 Reusable field types

```ts
type StructuredMetric = {
  value: number;
  qualifier?: "more-than" | "approximately" | "at-least" | "none";
  prefix?: string;
  suffix?: string;
  unit?: string;
  label: string;
  accessibleLabel?: string;
};

type ExternalLink = {
  label: string;
  url?: string;
};

type Quote = {
  text: string;
  attribution?: string;
  role?: string;
};
```

`prefix` and `suffix` are limited presentation tokens such as `$`, `+`, `%`, or `/5`, not freeform replacement copy. `accessibleLabel` may provide a natural-language reading of compact notation.

Each section image uses `EditorialImage` from Section 7.

### 9.2 Cover

- organization name;
- report title;
- optional cover image.

### 9.3 2025 at a Glance

#### Who we are

- section heading;
- subsection heading;
- opening body;
- organization-origin body;
- optional image.

#### How we create change

- subsection heading;
- introductory sentence;
- direct-support label;
- two fixed direct-support bullet slots;
- systems-change label;
- four fixed policy-priority label slots;
- one fixed roundtables bullet slot;
- one fixed publications bullet slot;
- synthesis statement;
- direct-support numbered explanation;
- systems-change numbered explanation.

### 9.4 Key results in 2025

- section heading;
- direct-support heading;
- three fixed direct-support result slots;
- systems-change heading;
- eight fixed systems-change result slots.

Each result slot contains:

- exact result statement as constrained Portable Text;
- design-approved structured metric callouts stored in named fixed fields;
- optional evidence link;
- optional image only if the design lock assigns that slot one.

The statement remains the authoritative editorial sentence. A displayed metric callout is a structured presentation of a value from that statement and must not replace or materially rewrite it.

The fixed callout inventory is:

- direct-support result 1: groups, patients, facilitators;
- direct-support result 2: reduced-isolation response, satisfaction response;
- direct-support result 3: fellows, outputs, satisfaction rating, alumni;
- systems-change result 2: warning letters, untitled letters;
- systems-change result 5: roundtables, published papers;
- all other result slots: no metric callout unless the design lock explicitly approves one already present in the source.

### 9.5 Thank you

- section heading;
- body;
- optional image.

### 9.6 Looking Forward

- section heading;
- opening body;
- priorities heading;
- four fixed 2026 priority slots;
- help heading;
- help body;
- optional donation-link label and URL;
- optional image.

### 9.7 Our Work in Depth

- section heading.

#### Peer Support

- subsection heading;
- two fixed opening body blocks;
- four fixed group-category metric slots: general, higher education, IBD, international;
- patient-total metric;
- new-participant metric;
- returning-participant metric;
- community-quotes introduction;
- three fixed community quote slots;
- evidence/publication body;
- five fixed optional resource-link slots: guidance, checklist, toolkit, proceedings, roadmap;
- optional peer-support study link;
- optional image.

#### Health Policy Lab

- subsection heading;
- introduction;
- four fixed priority objects in this order:
  1. patent reform;
  2. deceptive drug advertising;
  3. clinical trials;
  4. AI companion tools.

Each priority contains:

- number;
- title;
- body;
- one optional featured quote;
- named optional evidence-link slots:
  - patent reform: ETHIC Act announcement, PERA, PREVAIL Act, and DOJ/FTC session or report;
  - deceptive drug advertising: Protecting Patients from Deceptive Drug Ads Act and FDA enforcement;
  - clinical trials: PDUFA, MDUFA, and GDUFA;
  - AI companion tools: FDA Digital Health Advisory Committee remarks and submitted comments;
- optional image only when assigned at design lock.

#### Community Spotlight: Peyton Miles

- subsection heading;
- subject name;
- narrative body;
- featured quote;
- optional portrait.

#### Convening Experts and Decision-Makers Through Roundtables

- subsection heading;
- body;
- session-total metric;
- seven fixed topic labels in source order;
- three fixed optional publication-link slots;
- optional image.

The body retains the complete uninterrupted source prose. Topic labels and the session metric are supplemental callouts and do not replace words inside the body.

#### Building Global Consensus

- subsection heading;
- body;
- three fixed partner-organization labels;
- fixed optional proceedings link;
- optional image.

The body retains the complete uninterrupted source prose. Partner labels are supplemental callouts and do not replace the partner names in the body.

#### CCYAN: A Global Model

- subsection heading;
- body;
- fixed metric slots for program year, fellows, outputs, site visits, satisfaction, and alumni;
- featured quote;
- optional CCYAN link;
- optional image.

The body retains the complete uninterrupted source prose. Metric fields are supplemental callouts and do not replace metric wording in the body.

#### In the Rooms Where Decisions Happen

- subsection heading;
- body;
- five named optional source-link slots: DOJ/FTC listening session, World Economic Forum appearance, FDA PDUFA oral statement, PDUFA stakeholder meetings, and UN High-Level Meeting side event;
- optional image.

#### Selected 2025 media coverage

- subsection heading;
- three fixed categories in source order:
  1. drug pricing and patent reform, with six fixed item slots;
  2. FDA oversight and drug advertising, with four fixed item slots;
  3. recognition and community leadership, with two fixed item slots.

Each category has an editable heading string.

Each media slot contains:

- title;
- source/publication label;
- optional context;
- optional URL.

### 9.8 Our Donors

- section heading;
- independence statement;
- eight fixed donor slots in supplied order.

Each donor slot contains:

- display name;
- optional URL;
- optional logo only if donor-logo treatment is approved at design lock.

## 10. Query, generated types, and runtime validation

Use one explicit GROQ query for the singleton. Project only fields consumed by the render model, plus `_id`, `_rev`, and `_updatedAt`.

Use Sanity TypeGen to generate source types from the schema and query. Generated types do not replace runtime validation.

Use Zod for the build-time content boundary:

1. fetch the projected document;
2. parse it with the runtime schema;
3. convert it to `AnnualReportViewModel`;
4. validate fixed-slot completeness and render invariants;
5. fail with field-path-specific errors.

Do not use Zod inside browser bundles.

The mapper is the only place that translates CMS values into render values. Components must not contain fallback report copy.

## 11. Initial content seed

Provide `scripts/seed-content.ts`.

Requirements:

- use the fixed singleton ID and schema shape;
- map the supplied source into every fixed field without editorial rewriting;
- create a draft for Studio review rather than publishing automatically;
- require a local `SANITY_WRITE_TOKEN`;
- refuse to overwrite an existing draft or published singleton unless an explicit, separately documented force flag is supplied;
- produce the same document when run repeatedly against an empty dataset;
- report unresolved editorial items without changing them;
- never commit exported data or credentials.

The mapping may use reviewed structured source constants derived from `content-source.md`. Do not build a fragile general-purpose Markdown-to-Sanity importer.

Local command:

```sh
pnpm seed:content
```

## 12. PDF generation

### 12.1 Output contract

Generate:

```text
apps/web/out/generation-patient-2025-annual-report.pdf
```

Requirements:

- US Letter portrait;
- approved pagination from design lock;
- high-fidelity colors, backgrounds, typography, images, and page breaks;
- searchable and selectable text;
- clickable HTML links when a URL is supplied;
- embedded self-hosted fonts;
- hard-coded document title metadata;
- tagged output and document outline enabled where supported by the pinned Playwright/Chromium version;
- no browser header or footer;
- no visitor navigation, motion, hover-only state, or interactive controls.

The stable public URL has no release number. Vercel deployment history supplies rollback; there is no public archive.

### 12.2 Build sequence

The web release command must:

1. install or locate a Chromium binary proven compatible with Vercel's build image;
2. fetch, validate, and statically render the report with `next build`;
3. start a programmatic local HTTP server rooted at `apps/web/out`;
4. open `/print/` in Playwright Chromium;
5. emulate print media;
6. wait for the document load, required images, `document.fonts.ready`, and an explicit `data-pdf-ready="true"` signal;
7. call `page.pdf()` with Letter size, backgrounds, CSS page-size preference, tagging, and outline options supported by the pinned version;
8. close the browser and HTTP server in `finally` blocks;
9. run PDF structural checks;
10. exit nonzero on any failure.

Use a small programmatic server based on `serve-handler`, bound to an ephemeral loopback port. Do not rely on shell background-process management.

Do not assume the default Playwright browser bundle can run in Vercel's build image. Use `playwright-core` with a pinned Vercel-compatible Chromium distribution such as `@sparticuz/chromium`, after proving the exact versions in a deployment spike. The release architecture is not accepted until that spike generates and validates a PDF inside a Vercel build. If the selected binary cannot run there, stop and revise this specification rather than silently moving generation to a non-atomic workflow.

The print stylesheet owns `@page`, page breaks, print color adjustment, and static interaction states. Do not capture screenshots and assemble them into a PDF.

### 12.3 Structural checks

Use Vitest plus a maintained PDF parser selected during implementation. Validate only capabilities the parser can reliably inspect.

Required automated checks:

- file exists and exceeds a design-lock minimum size;
- parser can open the file;
- text extraction returns substantial selectable content;
- approved page count or range matches;
- every major section heading is present;
- a normalized text manifest generated from `AnnualReportViewModel` matches required PDF text after documented normalization;
- hard-coded metadata is present when the renderer/parser reliably exposes it;
- no placeholder copy markers are present.

Check clickable-link annotations if the selected parser exposes them reliably. Otherwise verify links manually and do not claim automated coverage.

Do not compare raw HTML text directly to raw PDF extraction. Normalize whitespace, typographic punctuation, list markers, and deliberate presentational repetitions through one tested normalizer.

## 13. Publishing and deployment

### 13.1 Sanity webhook

Create one GROQ-powered webhook:

```groq
_type == "annualReport2025" && _id == "annual-report-2025"
```

Configure it for published document changes only, with drafts disabled, and point it at the Vercel production Deploy Hook. Treat the Deploy Hook URL as a secret stored in Sanity's webhook configuration, not in the repository.

No custom webhook endpoint or Studio release-status integration is required.

### 13.2 Vercel

Configure the Vercel project at the workspace root:

- install command: `pnpm install --frozen-lockfile`;
- build command: the workspace release script;
- output directory: `apps/web/out`;
- production branch: `main`;
- Node.js: a supported LTS version pinned in project configuration;
- package versions: exact in `pnpm-lock.yaml`.

Vercel email and deployment status provide publishing feedback.

### 13.3 Environment variables

Web build:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION
```

These values contain no write capability. The public dataset does not require a read token.

The production hostname is a code constant used by hard-coded metadata, not an editor field or runtime environment override. Update and review it when the Vercel project slug is assigned.

Local seed only:

```text
SANITY_WRITE_TOKEN
```

Studio uses the project ID and dataset in its deployment configuration. Keep all credentials and Deploy Hook URLs out of client code and version control.

## 14. Quality requirements

### 14.1 Accessibility, best effort

Even without a named conformance target:

- use semantic landmarks and ordered headings;
- include a keyboard-reachable skip link;
- make chapter navigation operable by keyboard and touch;
- preserve visible focus;
- avoid preventable contrast failures;
- do not rely on color alone;
- respect reduced motion;
- keep source and reading order coherent;
- use native links and buttons correctly;
- mark decorative fallback artwork appropriately;
- use supplied alt text when present.

Alt text remains optional by explicit decision.

### 14.2 Performance, best effort

- statically render content;
- minimize client-component boundaries;
- avoid shipping Sanity, Zod, or PDF tooling to browsers;
- size responsive images appropriately;
- lazy-load below-fold images;
- preload only critical font files;
- avoid animation libraries unless design lock demonstrates value.

There is no numeric Lighthouse or Core Web Vitals release gate.

### 14.3 Privacy and security

- no analytics or tracking;
- no write-capable token in the web app;
- no secrets in `NEXT_PUBLIC_*` variables;
- no inferred enrichment of health stories, quotations, donors, or permissions;
- external URLs are escaped and rendered through framework primitives;
- links opened in a new tab use appropriate `rel` values;
- dependencies and lockfile are reviewed before release.

## 15. Validation

### 15.1 Local commands

The workspace must expose:

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build:release
```

`build:release` must perform static generation, PDF generation, and structural PDF validation exactly as Vercel does.

Use:

- ESLint for source linting;
- TypeScript for all workspace packages;
- Vitest for content mapping, validation, normalization, and release-script units;
- Playwright Chromium for PDF generation and focused browser smoke tests;
- Zod for build-time CMS validation;
- `serve-handler` for the local release server;
- a maintained PDF parser chosen after proving its required inspection capabilities.

Pin exact compatible versions in the lockfile during implementation.

### 15.2 Required automated coverage

- singleton query projection and runtime parsing;
- fixed-slot validation;
- structured metric formatting;
- Portable Text rendering of allowed marks and links;
- absent optional link behavior;
- supplied-image and designed-fallback mapping;
- stable section IDs;
- reduced-motion and PDF-mode final-state logic where testable without screenshots;
- seed refusal/idempotency behavior;
- release server cleanup on success and failure;
- PDF structural checks from Section 12.

### 15.3 Manual visual QA

Automated screenshot comparison is out of scope.

Before launch, manually approve:

- 320px minimum behavior;
- 375px mobile;
- 768px tablet;
- 1440px desktop;
- current and previous Chrome, Safari, Firefox, and Edge;
- current iOS Safari;
- all supplied-image and no-image states;
- keyboard navigation and focus states;
- reduced-motion behavior;
- final US Letter PDF at 100% zoom;
- every page break, overflow, widow, orphan, image crop, font, color, and link;
- web/PDF content parity;
- absence of mock photography, fake credits, and placeholder copy.

Editorial-review warnings do not block launch, but they must remain visible and must not be silently resolved by implementation.

## 16. Delivery phases

### Phase 1: design elaboration

- complete the throwaway prototype;
- use Figma only for selected high-fidelity concepts;
- approve responsive, motion, image-fallback, and complete PDF treatments;
- record all design-lock outputs.

**Gate:** explicit whole-report prototype approval.

### Phase 2: workspace and content contract

- create pnpm workspace;
- configure shared schemas, Studio singleton, query, TypeGen, and Zod boundary;
- implement fixed field groups and validation;
- implement and test the seed script;
- seed the draft and review field mapping.
- prove Playwright with the pinned Vercel-compatible Chromium binary in a Vercel build using a representative print fixture.

**Gate:** the entire supplied source maps to fixed fields without invention or omission, and the target Vercel build image can generate and validate a representative PDF.

### Phase 3: production web

- implement the approved component system;
- implement responsive layouts and stable anchors;
- implement chapter navigation and restrained motion;
- implement image transforms and fallbacks;
- implement hard-coded metadata.

**Gate:** complete static report passes local validators and manual viewport review.

### Phase 4: PDF and release

- implement the internal print source and print styles;
- implement Playwright generation and structural checks;
- configure Vercel output and Sanity Deploy Hook;
- test successful and intentionally failed releases.

**Gate:** web and PDF deploy atomically, and failure preserves the prior deployment.

### Phase 5: launch QA

- publish reviewed Sanity content;
- run all local validators;
- complete manual browser and PDF QA;
- verify production anchors, optional-link states, image fallbacks, and PDF download;
- launch on the configured `vercel.app` domain.

## 17. Acceptance criteria

The project is complete when:

1. `/` contains every supplied report section in source-document order.
2. Major sections have stable, shareable anchors and working chapter navigation.
3. The site is coherent at 320px and approved at 375px, 768px, and 1440px.
4. Motion is restrained, progressively enhanced, and removed for reduced-motion and PDF modes.
5. One grouped Sanity singleton exposes only approved copy, metric, link, and image controls.
6. Editors cannot add, remove, or reorder sections or fixed item slots.
7. Required content errors block publishing; optional links, images, metadata, and editorial issues warn only.
8. The initial seed maps the supplied source without inventing or silently correcting content.
9. The web build fetches published Sanity content once, validates it, and emits static output.
10. Missing or invalid CMS content fails the build and leaves the prior deployment live.
11. The PDF is generated from the same validated view model as the web report.
12. The PDF is US Letter portrait, high fidelity, searchable, selectable, linked, and uses embedded fonts.
13. The public PDF uses the stable specified URL and has no public version archive.
14. PDF generation or structural validation failure blocks the entire Vercel deployment.
15. Optional editorial images render either approved content or approved non-photographic fallbacks.
16. No mock photography, fake credits, placeholder copy, analytics, tracking, or secrets ship.
17. Local lint, type-check, tests, and release build pass.
18. Manual responsive, browser, keyboard, reduced-motion, and PDF QA is approved.

## 18. Inputs still required

### Setup

- Sanity project ID.
- Sanity-hosted Studio hostname.
- Vercel project slug and resulting production hostname.
- Sanity Deploy Hook configuration.
- approved hard-coded metadata copy and social image.
- durable official logo/wordmark assets.

### Design lock

- complete approved prototype;
- final typography and licensed self-hosted font files;
- styling and motion approach;
- final tokens and responsive rules;
- final image-slot and fallback treatments;
- final PDF composition, page-break rules, and accepted page count or range;
- final section-anchor list;
- manual visual-QA checklist.

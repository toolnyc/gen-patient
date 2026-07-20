# Generation Patient Annual Report

## Project status

This repository currently contains project context only. Do not scaffold or implement the application until the user explicitly requests it.

## Product

Build a standalone, public 2025 annual-report microsite for Generation Patient. The eventual experience should be:

- a single, story-driven scrolling website;
- editable by one non-technical administrator through Sanity;
- printable through a dedicated browser print layout;
- downloadable as a PDF generated from the same content and print route;
- enhanced with restrained editorial data interactions and static print fallbacks.

Read these files before proposing or making changes:

- [`docs/product-brief.md`](docs/product-brief.md)
- [`docs/architecture.md`](docs/architecture.md)
- [`docs/content-source.md`](docs/content-source.md)
- [`docs/editorial-review.md`](docs/editorial-review.md)

## Agreed direction

- Future stack: Next.js, TypeScript, Sanity, and Vercel.
- Content structure: fixed section fields, not a freeform page builder.
- Media editing: images only. Editors replace section images; placement remains controlled by the design.
- Design: preserve the official logo and brand colors while extending the visual language with the expressive editorial composition in the R0 drafts.
- Publishing: one administrator with draft preview and publishing access.
- PDF: regenerate and store a matching PDF whenever published content is deployed.
- Analytics: none.
- Accessibility: no formal compliance target. Still use sound semantic HTML and avoid preventable barriers unless that conflicts with an approved design decision.
- Reuse for later annual reports: deferred until after launch. Do not add multi-year architecture without approval.

## Source hierarchy

When sources disagree, use this order and surface the conflict:

1. Explicit user decisions recorded in this repository.
2. Supplied 2025 report copy in [`docs/content-source.md`](docs/content-source.md).
3. Official brand materials in Figma.
4. R0 Figma drafts.
5. Visual references and past samples.

Never invent metrics, quotations, names, links, or program claims. Fix obvious mechanical typos only. Record factual uncertainty in [`docs/editorial-review.md`](docs/editorial-review.md) instead of silently correcting it.

## Figma sources

- [Visual references](https://www.figma.com/design/wTCZstmHxSAQjfgBTitnur/Gen-Patient?node-id=0-98&m=dev)
- [Brand files](https://www.figma.com/design/wTCZstmHxSAQjfgBTitnur/Gen-Patient?node-id=0-114&m=dev)
- [R0 reference drafts](https://www.figma.com/design/wTCZstmHxSAQjfgBTitnur/Gen-Patient?node-id=0-4&m=dev)
- [Past samples](https://www.figma.com/design/wTCZstmHxSAQjfgBTitnur/Gen-Patient?node-id=0-109&m=dev)

Use the Figma MCP tools to inspect exact nodes and assets. Do not treat generated Figma code as production code.

## Engineering guardrails

- Confirm the current repository structure and conventions before coding.
- Keep web, print, and generated PDF content sourced from the same Sanity document.
- Keep interactive visuals editorial and purposeful, not dashboard-like.
- Every interactive data view needs a legible static print representation.
- Preserve content readability across narrow screens and print pages even when adapting expressive layouts.
- Avoid tracking scripts, advertising pixels, and cookie banners.
- Keep secrets server-side and never commit Sanity or Vercel credentials.
- Add tests with implementation and run the repository's lint, type-check, test, and relevant print/PDF checks before completion.

# Architecture direction

## Status

This is the agreed technical direction, not an implementation specification. The repository is intentionally documentation-only until implementation is requested.

## Proposed platform

| Concern | Direction |
| --- | --- |
| Web application | Next.js with TypeScript |
| Content management | Sanity |
| Hosting and deployment | Vercel |
| Web experience | Single scrolling report with anchored chapters |
| Print | Dedicated print route and print stylesheet |
| Downloadable PDF | Generated from the print route on publish |
| Analytics | None |

## System boundaries

### Next.js application

The application will render:

- the public annual report;
- section anchors and navigation;
- editorial data interactions;
- static print alternatives;
- a dedicated print representation;
- Sanity draft preview.

Web and print output must use one content mapping layer. Do not maintain duplicated web and PDF copy.

### Sanity

Sanity will hold one 2025 annual report document with fixed section fields. It is not a freeform page builder.

Expected field groups include:

- report metadata and SEO;
- cover and introduction;
- organization overview;
- direct support and systems change summaries;
- headline results and metrics;
- peer support detail;
- Health Policy Lab priorities;
- community spotlight;
- roundtables and global consensus;
- CCYAN;
- policy participation and media coverage;
- looking forward and donation call to action;
- donors.

Image fields should support replacement in predetermined section slots. Video and editor-controlled layout are out of scope. Exact image metadata requirements should be decided during schema design.

### Vercel

Vercel will host the Next.js application and receive publish-triggered deployments. Production configuration must keep tokens and CMS credentials out of the client bundle and repository.

## Rendering model

Prefer static-first rendering for the public report:

1. The administrator edits and previews a Sanity draft.
2. Publishing triggers a deployment or revalidation workflow.
3. The public report renders the newly published document.
4. The workflow renders the dedicated print route and stores a matching PDF.
5. The report's download link points to that versioned PDF.

The precise PDF renderer and storage location are deferred. Selection criteria are faithful CSS print rendering, deterministic output, acceptable Vercel limits, reliable font loading, and no per-download browser startup.

## Content and interaction model

Interactions should be defined against structured report fields rather than hard-coded display copy. Candidate patterns include:

- animated headline metrics;
- linked direct-support and systems-change outcomes;
- explorable policy priorities;
- a compact roundtable topic view;
- progressive disclosure for media coverage.

Do not select or build interactions until the relevant data and final design are approved. Every interaction must have a static print equivalent.

## Design system direction

Implementation should establish tokens for:

- official navy, green, and cyan brand palettes;
- web and print typography;
- spacing and layout rhythm;
- editorial line and shape motifs;
- motion duration and easing;
- print page size, margins, and breaks.

The official colors and logo are fixed inputs. R0 compositions are references to adapt responsively, not fixed-size canvases to reproduce literally.

## Quality constraints

There is no formal accessibility compliance target. Even so, implementation should use semantic HTML, keyboard-operable controls, readable contrast, useful alternative text where supplied, and reduced-motion handling as standard engineering practice.

Required validation should eventually cover:

- lint and TypeScript checks;
- unit or component tests for content mapping;
- responsive rendering at representative breakpoints;
- draft preview and publish behavior;
- browser print output;
- generated PDF completeness and page breaks;
- parity between published web and PDF content;
- missing-image and long-copy behavior.

## Privacy and security

- Do not add analytics, tracking pixels, or advertising integrations.
- Expose only public Sanity data to public rendering.
- Keep preview secrets, write tokens, and deployment hooks server-side.
- Restrict Sanity authoring to the single administrator through platform access controls.
- Treat quotations, photos, donor names, and health-related stories as editorially approved content, not data to infer or enrich.

## Deliberately deferred

- Multi-year document modeling
- Exact Sanity schema
- PDF library or service
- Image transformation controls
- Exact animation library
- Deployment environments and domain
- Monitoring beyond platform defaults

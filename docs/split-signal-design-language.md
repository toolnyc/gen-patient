# Split Signal design-language contract

## Status

This contract records the agreed design direction for the Generation Patient 2025 Annual Report. It governs the desktop web experience, the separately composed full-color PDF, and the simplified mobile adaptation. It does not authorize production implementation.

## Principles

1. **Use contrast to organize meaning.** Hard color fields distinguish community, evidence, action, and long-form reading.
2. **Build from reusable editorial components.** Sections compose from a small set of recognizable patterns rather than becoming unrelated posters.
3. **Let content determine height.** Only covers, chapter openers, and statement fields may target a full viewport or PDF page.
4. **Keep ornament accountable.** Splits, rules, and orbits must communicate structure or relationships present in the source.
5. **Treat desktop and PDF as co-primary.** They share content and components but receive distinct compositions.
6. **Preserve source integrity.** Keep the order and approved wording from `content-source.md`. Do not invent labels, claims, links, imagery, or connective copy.

## Visual foundation

### Typography

Use the prototype pairing as the final design-language pairing:

- **DM Sans Bold:** titles, metrics, action language, and primary controls.
- **Instrument Serif:** quotations and selective emotional statements.
- **DM Sans Regular/Medium:** body copy, labels, captions, credits, lists, navigation, and policy detail.

Keep body text at a readable measure, approximately 55–75 characters. Oversized type is reserved for short authored titles, numbers, and statements. CMS-length copy must reduce in scale rather than clip, overlap, or force artificial line breaks. Serif is an accent voice, not the default for long policy prose.

The font files must be embedded in the generated PDF. Both families are available under open licenses, but the production implementation must pin and self-host the approved files.

### Color semantics

| Token | Value | Meaning |
| --- | --- | --- |
| Navy | `#011329` | Evidence, policy, institutional weight |
| Green | `#A9DE34` | Action, progress, donation |
| Cyan | `#41EBFD` | Lived experience, quotation, community connection |
| Pale green | `#DDF2C2` | Softer action field |
| Pale cyan | `#C6F7F9` | Softer community field |
| Paper | `#F0F4E9` | Long reading and neutral space |

Use solid fields with hard boundaries. The official logo gradient remains intact, but gradients are not a background device. Check contrast in the actual font, weight, and size used.

### Layout grammar

- Full-bleed color fields contain a centered 12-column content grid.
- Infer practical dimensions during implementation, targeting a maximum inner width near 1440px and responsive outer gutters.
- Hard-edged panels and thin rules replace rounded cards and shadows.
- Curves are reserved for meaningful orbits and the primary donation control.
- Full-screen treatment is limited to the Cover, Split Chapter Opener, and Statement Field.
- All narrative, ledger, dossier, registry, and media components use natural content height.

### Motifs

1. **Hard split:** expresses a real duality, such as Direct Support and Systems Change.
2. **Thin rule:** separates evidence, entries, captions, and indexed items.
3. **Orbit:** groups supplied topics or partners around a real convening or relationship.
4. **Diagonal:** may form a boundary between two semantic fields in a cover or chapter opener.

Do not use arbitrary arrows, decorative circles, shadows, rounded cards, rotated body copy, or overlapping text that impairs reading.

## Component system

### Cover

- Uses only the official logo, `2025`, and `Annual Report`.
- Pairs a navy title field with a green/paper signal field.
- May use one non-data orbit as a restrained identity motif, but no invented slogan or introductory copy.
- Occupies one viewport on desktop and one full PDF page.

### Persistent Chapter Bar

- Thin desktop bar containing the logo, active section index/title, and `Index` control.
- The full index opens without hiding report content.
- Mobile collapses to logo plus `Index`.
- PDF replaces it with restrained page furniture and a contents page if required.

### Split Chapter Opener

- Repeats for major report sections.
- One bold field carries the supplied section title and index.
- One quieter field carries a short source-derived thesis plus an Image Plate, Quote Signal, or anchor metric.
- The component is not a license to add chapter names absent from the source.
- PDF receives a full-page composition; mobile stacks the two fields.

### Editorial Story Block

- Long-form body occupies the primary column.
- A narrower evidence rail holds only supplied metrics, links, captions, or contextual facts.
- The rail may alternate sides on desktop but follows the narrative in semantic order.
- In PDF, the rail may remain beside the narrative or move to a deliberate adjacent block. Mobile stacks it after the relevant text.

### Two-Lever Split

- Equal green and navy fields represent Direct Support and Systems Change.
- A single orbit-like connector carries the supplied relationship: direct support informs systems change.
- The two detailed source passages remain available beneath or within their respective fields.
- Mobile stacks Direct Support before Systems Change.

### Impact Ledger

- Preserves all 11 supplied Key Results entries: three Direct Support and eight Systems Change.
- Uses ruled rows rather than cards.
- Each row contains group, index, action label, complete supplied result, and an oversized numeral only where a meaningful number exists.
- It must not turn compound results into unsupported totals or discard qualifiers.
- PDF recomposes the ledger across deliberate pages; mobile stacks each row.

### Statement Field

- A calm, single-color field for short emotional transitions such as `Thank you`.
- Uses one large serif statement with minimal supporting copy.
- Does not contain competing metrics or imagery.

### Forward Plan

- Preserves the source placement and structure of `Looking Forward`.
- Contains the large 2026 statement, the complete four-priority list, then a separate green donation panel.
- The donation panel explains funding independence before presenting the CTA.
- PDF shows an active link. Mobile stacks priorities and donation panel.

### Policy Overview and Policy Dossier

- The overview indexes all four Health Policy Lab priorities without compressing their full copy into equal cards.
- Each priority then receives an equal full Dossier containing index, title, readable policy narrative, and evidence rail.
- Patent Reform includes the supplied Alexander Naum quotation. Other dossiers keep the rail available for approved links, testimony, or references without fabricating material.
- PDF starts each dossier on a clear page or page region and avoids splitting the title from its opening paragraph.

### Quote Signal

One anatomy, two scales:

- **Inset:** a framed or ruled quotation inside a narrative or evidence area.
- **Full-field:** a chapter-defining quotation occupying a major field.

Reserve the full-field scale for Peyton Miles. Group the three anonymous Peer Support quotations as a three-part collective voice moment on desktop and a designed PDF page. Mobile stacks them without changing their order.

### Image Plate

- A controlled rectangular image slot with caption and credit beneath it.
- Documentary imagery remains full-color.
- A cyan duotone or cutout is optional for a portrait in a chapter opener.
- If the Sanity image field is empty, show a clearly non-photographic placeholder built from approved colors, rules, and orbit linework. Do not add a fake caption or credit.
- Final image assignments, focal points, permissions, captions, and credits remain editorial inputs.

### Convening Orbit

- Uses only supplied Roundtable topics or named Global Consensus partners.
- A central thesis or count anchors the orbit; labels remain readable and do not imply geography.
- PDF may preserve a recomposed orbit because it is a co-primary designed format. Mobile converts it to an indexed list.

### Registry

Media coverage and donors use independent treatments:

- Media is an editorial publication index with category, title, publisher, and link.
- Donors use a spacious recognition field with equal hierarchy.

Both treatments must preserve every supplied item, long media titles, and active PDF links.

### CCYAN composition

CCYAN introduces no unique component. Compose it from a Split Chapter Opener, Editorial Story Block, compact Impact Ledger, and inset Quote Signal.

## Motion and interaction

- Use the Chapter Bar and index for navigation.
- Allow restrained section reveals, one-time metric reveals, and subtle orbit movement.
- Keep durations short and honor reduced-motion preferences.
- All report content remains present and understandable without interaction.
- The PDF uses final static states.

## Format rules

### Desktop web

- Primary expressive canvas.
- Preserve full-bleed fields, meaningful asymmetry, evidence rails, and orbit compositions.
- Use content-driven height except for approved hero components.
- Long body and policy copy never becomes oversized display text.

### Full-color PDF

- US Letter portrait.
- Recompose shared components for pages rather than imitating desktop viewports.
- Use full-color chapter pages and designed reading pages; physical printer ink economy is not a constraint.
- Use deterministic page breaks, embedded fonts, active external links, and sufficient image resolution.
- Keep a Quote Signal, ledger row, dossier heading/opening, and Image Plate/caption together.
- Avoid widows, orphans, blank trailing pages, clipped backgrounds, and content hidden by fixed furniture.

### Mobile

- Secondary but complete adaptation.
- Preserve component identity and color semantics while flattening composition.
- Stack split fields, place evidence rails after narratives, remove text rotation and overlap, and convert orbits to lists.
- Maintain source order and complete copy.
- Collapse the Chapter Bar without crowding the story.

## Content-to-layout stress test

| Source section, in source order | Component composition | Desktop test | PDF test | Mobile test |
| --- | --- | --- | --- | --- |
| Cover | Cover | Source-only title and logo; no invented slogan | Full-page title composition | Stacked signal fields |
| 2025 at a Glance: Who we are | Split Chapter Opener + Story Block | Long thesis and body measure | Opener plus reading page | Thesis, image, then body |
| How we create change | Two-Lever Split | Equal levers plus full detail | Designed two-field page(s) | Direct Support before Systems Change |
| Key results in 2025 | Impact Ledger | All 11 complete rows and qualifiers | Multi-page ledger with intact rows | Single ordered ledger |
| Thank you | Statement Field | Short passage has sufficient presence | Full or substantial page field | Large statement without overflow |
| Looking Forward | Forward Plan | Four long priorities and separate CTA | Priorities and donation panel paginate deliberately | Single-column priorities then CTA |
| Our Work in Depth | Split Chapter Opener | Source title only | Full-page transition | Stacked opener |
| Peer Support | Story Block + evidence rail + Quote Signal group | Long narrative, category totals, study detail, three quotes | Narrative pages plus designed quote page | Quotes stack after relevant narrative |
| Health Policy Lab | Overview + four Dossiers | Four long, unequal policy bodies | Each dossier starts cleanly | One dossier at a time |
| Community Spotlight: Peyton Miles | Opener + Image Plate + Story Block + full Quote Signal | Portrait/caption, long story, featured quote | Story and quote get deliberate pages | Image, narrative, quote |
| Roundtables | Convening Orbit + Story Block | Seven supplied session topics | Recompose orbit and narrative | Indexed topic list |
| Building Global Consensus | Convening Orbit + Story Block | Named partners only; no false geography | Orbit or grouped partner field | Partner list then narrative |
| CCYAN | Shared component composition | Narrative, four metrics, quote | Compact composed sequence | Stacked sequence |
| Rooms Where Decisions Happen | Story Block + evidence rail | Long agency/event names | Keep references readable | Natural single column |
| Selected media coverage | Editorial publication index | Longest titles, three categories, all items | Active links and controlled page breaks | One readable item per row |
| Our Donors | Recognition field | All names with equal hierarchy | Recognition page(s) | Single ordered list |

## Locked decisions

- Preserve the exact source order without invented act labels.
- Use DM Sans and Instrument Serif.
- Use semantic paper, navy, green, and cyan.
- Use hard-edged, border-led components.
- Limit motifs to splits, rules, meaningful orbits, and field-boundary diagonals.
- Keep the source-only cover.
- Give all four policy priorities an overview and full Dossier.
- Preserve every Key Results entry.
- Group all three Peer Support quotations.
- Reserve the full-field Quote Signal for Peyton Miles.
- Compose CCYAN from shared components.
- Use a persistent desktop Chapter Bar.
- Treat desktop and full-color PDF as co-primary; mobile is secondary.
- Keep interactions navigational and restrained.
- Use a branded abstract placeholder for an empty Sanity image field.
- Give Media and Donor registries distinct treatments.

## Unresolved inputs and decisions

### Design

- Assign approved images and decide which portraits receive the optional cutout.
- Confirm final PDF page furniture after a representative pagination proof.

### Editorial

All items in `editorial-review.md` remain open, including:

- the `77` group headline versus listed categories totaling `76`;
- sources and approval for demographic, policy, enforcement, and first-of-kind claims;
- names, roles, quotations, health-story permissions, image rights, captions, and credits;
- donation, publication, testimony, social, CCYAN, and media URLs;
- terminology and capitalization choices;
- final donor names and display forms.

Do not use visual prominence to imply that an unresolved claim has been verified.

## Convergence recommendation

The current Variant A should not move directly into production. Build and review one focused throwaway Variant D that:

1. removes invented cover copy;
2. demonstrates the approved component system with representative source content;
3. preserves all Key Results rows and full Policy Dossiers;
4. demonstrates the selected independent Registry treatments;
5. proves desktop, mobile, and full-color PDF behavior.

After the remaining format proof is resolved, capture the decision and discard prototype-specific implementation rather than promoting it directly.

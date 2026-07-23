/*
 * THROWAWAY PROTOTYPE
 * Three annual-report design languages, switchable via ?variant=A|B|C,
 * on the new /prototype/annual-report route.
 */

const variants = [
  { key: "A", name: "Split Signal" },
  { key: "B", name: "Living Thread" },
  { key: "C", name: "Field Guide" },
  { key: "D", name: "Split Signal System" },
];

const logo = `
  <img class="brand-logo" src="./assets/generation-patient-logo.png" alt="Generation Patient" />
`;

const metricData = [
  ["77", "peer support groups"],
  ["115+", "young adults served"],
  ["17", "trained facilitators"],
  ["7", "roundtables convened"],
];

const policyData = [
  ["01", "Patent reform", "Advancing competition and access to more affordable medicines."],
  ["02", "Deceptive drug ads", "Pushing for oversight of misleading pharmaceutical marketing online."],
  ["03", "Clinical trials", "Making young adults visible in research, data, and study design."],
  ["04", "AI companion tools", "Calling for evidence, regulation, and post-market oversight."],
];

const resultData = [
  [
    "Direct support",
    "77",
    "Peer support groups",
    "Convened 77 peer support groups serving more than 115 young adult patients, with 17 trained community facilitators, and expanded internationally with new groups in South Asia and East Africa co-hosted with local patient advocacy partners.",
  ],
  [
    "Direct support",
    "100%",
    "Less alone",
    "100% of survey respondents said our peer groups helped them feel less alone, and 100% were very or mostly satisfied with group structure, facilitation, topics, and accessibility. We continually seek feedback to make the groups more accessible and supportive for our young adult patient community.",
  ],
  [
    "Direct support",
    "80+",
    "Fellow projects",
    "The Crohn's & Colitis Young Adults Network (CCYAN), our only disease-specific program, marked its seventh year by supporting 8 fellows across the U.S., India, Ethiopia, and Bangladesh, who produced 80+ articles, videos, and advocacy projects. Every fellow rated the fellowship 5/5, and the alumni network now spans 50 fellows worldwide.",
  ],
  [
    "Systems change",
    "",
    "Patent reform",
    "Helped advance the reintroduction of the bipartisan Eliminating Thickets to Increase Competition (ETHIC) Act to curb patent thickets and lower drug prices; our Executive Director's statement was featured in the official Senate press announcement.",
  ],
  [
    "Systems change",
    "100",
    "FDA enforcement letters",
    "Our years-long advocacy on deceptive pharmaceutical advertising contributed to concrete enforcement by the U.S. Food and Drug Administration (FDA), which issued 60 warning letters and 40 untitled letters to companies engaged in misleading drug marketing on social media.",
  ],
  [
    "Systems change",
    "",
    "AI companion oversight",
    "Delivered formal remarks to the FDA's Digital Health Advisory Committee urging that AI companion tools claiming to address mental health be regulated as medical devices.",
  ],
  [
    "Systems change",
    "",
    "Clinical trial representation",
    "Met regularly with FDA leadership and engaged in the Prescription Drug User Fee Act (PDUFA), Medical Device User Fee Amendments (MDUFA), and Generic Drug User Fee Amendments (GDUFA) processes to push for age-disaggregated clinical trial data, better representation of young adults in research, and stronger regulatory rigor.",
  ],
  [
    "Systems change",
    "7",
    "Roundtables",
    "Convened seven invite-only roundtables bringing young adult patients together with nationally leading clinicians, researchers, and policymakers, each of which will result in a peer-reviewed publication first-authored by a young adult patient. The first three were published in 2025.",
  ],
  [
    "Systems change",
    "",
    "Peer-support evidence",
    "Published a mixed-methods peer-reviewed study on our peer support work, co-authored and first-authored by young adult patients.",
  ],
  [
    "Systems change",
    "",
    "Research guidance",
    "Completed a multi-year roundtable funded by a Patient-Centered Outcomes Research Institute (PCORI) Eugene Washington Engagement Award, producing new national guidance, a researcher checklist, and a toolkit for peer support research for young adults with chronic and rare conditions.",
  ],
  [
    "Systems change",
    "",
    "Global consensus",
    "Launched a first-of-its-kind global consensus initiative at the Commonwealth Fund on the sidelines of the United Nations General Assembly in New York City. The published proceedings will lead to the first shared definition of young adults with chronic conditions and non-communicable diseases (NCDs).",
  ],
];

const policyDossiers = [
  [
    "01",
    "Patent reform",
    "We helped support the reintroduction of the bipartisan Eliminating Thickets to Increase Competition (ETHIC) Act, led by Senators Welch, Hawley, and Klobuchar, which would limit pharmaceutical companies to asserting a single patent from a thicket of overlapping patents to ensure more timely access to generics and biosimilars. We also advocated against the Patent Eligibility Restoration Act (PERA) and the Promoting and Respecting Economically Vital American Innovation Leadership Act (PREVAIL) Act, which would both create barriers to affordable medicines and prioritize profits for the pharmaceutical industry, and met with dozens of congressional offices. We were also invited to speak at the DOJ and FTC Listening Session on anticompetitive conduct in the pharmaceutical industry, convened under a presidential executive order on lowering drug prices, where our testimony informed the agencies' joint report on pharmaceutical antitrust submitted to the White House.",
    "“Young adult patients are living with the consequences of patent abuse every day. These policies decide whether people can afford the medications they need to stay alive.”",
  ],
  [
    "02",
    "Deceptive drug advertising",
    "Nearly 90% of young people use social media to find health information, where they face misleading pharmaceutical marketing designed to exploit their vulnerabilities. We have been a leading voice behind the bipartisan Protecting Patients from Deceptive Drug Ads Act, and in 2025 our advocacy contributed to the FDA issuing 60 warning letters and 40 untitled letters to companies engaged in deceptive marketing, including undisclosed influencer promotions.",
    "",
  ],
  [
    "03",
    "Clinical trials",
    "Trials often lump everyone aged 18 to 64 into one category, obscuring the distinct needs of young adults. We pushed for age-disaggregated trial data, better representation of young adults in study design, improved adverse-event reporting, and rigorous approval standards, meeting routinely with FDA leadership and engaging in the Prescription Drug User Fee Act (PDUFA), Medical Device User Fee Amendments (MDUFA), and Generic Drug User Fee Amendments (GDUFA) processes. These user fee agreements determine how industry fees fund the FDA's review work and are renegotiated with stakeholder input, making them a critical lever for patient-centered reform.",
    "",
  ],
  [
    "04",
    "AI companion tools",
    "AI tools marketed as emotional or mental health support increasingly target young people, including those with chronic illness. We delivered formal remarks to the FDA's Digital Health Advisory Committee urging that these tools be regulated as medical devices when they claim to address mental health and submitted comments outlining the current regulatory gaps. We are working to require robust clinical evidence before marketing, clear regulatory pathways, and proactive post-market surveillance. This is our newest policy priority and one we will expand significantly in 2026.",
    "",
  ],
];

const metrics = (className = "") =>
  metricData
    .map(
      ([value, label]) => `
        <article class="metric ${className}">
          <strong>${value}</strong>
          <span>${label}</span>
        </article>`,
    )
    .join("");

const policies = (className = "") =>
  policyData
    .map(
      ([number, title, description]) => `
        <article class="policy ${className}">
          <span class="policy-number">${number}</span>
          <h3>${title}</h3>
          <p>${description}</p>
        </article>`,
    )
    .join("");

function SharedGrammar() {
  return `
    <aside class="grammar" aria-label="Shared design grammar">
      <span>Shared grammar</span>
      <ul>
        <li>Patient voice leads</li>
        <li>Linework connects systems</li>
        <li>Green marks action</li>
        <li>Cyan marks community</li>
      </ul>
    </aside>`;
}

const resultLedger = () =>
  resultData
    .map(
      ([group, value, title, copy], index) => `
        <article class="d-result-row">
          <span class="d-result-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="d-result-group">${group}</span>
          <div class="d-result-signal">${value ? `<strong>${value}</strong>` : ""}<h3>${title}</h3></div>
          <p>${copy}</p>
        </article>`,
    )
    .join("");

const dossierList = () =>
  policyDossiers
    .map(
      ([number, title, copy, quote]) => `
        <article class="d-dossier">
          <header><span>${number}</span><h3>${title}</h3></header>
          <div class="d-dossier-body">
            <p>${copy}</p>
            ${
              quote
                ? `<blockquote>${quote}<cite>Alexander Naum, JD / Policy Manager</cite></blockquote>`
                : `<aside><span>Evidence rail</span><p>Approved links, testimony, legislation, and agency references occupy this fixed component slot.</p></aside>`
            }
          </div>
        </article>`,
    )
    .join("");

function VariantD() {
  return `
    <main class="variant variant-d">
      <nav class="d-chapter-bar">
        ${logo}
        <span><b>00</b> 2025 Annual Report</span>
        <button type="button">Index +</button>
      </nav>

      <header class="d-cover d-hero-component chapter">
        <div class="d-cover-primary">
          ${logo}
          <div><span>2025</span><h1>Annual<br />Report</h1></div>
        </div>
        <div class="d-cover-signal" aria-hidden="true">
          <div class="d-cover-orbit"><span>2025</span><span>Generation Patient</span></div>
        </div>
      </header>

      <section class="d-chapter-opener d-hero-component chapter">
        <div class="d-opener-title">
          <span>01 / 2025 at a Glance</span>
          <h2>Who<br />we are</h2>
        </div>
        <div class="d-opener-thesis">
          <p>More than half of young adults aged 18 to 34 live with at least one chronic or rare condition, yet this group remains largely overlooked in healthcare, research, and policy.</p>
          <div class="d-image-plate">
            <div class="d-placeholder" aria-label="Branded placeholder image"><span>Approved image pending</span></div>
            <small>Image Plate / caption and credit occupy this line when supplied</small>
          </div>
        </div>
      </section>

      <section class="d-story chapter">
        <header><span>Editorial Story Block</span><h2>Built by the people living inside the gap.</h2></header>
        <div class="d-story-grid">
          <div class="d-story-copy">
            <p>Generation Patient was built to close that gap by the people living inside it. Our founder started this organization as a young adult with a chronic illness, and young adult patients still lead it at every level, from our peer facilitators to our policy scholars to our board. We know these systems firsthand, and that is exactly why we can change them.</p>
          </div>
          <aside class="d-evidence-rail">
            <span>Evidence rail</span>
            <strong>Patient-led at every level</strong>
            <p>Peer facilitators<br />Policy scholars<br />Board</p>
          </aside>
        </div>
      </section>

      <section class="d-two-lever chapter">
        <p class="eyebrow">How we create change</p>
        <div class="d-lever-fields">
          <article>
            <span>A / Community</span>
            <h2>Direct<br />support</h2>
            <ul><li>Community-led peer support groups</li><li>Fellowship and leadership programming</li></ul>
          </article>
          <article>
            <span>B / Reform</span>
            <h2>Systems<br />change</h2>
            <ul><li>Four Health Policy Priorities</li><li>Multi-stakeholder roundtables</li><li>Peer-reviewed publications</li></ul>
          </article>
          <p>Direct support informs systems change, so lived experience drives lasting reform.</p>
        </div>
      </section>

      <section class="d-ledger chapter">
        <header>
          <span>02 / Key results in 2025</span>
          <h2>Every supplied result.<br /><i>No dashboard.</i></h2>
        </header>
        <div class="d-result-ledger">${resultLedger()}</div>
        <p class="d-verification">Figures and causal claims remain subject to the checks in editorial-review.md.</p>
      </section>

      <section class="d-statement d-hero-component chapter">
        <span>03 / Thank you</span>
        <p>Thank you for believing that young adult patients should lead the change we need.</p>
        <small>Generation Patient does not accept funding from the private healthcare industry.</small>
      </section>

      <section class="d-forward chapter">
        <header><span>04 / Looking Forward</span><h2>In 2026, we will scale that momentum.</h2></header>
        <ol>
          <li><span>01</span>Expand peer support capacity to meet growing demand.</li>
          <li><span>02</span>Deepen policy impact across four priorities.</li>
          <li><span>03</span>Advance the authentic patient voice through transparency.</li>
          <li><span>04</span>Publish and facilitate adoption of the global proceedings.</li>
        </ol>
        <aside>
          <p>Because we refuse industry funding, every dollar we raise comes from people and foundations who share our mission.</p>
          <button type="button">Consider making a donation <b>↗</b></button>
        </aside>
      </section>

      <section class="d-chapter-opener d-chapter-opener-navy d-hero-component chapter">
        <div class="d-opener-title">
          <span>05 / Our Work in Depth</span>
          <h2>Peer<br />Support</h2>
        </div>
        <div class="d-opener-thesis">
          <p>Peer support is one of the most powerful tools in healthcare, and one that has not yet been taken as seriously as it deserves.</p>
          <strong>77 groups / 115+ patients / community-led</strong>
        </div>
      </section>

      <section class="d-story d-peer-story chapter">
        <header><span>Long-form stress test</span><h2>Community is evidence.</h2></header>
        <div class="d-story-grid">
          <div class="d-story-copy">
            <p>Young adults with chronic and/or rare conditions experience disproportionately high rates of isolation, anxiety, depression, and disruption to education, employment, and enjoyment of everyday life. Despite being at a pivotal stage of life and development, the mental well-being of young adults with chronic medical conditions is frequently overshadowed by our physical health needs. We believe that peer support is one crucial and often overlooked resource that can help reduce isolation and increase feelings of validation, acceptance, and connection in our community.</p>
            <p>Since March 2020, we have facilitated more than 650 virtual peer support meetings, all led by facilitators who are themselves young adults living with chronic conditions. Most groups are cross-disease, reflecting the shared experiences of school, career, and relationships that cut across diagnoses.</p>
          </div>
          <aside class="d-evidence-rail">
            <span>2025 groups</span>
            <p><b>23</b> general</p><p><b>18</b> higher education</p><p><b>20</b> IBD</p><p><b>15</b> international</p>
            <small>Listed categories total 76; the supplied headline total is 77.</small>
          </aside>
        </div>
      </section>

      <section class="d-quote-group chapter">
        <p class="eyebrow">In our community's words</p>
        <div>
          <blockquote>“There have been weeks when my only laughter came from the peer support meetings.”</blockquote>
          <blockquote>“I show up with my camera off on high-symptom days and still feel completely included. That flexibility keeps me coming back.”</blockquote>
          <blockquote>“I didn't realize how much I was carrying until I heard other people describe exactly what I've been feeling.”</blockquote>
        </div>
      </section>

      <section class="d-policy-overview chapter">
        <header><span>Health Policy Lab</span><h2>Four priorities.<br /><i>Four dossiers.</i></h2></header>
        <div>${policies("d-policy-summary")}</div>
      </section>

      <section class="d-dossiers chapter">
        <p class="eyebrow">Policy Dossiers / full-copy stress test</p>
        ${dossierList()}
      </section>

      <section class="d-spotlight chapter">
        <div class="d-image-plate d-image-plate-portrait">
          <div class="d-placeholder" aria-label="Branded placeholder image"><span>Approved Peyton Miles portrait pending</span></div>
          <small>Community Spotlight / caption and credit</small>
        </div>
        <div>
          <span>Community Spotlight</span>
          <h2>Peyton<br />Miles</h2>
          <p>In March 2022, during her senior year of high school, a viral illness left Peyton Miles with a severe, unremitting headache and, soon, a life lived from bed while her friends attended prom and graduated.</p>
        </div>
        <blockquote>“Generation Patient didn't just give me an idea of how I could use my experience to create change; it gave me a purpose and a community, which was so much more than I could've asked for.”</blockquote>
      </section>

      <section class="d-convening chapter">
        <header><span>Convening Orbit</span><h2>Roundtables connect lived experience to decisions.</h2></header>
        <div class="d-convening-orbit">
          <strong>7<br /><small>sessions</small></strong>
          <span>Care transition</span><span>Medical trauma</span><span>Ableism + ageism</span><span>Peer support</span><span>Forced poverty</span><span>Clinical trials</span><span>AI in health</span>
        </div>
        <p>Each session will result in a peer-reviewed publication first-authored by a young adult patient. The first three papers were published in 2025.</p>
      </section>

      <section class="d-registry-test chapter">
        <header><span>Selected Registry treatment</span><h2>Media coverage + donors</h2></header>
        <div class="d-registry-selected">
          <article>
            <h3>Media / Editorial publication index</h3>
            <div class="d-media-blocks">
              <p><small>Drug pricing and patent reform</small><b>Welch, Hawley, Klobuchar Introduce Bipartisan Legislation to Streamline Drug Patent Litigation</b><span>Office of Senator Peter Welch ↗</span></p>
              <p><small>Official transcript</small><b>First Listening Session on Lowering Drug Prices Through Competition</b><span>Federal Trade Commission ↗</span></p>
            </div>
          </article>
          <article>
            <h3>Donors / Recognition field</h3>
            <div class="d-donor-cloud"><span>Arnold Ventures</span><span>Commonwealth Fund</span><span>Connecting to Cure Crohn's</span><span>Disability Frontlines Fund</span></div>
          </article>
        </div>
      </section>
      ${SharedGrammar()}
    </main>`;
}

function VariantA() {
  return `
    <main class="variant variant-a">
      <header class="a-hero chapter">
        <div class="a-hero-left">
          <div class="topline">${logo}<span>Independent. Patient-led.</span></div>
          <div class="hero-title">
            <span class="year">2025</span>
            <h1>Annual<br />Report</h1>
          </div>
        </div>
        <div class="a-hero-right">
          <p class="eyebrow">Generation Patient / 2025</p>
          <h2>We are the generation changing healthcare.</h2>
          <p class="lede">More than half of young adults aged 18 to 34 live with at least one chronic or rare condition, yet this group remains largely overlooked in healthcare, research, and policy.</p>
          <div class="orbit" aria-hidden="true"><span>BY</span><span>AND</span><span>FOR</span></div>
        </div>
      </header>

      <section class="a-manifesto chapter">
        <p class="eyebrow">01 / Who we are</p>
        <p class="manifesto">Built by the people living inside the gap. Young adult patients lead at every level, from our peer facilitators to our policy scholars to our board.</p>
        <div class="lever-grid">
          <article>
            <span class="lever-number">A</span>
            <h2>Direct support</h2>
            <p>Community-led peer support, fellowship, and leadership programming create spaces where young adults feel understood and build power together.</p>
          </article>
          <article>
            <span class="lever-number">B</span>
            <h2>Systems change</h2>
            <p>Policy priorities, evidence generation, and multi-stakeholder roundtables move lived experience into the rooms where decisions happen.</p>
          </article>
        </div>
      </section>

      <section class="a-results chapter">
        <div class="vertical-title"><span>At a glance</span></div>
        <div class="a-results-content">
          <p class="eyebrow">02 / Key results</p>
          <h2>Support becomes evidence. Evidence becomes change.</h2>
          <div class="metric-row">${metrics()}</div>
          <p class="source-note">2025 figures shown as supplied. Editorial verification is still pending.</p>
        </div>
      </section>

      <section class="a-policy chapter">
        <div class="policy-heading">
          <p class="eyebrow">03 / Health Policy Lab</p>
          <h2>Four priorities.<br /><em>One lived reality.</em></h2>
        </div>
        <div class="policy-orbit">${policies()}</div>
      </section>

      <section class="a-voice chapter">
        <div class="quote-mark">“</div>
        <blockquote>Generation Patient didn't just give me an idea of how I could use my experience to create change; it gave me a purpose and a community.</blockquote>
        <p>Peyton Miles / Community Spotlight</p>
      </section>

      <section class="a-forward chapter">
        <p class="eyebrow">04 / Looking forward</p>
        <h2>Young adult patients are not a niche population.</h2>
        <div class="forward-columns">
          <p>In 2026, we will expand peer support capacity, deepen policy impact, advance authentic patient voice, and publish the proceedings of our first global convening.</p>
          <div>
            <span>Your support keeps independent patient advocacy in the rooms where decisions happen.</span>
            <button type="button">Help move the work forward <b>↗</b></button>
          </div>
        </div>
      </section>
      ${SharedGrammar()}
    </main>`;
}

function VariantB() {
  return `
    <main class="variant variant-b">
      <header class="b-hero chapter">
        <nav>${logo}<span>2025 Annual Report</span></nav>
        <div class="b-hero-copy">
          <p class="eyebrow">A story of support becoming systems change</p>
          <h1>Nothing about us<br /><i>without us.</i></h1>
          <p>Generation Patient was built to close the young-adult healthcare gap by the people living inside it.</p>
        </div>
        <div class="pulse" aria-hidden="true"><span></span><span></span><span></span></div>
        <a class="scroll-cue" href="#b-story">Follow the thread <b>↓</b></a>
      </header>

      <section class="b-story chapter" id="b-story">
        <div class="thread-line" aria-hidden="true"></div>
        <header class="b-chapter-title">
          <span>How change travels</span>
          <h2>A continuous loop led by lived experience.</h2>
        </header>
        <article class="thread-node node-left community-node">
          <span class="node-index">01</span>
          <div>
            <p class="eyebrow">Community</p>
            <h3>Peer support creates connection.</h3>
            <p>Every group is led by facilitators who are themselves young adults living with chronic or rare conditions. Most groups are cross-disease and all are free.</p>
          </div>
          <strong class="node-stat">115+<small>people served</small></strong>
        </article>
        <article class="thread-node node-right insight-node">
          <span class="node-index">02</span>
          <div>
            <p class="eyebrow">Insight</p>
            <h3>Lived experience reveals the gaps.</h3>
            <blockquote>“There have been weeks when my only laughter came from the peer support meetings.”</blockquote>
          </div>
        </article>
        <article class="thread-node node-left evidence-node">
          <span class="node-index">03</span>
          <div>
            <p class="eyebrow">Evidence</p>
            <h3>Patient-led research makes experience legible.</h3>
            <p>Young adult patients co-authored and first-authored peer-reviewed work on peer support needs and experiences.</p>
          </div>
          <strong class="node-stat">650+<small>meetings since 2020</small></strong>
        </article>
        <article class="thread-node node-right policy-node">
          <span class="node-index">04</span>
          <div>
            <p class="eyebrow">Policy</p>
            <h3>Evidence enters the rooms where decisions happen.</h3>
            <div class="b-policy-list">${policies("compact")}</div>
          </div>
        </article>
        <article class="thread-node node-left return-node">
          <span class="node-index">05</span>
          <div>
            <p class="eyebrow">Return</p>
            <h3>Systems change strengthens community.</h3>
            <p>Direct support informs policy, and policy creates the conditions for young adults to live with greater access, dignity, and fulfillment.</p>
          </div>
        </article>
      </section>

      <section class="b-impact chapter">
        <p class="eyebrow">2025 / Momentum</p>
        <div class="b-impact-ring">
          <span class="ring-copy">Across four continents</span>
          <div class="metric-cloud">${metrics()}</div>
        </div>
      </section>

      <section class="b-forward chapter">
        <span class="small-label">Next in the thread</span>
        <h2>In 2026,<br />we scale the momentum.</h2>
        <p>More groups. More trained facilitators. Deeper policy impact. A stronger independent patient voice.</p>
        <button type="button">Continue with us <b>↗</b></button>
      </section>
      ${SharedGrammar()}
    </main>`;
}

function VariantC() {
  return `
    <main class="variant variant-c">
      <header class="c-header">
        ${logo}
        <span>Annual Report</span>
        <span>2025</span>
        <button type="button" class="index-button">Index +</button>
      </header>

      <section class="c-hero chapter">
        <div class="c-kicker"><span>Issue 01</span><span>Patient power</span></div>
        <h1>Built from<br /><em>lived experience.</em></h1>
        <div class="c-hero-summary">
          <p>Generation Patient is a nonprofit created by and for young adults with chronic conditions.</p>
          <p>We pair direct support with systems change, putting lived experience at the center of health policy, oversight, and research.</p>
        </div>
        <div class="arrow-field" aria-hidden="true">→ → →</div>
      </section>

      <section class="c-index chapter">
        <header><p class="eyebrow">Contents / The year in motion</p><span>Read top to bottom or enter anywhere</span></header>
        <ol>
          <li><span>01</span><a href="#c-results">The numbers</a><small>Direct support</small></li>
          <li><span>02</span><a href="#c-policy">The policy lab</a><small>Systems change</small></li>
          <li><span>03</span><a href="#c-voice">The lived story</a><small>Community spotlight</small></li>
          <li><span>04</span><a href="#c-forward">The next move</a><small>2026 priorities</small></li>
        </ol>
      </section>

      <section class="c-results chapter" id="c-results">
        <div class="c-section-label"><span>01</span><p>Direct support</p></div>
        <div class="c-results-main">
          <h2>Community is<br />a health intervention.</h2>
          <p>Peer support reduces isolation and creates validation, acceptance, and connection. In 2025, the work expanded internationally while remaining free and community-led.</p>
          <div class="metric-ledger">${metrics()}</div>
        </div>
      </section>

      <section class="c-policy chapter" id="c-policy">
        <div class="c-section-label"><span>02</span><p>Systems change</p></div>
        <div class="c-policy-main">
          <header>
            <h2>The Health<br />Policy Lab</h2>
            <p>Four public systems, viewed from the patient's side.</p>
          </header>
          <div class="policy-table">${policies()}</div>
        </div>
      </section>

      <section class="c-voice chapter" id="c-voice">
        <div class="c-section-label"><span>03</span><p>Community spotlight</p></div>
        <div class="voice-poster">
          <span class="outline-word">PURPOSE</span>
          <blockquote>“It gave me a purpose and a community, which was so much more than I could've asked for.”</blockquote>
          <p>Peyton Miles found Generation Patient after chronic illness disrupted her senior year of high school. She went on to become a Health Policy Scholar and Health Policy Lab Co-Chair.</p>
        </div>
      </section>

      <section class="c-forward chapter" id="c-forward">
        <div class="c-section-label"><span>04</span><p>Looking forward</p></div>
        <div class="c-forward-main">
          <p class="eyebrow">Our 2026 priorities</p>
          <h2>Make the rooms bigger.<br />Bring more voices in.</h2>
          <ol>
            <li>Expand peer support capacity</li>
            <li>Deepen policy impact</li>
            <li>Advance authentic patient voice</li>
            <li>Publish the global proceedings</li>
          </ol>
          <button type="button">Support independent advocacy <b>↗</b></button>
        </div>
      </section>
      ${SharedGrammar()}
    </main>`;
}

const renderers = { A: VariantA, B: VariantB, C: VariantC, D: VariantD };

function currentKey() {
  const value = new URLSearchParams(window.location.search).get("variant")?.toUpperCase();
  return renderers[value] ? value : "A";
}

function setVariant(key) {
  const url = new URL(window.location.href);
  url.searchParams.set("variant", key);
  window.history.replaceState({}, "", url);
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function cycle(direction) {
  const index = variants.findIndex(({ key }) => key === currentKey());
  const next = (index + direction + variants.length) % variants.length;
  setVariant(variants[next].key);
}

function PrototypeSwitcher() {
  if (!["localhost", "127.0.0.1"].includes(window.location.hostname)) return "";
  const active = variants.find(({ key }) => key === currentKey());
  return `
    <div class="prototype-switcher" aria-label="Prototype variant switcher">
      <button type="button" data-direction="-1" aria-label="Previous variant">←</button>
      <div>
        <span>Throwaway prototype</span>
        <strong>${active.key} — ${active.name}</strong>
      </div>
      <button type="button" data-direction="1" aria-label="Next variant">→</button>
    </div>`;
}

function render() {
  const key = currentKey();
  document.documentElement.dataset.variant = key;
  document.querySelector("#prototype").innerHTML = renderers[key]() + PrototypeSwitcher();
  document.querySelectorAll("[data-direction]").forEach((button) => {
    button.addEventListener("click", () => cycle(Number(button.dataset.direction)));
  });
}

window.addEventListener("popstate", render);
window.addEventListener("keydown", (event) => {
  const tag = event.target.tagName;
  if (["INPUT", "TEXTAREA"].includes(tag) || event.target.isContentEditable) return;
  if (event.key === "ArrowLeft") cycle(-1);
  if (event.key === "ArrowRight") cycle(1);
});

render();

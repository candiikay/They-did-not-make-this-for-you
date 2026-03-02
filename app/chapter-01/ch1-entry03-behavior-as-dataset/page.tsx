import Link from "next/link";
import { Artifact } from "@/app/components/Artifact";
import { Cite } from "@/app/components/Cite";
import { CrossRef } from "@/app/components/CrossRef";
import { glossaryLink, hasGlossaryEntry } from "@/app/lib/glossary";
import { ENTRY_SOURCES } from "@/app/lib/entry-sources";

export const metadata = {
  title: "Entry 03 — Behavior as Dataset",
  description: "They Did Not Make This For You — Entry 03"
};

function AlgorithmicDashboardSvg() {
  return (
    <svg
      viewBox="0 0 460 230"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="alg-dashboard-title alg-dashboard-desc"
      className="artifact__media-svg"
    >
      <title id="alg-dashboard-title">
        Algorithmic worker productivity dashboard
      </title>
      <desc id="alg-dashboard-desc">
        Interface showing units per hour, idle time flagged, accuracy
        and alerts such as idle over three minutes and bathroom break
        duration, while body fatigue is not logged.
      </desc>
      <rect x="10" y="10" width="440" height="212" fill="white" stroke="#111" strokeWidth="1.5" />
      <rect x="10" y="10" width="440" height="26" fill="#111" />
      <text x="22" y="27" fontFamily="'Space Mono',monospace" fontSize="9" fill="white" letterSpacing="1">
        WORKER PRODUCTIVITY DASHBOARD
      </text>
      <text x="432" y="27" fontFamily="'IBM Plex Mono',monospace" fontSize="8" fill="#555" textAnchor="end">
        ● LIVE
      </text>
      <rect x="10" y="36" width="109" height="58" fill="white" stroke="#111" strokeWidth="1" />
      <text x="20" y="50" fontFamily="'Space Mono',monospace" fontSize="7" fill="#999" letterSpacing="0.5">UNITS / HR</text>
      <text x="20" y="78" fontFamily="'Space Mono',monospace" fontSize="26" fill="#111" fontWeight="700">287</text>
      <text x="20" y="89" fontFamily="'IBM Plex Mono',monospace" fontSize="8" fill="#888">target: 300</text>
      <rect x="119" y="36" width="109" height="58" fill="white" stroke="#111" strokeWidth="2.5" />
      <text x="129" y="50" fontFamily="'Space Mono',monospace" fontSize="7" fill="#111" letterSpacing="0.5" fontWeight="700">⚠ IDLE TIME</text>
      <text x="129" y="78" fontFamily="'Space Mono',monospace" fontSize="26" fill="#111" fontWeight="700">4.2m</text>
      <text x="129" y="89" fontFamily="'IBM Plex Mono',monospace" fontSize="8" fill="#111" fontWeight="600">flagged</text>
      <rect x="228" y="36" width="109" height="58" fill="white" stroke="#111" strokeWidth="1" />
      <text x="238" y="50" fontFamily="'Space Mono',monospace" fontSize="7" fill="#999" letterSpacing="0.5">ACCURACY</text>
      <text x="238" y="78" fontFamily="'Space Mono',monospace" fontSize="26" fill="#111" fontWeight="700">98%</text>
      <text x="238" y="89" fontFamily="'IBM Plex Mono',monospace" fontSize="8" fill="#888">target: 99%</text>
      <rect x="337" y="36" width="113" height="58" fill="white" stroke="#111" strokeWidth="1" />
      <text x="347" y="50" fontFamily="'Space Mono',monospace" fontSize="7" fill="#999" letterSpacing="0.5">SCORE</text>
      <text x="347" y="78" fontFamily="'Space Mono',monospace" fontSize="26" fill="#111" fontWeight="700">B+</text>
      <text x="347" y="89" fontFamily="'IBM Plex Mono',monospace" fontSize="8" fill="#888">above floor</text>
      <rect x="10" y="94" width="295" height="100" fill="white" stroke="#111" strokeWidth="1" />
      <text x="20" y="108" fontFamily="'Space Mono',monospace" fontSize="7" fill="#888" letterSpacing="0.5">RATE OVER SHIFT</text>
      <line x1="32" y1="185" x2="295" y2="185" stroke="#333" strokeWidth="0.8" />
      <line x1="32" y1="112" x2="32" y2="185" stroke="#333" strokeWidth="0.8" />
      <line x1="32" y1="132" x2="295" y2="132" stroke="#bbb" strokeWidth="1" strokeDasharray="5,3" />
      <text x="296" y="135" fontFamily="'IBM Plex Mono',monospace" fontSize="7" fill="#999">300</text>
      <polyline points="35,124 60,122 85,126 110,130 135,136 160,142 185,146 210,141 235,143 260,140 290,138" fill="none" stroke="#111" strokeWidth="2" />
      <polygon points="35,124 60,122 85,126 110,130 135,136 160,142 185,146 210,141 235,143 260,140 290,138 290,185 35,185" fill="#e8e8e8" opacity="0.7" />
      <line x1="160" y1="142" x2="160" y2="163" stroke="#555" strokeWidth="0.8" strokeDasharray="2,2" />
      <text x="88" y="174" fontFamily="'IBM Plex Mono',monospace" fontSize="7.5" fill="#555" fontStyle="italic">body fatigue — not logged</text>
      <rect x="305" y="94" width="145" height="100" fill="white" stroke="#111" strokeWidth="1" />
      <text x="315" y="108" fontFamily="'Space Mono',monospace" fontSize="7" fill="#888" letterSpacing="0.5">ALERTS</text>
      <line x1="305" y1="111" x2="450" y2="111" stroke="#111" strokeWidth="0.8" />
      <rect x="305" y="111" width="145" height="22" fill="#e8e8e8" />
      <text x="314" y="126" fontFamily="'IBM Plex Mono',monospace" fontSize="9" fill="#111" fontWeight="600">⚠ idle &gt; 3 min</text>
      <rect x="305" y="133" width="145" height="18" fill="white" />
      <text x="314" y="145" fontFamily="'IBM Plex Mono',monospace" fontSize="8.5" fill="#555">rate below target</text>
      <rect x="305" y="151" width="145" height="18" fill="#e8e8e8" />
      <text x="314" y="163" fontFamily="'IBM Plex Mono',monospace" fontSize="8.5" fill="#555">bathroom: 6.1 min</text>
      <rect x="305" y="169" width="145" height="16" fill="white" />
      <text x="314" y="180" fontFamily="'IBM Plex Mono',monospace" fontSize="8" fill="#999">shift end: 3h 14m</text>
      <text x="230" y="218" fontFamily="'Space Mono',monospace" fontSize="6.5" fill="#aaa" textAnchor="middle" letterSpacing="0.5">
        ALGORITHMIC MANAGEMENT DASHBOARD — WAREHOUSE / GIG PLATFORM, 2020s
      </text>
    </svg>
  );
}

export default function Entry03Page() {
  const sources = ENTRY_SOURCES["ch1-entry03-behavior-as-dataset"];

  return (
    <main
      className="spread spread--entry01 spread--cross-ref-demo"
      aria-label="Entry 03 — Behavior as Dataset"
    >
      <div className="spread-grid">
        {/* Column A: Rail */}
        <aside className="rail" aria-label="Citations and references">
          <section className="rail__block">
            <h4 className="rail__title">Keywords</h4>
            <ul className="rail__list">
              <li>{hasGlossaryEntry("labor") ? <Link href={glossaryLink("labor")} className="rail__link">labor</Link> : "labor"}</li>
              <li>{hasGlossaryEntry("optimization") ? <Link href={glossaryLink("optimization")} className="rail__link">optimization</Link> : "optimization"}</li>
              <li>gig economy</li>
              <li>time-motion study</li>
              <li>{hasGlossaryEntry("algorithmic management") ? <Link href={glossaryLink("algorithmic management")} className="rail__link">algorithmic management</Link> : "algorithmic management"}</li>
            </ul>
            <Link href="/backmatter/glossary" className="rail__link rail__link--prompt">
              Visit the glossary →
            </Link>
          </section>

          <section className="rail__block">
            <h4 className="rail__title">Key Idea</h4>
            <p className="rail__key-idea">
              If your labor can be measured, it can be managed against you. The
              system tracks what it can measure — the question is what work gets left out.
            </p>
          </section>

          <section className="rail__block">
            <h4 className="rail__title">Quote</h4>
            <blockquote className="rail__quote">
              <p className="rail__quote-text">
                &quot;Those costs were never on the chart. They still aren&apos;t.&quot;
              </p>
              <cite className="rail__quote-attr">
                — on fatigue, pain, and what time-motion leaves out
              </cite>
            </blockquote>
          </section>

          <section className="rail__block">
            <h4 className="rail__title">Sources</h4>
            <ol className="rail__cites">
              {sources.map((s, i) => (
                <li key={i} id={`source-${i + 1}`}>
                  <Link href="/backmatter/recommended-reading" className="rail__link">
                    {s.author}, <em>{s.title}</em> ({s.year})
                  </Link>
                  {s.note && <span className="rail__note"> — {s.note}</span>}
                </li>
              ))}
            </ol>
            <Link href="/backmatter/recommended-reading" className="rail__link rail__link--more">
              Full citations →
            </Link>
          </section>

          <section className="rail__block">
            <h4 className="rail__title">See also</h4>
            <ul className="rail__list rail__list--cross-ref">
              <li><CrossRef to="ch1-entry01-body-as-dataset" showLabel display="circled" /></li>
              <li><CrossRef to="ch1-entry02-mind-as-dataset" showLabel display="circled" /></li>
              <li><CrossRef to="ch1-entry04-identity-as-dataset" showLabel display="circled" /></li>
            </ul>
          </section>
        </aside>

        {/* Column B: Artifacts */}
        <section className="artifacts" aria-label="Artifacts">
          <header className="artifacts__header">
            <div className="top-strip">
              <span>Chapter 1 — Who Was This Built For?</span>
              <span>Entry 03</span>
            </div>
            <section className="origin-header">
              <div className="origin-label">Origin</div>
              <div className="origin-text">
                When labor became measurable, the worker became the inefficiency.
              </div>
            </section>
          </header>

          <div className="artifacts__stack">
            <Artifact
              crossRefNum={1}
              crossRefStyle="circled"
              microLabel="01 / LABOR"
              title="Chronocyclegraph — Motion Study"
              imageSrc="/images/motion study.jpg"
              imageAlt="Long-exposure photograph of a motion study, showing light trails tracing a worker's movements."
              caption="CHRONOCYCLEGRAPH — Frank & Lillian Gilbreth, c. 1914–1917"
              dataRows={[
                {
                  term: "What it does",
                  definition:
                    "Light rings on workers' hands photographed in long exposure — traces every motion as a dotted arc, maps speed and direction of each gesture.",
                  sourceRef: 1
                },
                {
                  term: "Used for",
                  definition:
                    "Identifying and eliminating \"wasted\" motion — the shortest path becomes the mandated path for all workers."
                }
              ]}
              claim="There is one best way — the camera finds it objectively."
              reality="The worker's body is made legible so it can be made more efficient — fatigue, pain, and individuality are outside the frame."
            />

            <Artifact
              crossRefNum={2}
              crossRefStyle="circled"
              microLabel="02 / DASHBOARD"
              title="Algorithmic Management Dashboard"
              mediaContent={<AlgorithmicDashboardSvg />}
              caption="ALGORITHMIC MANAGEMENT DASHBOARD — Warehouse / gig platform, 2020s"
              dataRows={[
                {
                  term: "What it does",
                  definition:
                    "Tracks every worker action in real time — pace, idle time, bathroom breaks — and scores performance continuously without a human manager."
                },
                {
                  term: "Used for",
                  definition:
                    "Maintaining output targets — the algorithm fires, warns, and rates automatically."
                }
              ]}
              claim="Objective measurement — fairer than human judgment."
              reality="The system cannot measure pain or a body pushed past its limit — those costs are externalized to the worker."
            />
          </div>
        </section>

        {/* Column C: Body */}
        <section className="body explain" aria-label="Explanation">
          <header className="entry-header">
            <div className="entry-eyebrow">
              <span className="entry-module">03 / LABOR</span>
              <span className="entry-eyebrow-divider"> · </span>
              Labor Data
            </div>
            <h1 className="entry-title">
              Behavior
              <br />
              as Dataset
            </h1>
            <p className="entry-subtitle">
              Where the habit of optimizing human labor began — and who pays
            </p>
          </header>

          <figure className="body-blueprint" aria-label="Same architecture across 110 years">
            <svg viewBox="0 0 240 120" className="body-blueprint__svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <marker id="arrowhead-entry03" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="currentColor" />
                </marker>
              </defs>
              <text x="0" y="24" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.9">INPUT</text>
              <text x="0" y="48" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.9">PROCESS</text>
              <text x="0" y="72" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.9">OUTPUT</text>
              <text x="0" y="100" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.7">CONTEXT</text>
              <text x="70" y="24" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.85">labor / motion</text>
              <text x="70" y="48" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.85">measure → optimize → mandate</text>
              <text x="70" y="72" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.85">productivity score</text>
              <text x="70" y="100" fontSize="7" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.7">Gilbreths 1914 → Amazon 2020s</text>
              <line x1="55" y1="28" x2="55" y2="44" stroke="currentColor" strokeWidth="1" opacity="0.4" markerEnd="url(#arrowhead-entry03)" />
              <line x1="55" y1="52" x2="55" y2="68" stroke="currentColor" strokeWidth="1" opacity="0.4" markerEnd="url(#arrowhead-entry03)" />
            </svg>
            <figcaption className="body-blueprint__caption">Same architecture. 110 years apart.</figcaption>
          </figure>

          <div className="explain__stack">
            <p className="lead">
              Frederick Taylor used stopwatches to break every task into timed
              motions. Frank and Lillian Gilbreth used cameras to photograph
              light trails attached to workers&apos; hands — the chronocyclegraph
              — to find the shortest path between points <Cite num={1} />. Together,
              their methods produced a framework that treated the working body as
              a problem to be solved: every gesture a variable, every deviation
              from the optimum a form of waste to be corrected.
            </p>

            <section className="rule-block">
              <h2 className="rule-title">The Rule</h2>
              <p className="rule-text">
                If your labor can be measured,
                <br />
                it can be managed against you.
              </p>
            </section>

            <p className="neutral-assumption">
              The Gilbreths&apos; principle was simple:{" "}
              <em>there is one best way to do any job.</em> The camera would find
              it objectively. Break every task into motions. Time each one. Cut
              the rest. Mandate the shortest path. What neither system could
              measure was the cost absorbed by the body itself: accumulated
              fatigue, repetitive strain, the long-term damage of a life spent
              performing optimized motions. <em>Those costs were never on the chart.
              They still aren&apos;t.</em>
            </p>

            <section className="what-next">
              <h2 className="what-next-label">The Pattern</h2>
              <div className="pattern-chunks">
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Measure.</strong>
                  Turn work into quantifiable signals — keystrokes, mouse
                  movements, time-on-task, output per hour, engagement metrics.
                </p>
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Standardize.</strong>
                  Package those signals into performance scores. The system
                  optimizes toward the metric, not the person doing the work.
                </p>
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Scale.</strong>
                  Apply the measurement to everyone — customized per role,
                  identical in structure. Your behavior becomes comparable data.
                </p>
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Manage.</strong>
                  Use the data to optimize, rank, and discipline. If your labor
                  can be measured, it can be managed against you.
                </p>
              </div>
            </section>

            <p className="neutral-assumption">
              The Gilbreths photographed light trails. The algorithm logs
              keystrokes. <em>The frame is different. The logic is identical.</em>{" "}
              Your body is still the variable being optimized. It just
              doesn&apos;t clock out.
            </p>

            <section className="rule-block">
              <h2 className="rule-title">What Would a Better Version Look Like?</h2>
              <p className="rule-text">
                What if labor metrics included fatigue, recovery, and the work
                that doesn&apos;t show up in the dashboard? What if workers
                designed the measurements — and could contest them? What if
                productivity was optimized for the body&apos;s limits, not against them?
              </p>
            </section>

            <p className="neutral-assumption">
              The system tracks what it can measure. The question is: what work
              gets left out? Entry 04 asks what happens when behavior data
              hardens into a permanent record — when how you acted becomes who you
              are allowed to be.
            </p>
          </div>

          <nav className="nav-footer" aria-label="Entry navigation">
            <span>
              <Link href="/chapter-01/ch1-entry02-mind-as-dataset">
                ← Previous Entry 02 — Mind as Dataset
              </Link>
            </span>
            <span className="tags">
              Ch. 1 / Entry 03 of 04 ·{" "}
              <Link href="/frontmatter/table-of-contents" className="contents-link">
                Contents
              </Link>
            </span>
            <span>
              <Link href="/chapter-01/ch1-entry04-identity-as-dataset">
                Next → Entry 04 — Identity as Dataset
              </Link>
            </span>
          </nav>
        </section>
      </div>
    </main>
  );
}

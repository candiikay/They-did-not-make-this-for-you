import Link from "next/link";
import { Artifact } from "@/app/components/Artifact";
import { Cite } from "@/app/components/Cite";
import { CrossRef } from "@/app/components/CrossRef";
import { glossaryLink, hasGlossaryEntry } from "@/app/lib/glossary";
import { ENTRY_SOURCES } from "@/app/lib/entry-sources";

export const metadata = {
  title: "Entry 02 — Mind as Dataset",
  description: "They Did Not Make This For You — Entry 02"
};

export default function Entry02Page() {
  const sources = ENTRY_SOURCES["ch1-entry02-mind-as-dataset"];

  return (
    <main
      className="spread spread--entry01 spread--cross-ref-demo"
      aria-label="Entry 02 — Mind as Dataset"
    >
      <div className="spread-grid">
        {/* Column A: Rail — Keywords, Key Idea, Quote, Sources, See also */}
        <aside className="rail" aria-label="Citations and references">
          <section className="rail__block">
            <h4 className="rail__title">Keywords</h4>
            <ul className="rail__list">
              <li>behaviorism</li>
              <li>
                {hasGlossaryEntry("attention economy") ? (
                  <Link href={glossaryLink("attention economy")} className="rail__link">
                    attention economy
                  </Link>
                ) : (
                  "attention economy"
                )}
              </li>
              <li>
                {hasGlossaryEntry("variable reward") ? (
                  <Link href={glossaryLink("variable reward")} className="rail__link">
                    variable reward
                  </Link>
                ) : (
                  "variable reward"
                )}
              </li>
              <li>engagement</li>
              <li>
                {hasGlossaryEntry("mechanism") ? (
                  <Link href={glossaryLink("mechanism")} className="rail__link">
                    mechanism
                  </Link>
                ) : (
                  "mechanism"
                )}
              </li>
            </ul>
            <Link href="/backmatter/glossary" className="rail__link rail__link--prompt">
              Visit the glossary →
            </Link>
          </section>

          <section className="rail__block">
            <h4 className="rail__title">Key Idea</h4>
            <p className="rail__key-idea">
              Variable rewards produce compulsive behavior. The feed is the Skinner
              box at three billion people scale.
            </p>
          </section>

          <section className="rail__block">
            <h4 className="rail__title">Quote</h4>
            <blockquote className="rail__quote">
              <p className="rail__quote-text">
                &quot;The mechanism I built was a lever. The phone was the box.&quot;
              </p>
              <cite className="rail__quote-attr">
                — Loren Brichter, on pull-to-refresh <Cite num={3} />
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
              <li>
                <CrossRef to="ch1-entry01-body-as-dataset" showLabel display="circled" />
              </li>
              <li>
                <CrossRef to="ch1-entry03-behavior-as-dataset" showLabel display="circled" />
              </li>
              <li>
                <CrossRef to="ch1-entry04-identity-as-dataset" showLabel display="circled" />
              </li>
            </ul>
          </section>
        </aside>

        {/* Column B: Artifacts */}
        <section className="artifacts" aria-label="Artifacts">
          <header className="artifacts__header">
            <div className="top-strip">
              <span>Chapter 1 — Who Was This Built For?</span>
              <span>Entry 02</span>
            </div>
            <section className="origin-header">
              <div className="origin-label">Origin</div>
              <div className="origin-text">
                When behavior became measurable, it became engineerable.
              </div>
            </section>
          </header>

          <div className="artifacts__stack">
            <Artifact
              crossRefNum={1}
              crossRefStyle="circled"
              microLabel="01 / MIND"
              title="Skinner Box (Operant Chamber)"
              imageSrc="/images/rat.png"
              imageAlt="Skinner box operant conditioning diagram"
              caption="SKINNER BOX — Variable reward schedule, 1938"
              dataRows={[
                {
                  term: "What it does",
                  definition:
                    "Isolates an animal to measure how reward schedules shape behavior — press the lever, sometimes get food, behavior accelerates."
                },
                {
                  term: "Used for",
                  definition:
                    "Proving that behavior could be engineered without appeal to thought, intention, or mind."
                }
              ]}
              claim="Stimulus and response are sufficient to explain learning."
              reality="The framework migrated from lab animals to humans — variable reward now runs inside every feed and notification."
            />

            <Artifact
              crossRefNum={2}
              crossRefStyle="circled"
              microLabel="02 / FEED"
              title="Infinite Scroll + Variable Reward Feed"
              imageSrc="/images/Phone.png"
              imageAlt="Variable reward feed — slot machine to smartphone"
              caption="INFINITE SCROLL + VARIABLE REWARD — 2009–present (pull-to-refresh: Loren Brichter; infinite scroll: Aza Raskin)"
              dataRows={[
                {
                  term: "What it does",
                  definition:
                    "Delivers unpredictable reward intervals through an endless content stream — the variable-ratio reinforcement schedule Skinner identified as the most compulsive."
                },
                {
                  term: "Used for",
                  definition:
                    "Maximizing time-on-platform — attention packaged and sold to advertisers, behavior used to train recommendation algorithms."
                }
              ]}
              claim="Personalization — the system learns what you want and gives it to you."
              reality="The system optimizes for engagement, not wellbeing — and the mind becomes the resource being extracted."
            />
          </div>
        </section>

        {/* Column C: Body with explanation */}
        <section className="body explain" aria-label="Explanation">
          <header className="entry-header">
            <div className="entry-eyebrow">
              <span className="entry-module">02 / MIND</span>
              <span className="entry-eyebrow-divider"> · </span>
              Behavioral Data
            </div>
            <h1 className="entry-title">
              The Mind
              <br />
              as Dataset
            </h1>
            <p className="entry-subtitle">
              Where the habit of shaping behavior began — and what it became
            </p>
          </header>

          <figure className="body-blueprint" aria-label="Same architecture across 80 years">
            <svg viewBox="0 0 240 120" className="body-blueprint__svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <marker id="arrowhead-entry02" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="currentColor" />
                </marker>
              </defs>
              <text x="0" y="24" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.9">INPUT</text>
              <text x="0" y="48" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.9">PROCESS</text>
              <text x="0" y="72" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.9">OUTPUT</text>
              <text x="0" y="100" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.7">CONTEXT</text>
              <text x="70" y="24" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.85">behavior / attention</text>
              <text x="70" y="48" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.85">variable reward → compulsive use</text>
              <text x="70" y="72" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.85">engagement</text>
              <text x="70" y="100" fontSize="7" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.7">Harvard 1938 → Silicon Valley 2009</text>
              <line x1="55" y1="28" x2="55" y2="44" stroke="currentColor" strokeWidth="1" opacity="0.4" markerEnd="url(#arrowhead-entry02)" />
              <line x1="55" y1="52" x2="55" y2="68" stroke="currentColor" strokeWidth="1" opacity="0.4" markerEnd="url(#arrowhead-entry02)" />
            </svg>
            <figcaption className="body-blueprint__caption">Same architecture. 80 years apart.</figcaption>
          </figure>

          <div className="explain__stack">
            <p className="lead">
              Skinner&apos;s most consequential discovery wasn&apos;t that reward
              shapes behavior — it was <em>which reward schedule shapes it most
              powerfully</em>. Fixed rewards produce reliable behavior. Variable
              rewards produce compulsive behavior. The rat presses the lever
              faster. It doesn&apos;t stop when the food runs out.
            </p>

            <section className="rule-block">
              <h2 className="rule-title">The Rule</h2>
              <p className="rule-text">
                The feed is the Skinner box
                <br />
                at three billion people scale.
              </p>
            </section>

            <p className="neutral-assumption">
              This is the slot machine principle. It is also the principle behind
              pull-to-refresh, the Like button, the autoplay queue, and the
              notification badge. Loren Brichter, who designed pull-to-refresh in
              2009,               has since called it one of his greatest regrets{" "}
              <Cite num={3} />. The mechanism he built was a lever. The phone
              was the box.
            </p>

            <section className="what-next">
              <h2 className="what-next-label">The Pattern</h2>
              <div className="pattern-chunks">
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Reduce.</strong>
                  Turn attention into a measurable signal — clicks, dwell time,
                  scroll depth, return rate, shares.
                </p>
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Standardize.</strong>
                  Package those signals into an engagement score. The algorithm
                  optimizes toward the number, not the person behind it.
                </p>
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Scale.</strong>
                  Apply the box to everyone — customized per user, identical in
                  structure. Three billion people, one mechanism.
                </p>
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Hide.</strong>
                  Call it personalization. Call it discovery. Never call it what
                  it is: a variable reward schedule operating on human attention
                  without consent.
                </p>
              </div>
            </section>

            <p className="neutral-assumption">
              Skinner proved behavior could be shaped without touching the mind —
              just control the environment. Seventy years later, a handful of
              designers in Silicon Valley applied the same principle to human
              attention. The box got bigger. <em>The lever is now in your pocket.</em>
            </p>

          </div>

          <nav className="nav-footer" aria-label="Entry navigation">
            <span>
              <Link href="/chapter-01/ch1-entry01-body-as-dataset">
                ← Previous Entry 01 — Body as Dataset
              </Link>
            </span>
            <span className="tags">
              Ch. 1 / Entry 02 of 04 ·{" "}
              <Link href="/frontmatter/table-of-contents" className="contents-link">
                Contents
              </Link>
            </span>
            <span>
              <Link href="/chapter-01/ch1-entry03-behavior-as-dataset">
                Next → Entry 03 — Behavior as Dataset
              </Link>
            </span>
          </nav>
        </section>
      </div>
    </main>
  );
}

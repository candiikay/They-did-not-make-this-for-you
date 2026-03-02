import Link from "next/link";
import { Artifact } from "@/app/components/Artifact";
import { CrossRef } from "@/app/components/CrossRef";
import { glossaryLink, hasGlossaryEntry } from "@/app/lib/glossary";
import { ENTRY_SOURCES } from "@/app/lib/entry-sources";

export const metadata = {
  title: "Entry 04 — Identity as Dataset",
  description: "They Did Not Make This For You — Entry 04"
};

export default function Entry04Page() {
  const sources = ENTRY_SOURCES["ch1-entry04-identity-as-dataset"];

  return (
    <main
      className="spread spread--entry01 spread--cross-ref-demo"
      aria-label="Entry 04 — Identity as Dataset"
    >
      <div className="spread-grid">
        {/* Column A: Rail */}
        <aside className="rail" aria-label="Citations and references">
          <section className="rail__block">
            <h4 className="rail__title">Keywords</h4>
            <ul className="rail__list">
              <li>{hasGlossaryEntry("credit scoring") ? <Link href={glossaryLink("credit scoring")} className="rail__link">credit scoring</Link> : "credit scoring"}</li>
              <li>{hasGlossaryEntry("risk assessment") ? <Link href={glossaryLink("risk assessment")} className="rail__link">risk assessment</Link> : "risk assessment"}</li>
              <li>redlining</li>
              <li>algorithmic justice</li>
              <li>{hasGlossaryEntry("the profile") ? <Link href={glossaryLink("the profile")} className="rail__link">the profile</Link> : "the profile"}</li>
            </ul>
            <Link href="/backmatter/glossary" className="rail__link rail__link--prompt">
              Visit the glossary →
            </Link>
          </section>

          <section className="rail__block">
            <h4 className="rail__title">Key Idea</h4>
            <p className="rail__key-idea">
              The score does not describe who you are. It decides what you are
              allowed to do.
            </p>
          </section>

          <section className="rail__block">
            <h4 className="rail__title">Quote</h4>
            <blockquote className="rail__quote">
              <p className="rail__quote-text">
                &quot;Nobody had consented. Nobody could see their own file.&quot;
              </p>
              <cite className="rail__quote-attr">
                — Retail Credit files before FCRA
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
              <li><CrossRef to="ch1-entry03-behavior-as-dataset" showLabel display="circled" /></li>
              <li><CrossRef to="ch1-reader-as-artifact" showLabel display="circled" /></li>
            </ul>
          </section>
        </aside>

        {/* Column B: Artifacts */}
        <section className="artifacts" aria-label="Artifacts">
          <header className="artifacts__header">
            <div className="top-strip">
              <span>Chapter 1 — Who Was This Built For?</span>
              <span>Entry 04</span>
            </div>
            <section className="origin-header">
              <div className="origin-label">Origin</div>
              <div className="origin-text">
                When records became permanent, the person became the profile.
              </div>
            </section>
          </header>

          <div className="artifacts__stack">
            <Artifact
              crossRefNum={1}
              crossRefStyle="circled"
              microLabel="01 / CREDIT"
              title="Consumer Credit File"
              imageSrc="/images/consumer file.png"
              imageAlt="Retail Credit Company consumer file — pre-FCRA era"
              caption="CONSUMER CREDIT FILE — Retail Credit Co. (now Equifax), 1899–1970"
              dataRows={[
                {
                  term: "What it does",
                  definition:
                    "Compiles financial transactions, employer records, and neighborhood gossip into a permanent dossier — graded by clerks who never meet the subject."
                },
                {
                  term: "Used for",
                  definition:
                    "Deciding who gets credit, insurance, housing, and employment — the file follows you, but you cannot see it."
                }
              ]}
              claim="Objective risk assessment — protecting lenders from bad borrowers."
              reality="Moral judgments disguised as financial ones — marital status, race, neighborhood, and character hearsay determined your score before your payment history did."
            />

            <Artifact
              crossRefNum={2}
              crossRefStyle="circled"
              microLabel="02 / RISK"
              title="Algorithmic Risk Assessment (COMPAS)"
              imageSrc="/images/credit.png"
              imageAlt="Algorithmic risk assessment — pretrial/sentencing"
              imageClass="rotate-90"
              caption="COMPAS — Northpointe / Equivant, 2000s–present"
              dataRows={[
                {
                  term: "What it does",
                  definition:
                    "Scores defendants on 137 variables to predict recidivism — used by judges at sentencing and bail hearings.",
                  sourceRef: 1
                },
                {
                  term: "Used for",
                  definition:
                    "Deciding who goes free and who stays in jail before trial — the score replaces human judgment."
                }
              ]}
              claim="Objective, race-neutral prediction of future behavior."
              reality="ProPublica found Black defendants scored high risk at nearly twice the rate of white defendants — for the same charge. The algorithm cannot be audited. The score cannot be appealed."
              realitySourceRef={1}
            />
          </div>
        </section>

        {/* Column C: Body */}
        <section className="body explain" aria-label="Explanation">
          <header className="entry-header">
            <div className="entry-eyebrow">
              <span className="entry-module">04 / IDENTITY</span>
              <span className="entry-eyebrow-divider"> · </span>
              Identity Data
            </div>
            <h1 className="entry-title">
              Identity
              <br />
              as Dataset
            </h1>
            <p className="entry-subtitle">
              Where the habit of scoring people began — and what it locked in
            </p>
          </header>

          <figure className="body-blueprint" aria-label="Same architecture across 120 years">
            <svg viewBox="0 0 240 120" className="body-blueprint__svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <marker id="arrowhead-entry04" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="currentColor" />
                </marker>
              </defs>
              <text x="0" y="24" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.9">INPUT</text>
              <text x="0" y="48" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.9">PROCESS</text>
              <text x="0" y="72" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.9">OUTPUT</text>
              <text x="0" y="100" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.7">CONTEXT</text>
              <text x="70" y="24" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.85">behavior / transactions</text>
              <text x="70" y="48" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.85">record → score → lock in</text>
              <text x="70" y="72" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.85">access / denial</text>
              <text x="70" y="100" fontSize="7" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.7">Retail Credit 1899 → COMPAS 2000s</text>
              <line x1="55" y1="28" x2="55" y2="44" stroke="currentColor" strokeWidth="1" opacity="0.4" markerEnd="url(#arrowhead-entry04)" />
              <line x1="55" y1="52" x2="55" y2="68" stroke="currentColor" strokeWidth="1" opacity="0.4" markerEnd="url(#arrowhead-entry04)" />
            </svg>
            <figcaption className="body-blueprint__caption">Same architecture. 120 years apart.</figcaption>
          </figure>

          <div className="explain__stack">
            <p className="lead">
              Before the algorithm, there was the ledger. The Retail Credit
              Company, founded in 1899, sent agents door to door to compile
              files on consumers. They recorded debts, but they also recorded
              drinking habits, marital disputes, political affiliations, and
              whether a wife worked outside the home. By 1960, they held files
              on millions of Americans. <em>Nobody had consented. Nobody could see
              their own file.</em>
            </p>

            <section className="rule-block">
              <h2 className="rule-title">The Rule</h2>
              <p className="rule-text">
                The score does not describe who you are. It decides what you are
                <br />
                allowed to do.
              </p>
            </section>

            <p className="neutral-assumption">
              In 1970, Congress passed the Fair Credit Reporting Act because
              Retail Credit&apos;s files had become so powerful — and so
              inaccurate — that people were losing jobs and homes over rumors
              filed by strangers. The law gave consumers the right to see their
              files. It did not give them the right to escape the system.{" "}
              <em>The file became a score. The score became infrastructure.</em>
            </p>

            <p className="neutral-assumption">
              The FICO score, introduced in 1989, replaced the gossip with a
              formula. Three digits. No human judgment — only inputs and
              outputs. But the inputs still encoded the old logic:{" "}
              <em>who lives where, who owes what, who has been inside the system
              long enough to be trusted.</em> The formula made the discrimination
              invisible. That was the point.
            </p>

            <section className="what-next">
              <h2 className="what-next-label">The Pattern</h2>
              <div className="pattern-chunks">
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Record.</strong>
                  Collect data points from behavior, location, associations,
                  transactions — anything that can be logged becomes part of your profile.
                </p>
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Score.</strong>
                  Package those data points into a number. The score does not
                  describe who you are — it decides what you are allowed to do.
                </p>
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Lock.</strong>
                  Make the record permanent. Past behavior becomes future
                  constraint. The score follows you, and you cannot appeal it.
                </p>
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Decide.</strong>
                  Use the score to grant or deny access — to credit, housing,
                  jobs, freedom. The system decides who gets to participate.
                </p>
              </div>
            </section>
          </div>

          <nav className="nav-footer" aria-label="Entry navigation">
            <span>
              <Link href="/chapter-01/ch1-entry03-behavior-as-dataset">
                ← Previous Entry 03 — Behavior as Dataset
              </Link>
            </span>
            <span className="tags">
              Ch. 1 / Entry 04 of 04 ·{" "}
              <Link href="/frontmatter/table-of-contents" className="contents-link">
                Contents
              </Link>
            </span>
            <span>
              <Link href="/chapter-01/ch1-reader-as-artifact">
                Next → Digression
              </Link>
            </span>
          </nav>
        </section>
      </div>
    </main>
  );
}

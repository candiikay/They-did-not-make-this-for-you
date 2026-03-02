import Link from "next/link";
import { Artifact } from "@/app/components/Artifact";
import { Cite } from "@/app/components/Cite";
import { CrossRef } from "@/app/components/CrossRef";
import { glossaryLink, hasGlossaryEntry } from "@/app/lib/glossary";
import { ENTRY_SOURCES } from "@/app/lib/entry-sources";

export const metadata = {
  title: "Prototype — Cross-reference Demo",
  description: "Test page for numbered cross-reference system"
};

export default function CrossRefDemoPage() {
  const sources = ENTRY_SOURCES["ch1-entry01-body-as-dataset"];

  return (
    <main
      className="spread spread--entry01 spread--cross-ref-demo"
      aria-label="Prototype — Cross-reference demo"
    >
      <div className="prototype-banner" role="status">
        Prototype — Same design as{" "}
        <Link href="/chapter-01/ch1-entry01-body-as-dataset">
          Entry 01
        </Link>
      </div>

      <div className="spread-grid">
        {/* Column A: Rail — Keywords, Key Idea, Quote, Sources, See also */}
        <aside className="rail" aria-label="Citations and references">
          <section className="rail__block">
            <h4 className="rail__title">Keywords</h4>
            <ul className="rail__list">
              <li>
                {hasGlossaryEntry("classification") ? (
                  <Link href={glossaryLink("classification")} className="rail__link">
                    classification
                  </Link>
                ) : (
                  "classification"
                )}
              </li>
              <li>biometrics</li>
              <li>
                {hasGlossaryEntry("default user") ? (
                  <Link href={glossaryLink("default user")} className="rail__link">
                    default user
                  </Link>
                ) : (
                  "default user"
                )}
              </li>
              <li>measurement</li>
              <li>
                {hasGlossaryEntry("surveillance") ? (
                  <Link href={glossaryLink("surveillance")} className="rail__link">
                    surveillance
                  </Link>
                ) : (
                  "surveillance"
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
              Classification systems inherit the worlds that built them. You cannot
              audit your way out of a biased archive.
            </p>
          </section>

          <section className="rail__block">
            <h4 className="rail__title">Quote</h4>
            <blockquote className="rail__quote">
              <p className="rail__quote-text">
                &quot;Surveillance is nothing new to black folks. It is the fact of
                antiblackness.&quot;
              </p>
              <cite className="rail__quote-attr">
                — Simone Browne, <em>Dark Matters</em> <Cite num={5} />
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
                <CrossRef to="ch1-entry02-mind-as-dataset" showLabel display="circled" />
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

        {/* Column B: Artifacts with numbers */}
        <section className="artifacts" aria-label="Artifacts">
          <header className="artifacts__header">
            <div className="top-strip">
              <span>Chapter 1 — Who Was This Built For?</span>
              <span>Entry 01</span>
            </div>
            <section className="origin-header">
              <div className="origin-label">Origin</div>
              <div className="origin-text">
                When the state learned to make bodies legible, it made some bodies
                suspicious <Cite num={3} /> <Cite num={5} />. Classification grew from policing, medicine,
                colonial census systems — the same habit.
              </div>
            </section>
          </header>

          <div className="artifacts__stack">
            <Artifact
              crossRefNum={1}
              crossRefStyle="circled"
              microLabel="01 / BODY"
              title="Bertillon Anthropometric System"
              imageSrc="/images/bertillon-card.png"
              imageAlt="Bertillon anthropometric measurement system"
              caption="BERTILLON ANTHROPOMETRIC SYSTEM — Paris Prefecture of Police, 1879"
              dataRows={[
                {
                  term: "What it does",
                  definition:
                    "Measures 11 body parts — head length, arm span, ear size, foot length — to build a numeric identity profile for each subject.",
                  sourceRef: 3
                },
                {
                  term: "Used for",
                  definition:
                    "Building a police database to identify repeat offenders — exported to forces across Europe and the US by 1903.",
                  sourceRef: 3
                }
              ]}
              claim="Scientific measurement removes bias from identification."
              reality="Measurement started with people already labeled suspicious — errors and surveillance fell disproportionately on poor, immigrant, and colonized populations."
            />

            <Artifact
              crossRefNum={2}
              crossRefStyle="circled"
              microLabel="02 / FACE"
              title="Gender Shades Audit"
              imageSrc="/images/gender-shades-chart.jpg"
              imageAlt="Gender Shades facial recognition audit — error rates by skin tone"
              caption="GENDER SHADES — Joy Buolamwini, MIT Media Lab, 2018"
              dataRows={[
                {
                  term: "What it does",
                  definition:
                    "Tests three commercial facial recognition APIs on 1,270 faces across gender and the Fitzpatrick skin tone scale.",
                  sourceRef: 1
                },
                {
                  term: "Used for",
                  definition:
                    "Evaluating whether AI systems classify people equally across groups."
                }
              ]}
              claim="Facial recognition works accurately across all users."
              reality="Error rates up to 34% for darker-skinned women vs. under 1% for lighter-skinned men — in the same system."
              realitySourceRef={1}
            />
          </div>
        </section>

        {/* Column C: Body with inline cross-refs */}
        <section className="body explain" aria-label="Explanation">
          <header className="entry-header">
            <div className="entry-eyebrow">
              <span className="entry-module">01 / BODY</span>
              <span className="entry-eyebrow-divider"> · </span>
              Training Data
            </div>
            <h1 className="entry-title">
              The Body
              <br />
              as Dataset
            </h1>
            <p className="entry-subtitle">
              How systems inherit the assumptions of their makers
            </p>
          </header>

          <figure className="body-blueprint" aria-label="Same architecture across 139 years">
            <svg viewBox="0 0 240 120" className="body-blueprint__svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <marker id="arrowhead-prototype" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="currentColor" />
                </marker>
              </defs>
              {/* Labels column — aligned left, minimal */}
              <text x="0" y="24" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.9">INPUT</text>
              <text x="0" y="48" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.9">PROCESS</text>
              <text x="0" y="72" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.9">OUTPUT</text>
              <text x="0" y="100" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.7">CONTEXT</text>
              {/* Details column */}
              <text x="70" y="24" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.85">body / face</text>
              <text x="70" y="48" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.85">measure → classify, claim objectivity</text>
              <text x="70" y="72" fontSize="8" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.85">identity</text>
              <text x="70" y="100" fontSize="7" fill="currentColor" fontFamily="IBM Plex Mono, monospace" opacity="0.7">Paris 1879 → Everywhere 2018</text>
              {/* Flow arrows */}
              <line x1="55" y1="28" x2="55" y2="44" stroke="currentColor" strokeWidth="1" opacity="0.4" markerEnd="url(#arrowhead-prototype)" />
              <line x1="55" y1="52" x2="55" y2="68" stroke="currentColor" strokeWidth="1" opacity="0.4" markerEnd="url(#arrowhead-prototype)" />
            </svg>
            <figcaption className="body-blueprint__caption">Same architecture. 139 years apart.</figcaption>
          </figure>

          <div className="explain__stack">
            <p className="lead">
              Nobody announced that certain bodies would be the template for how
              systems learn to see. It just happened — in the archives researchers
              drew from, in the labs that built the tools, in the datasets that
              trained the models.
            </p>

            <section className="rule-block">
              <h2 className="rule-title">The Rule</h2>
              <p className="rule-text">
                Many systems inherit a default body.
                <br />
                Everyone else becomes the error rate.
              </p>
            </section>

            <p className="neutral-assumption">
              Their measurements pretend to be neutral and universal{" "}
              <Cite num={2} /> <Cite num={6} />. The Bertillon scheme and commercial facial
              recognition APIs both present their categories as objective facts.
            </p>

            <section className="what-next">
              <h2 className="what-next-label">The Pattern</h2>
              <div className="pattern-chunks">
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Architecture.</strong>
                  The structure repeats: a body is measured, the measurement
                  becomes a record, the record enters a system, and the system
                  treats its own categories as neutral. Bertillon&apos;s 11-field
                  schema and a facial recognition API are separated by 139 years
                  but share the same architecture:
                  <span className="pattern-list">
                    input a body, classify it, claim objectivity, push the errors
                    onto the same groups.
                  </span>
                </p>
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Default body.</strong>
                  The pattern doesn&apos;t need intent. It only needs a default —
                  a body it was built around, a dataset it was trained on — and
                  the rest of us live inside its error margins. The bias is
                  structural, not personal.
                </p>
                <p className="pattern-chunk">
                  <strong className="pattern-chunk__head">Audits.</strong>
                  Gender Shades measured the gap; it didn&apos;t close it. To
                  change who the system is built for, you have to rebuild the
                  archive, not just measure it.
                </p>
              </div>
            </section>
          </div>

          <nav className="nav-footer" aria-label="Entry navigation">
            <span>
              <Link href="/frontmatter/table-of-contents">
                ← Table of Contents
              </Link>
            </span>
            <span className="tags">
              Ch. 1 / Entry 01 of 04 ·{" "}
              <Link href="/frontmatter/table-of-contents" className="contents-link">
                Contents
              </Link>
            </span>
            <span>
              <Link href="/chapter-01/ch1-entry02-mind-as-dataset">
                Next → Entry 02 — Mind as Dataset
              </Link>
            </span>
          </nav>
        </section>
      </div>
    </main>
  );
}

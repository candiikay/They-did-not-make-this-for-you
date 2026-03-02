import Link from "next/link";
import { CrossRef } from "@/app/components/CrossRef";
import { glossaryLink, hasGlossaryEntry } from "@/app/lib/glossary";
import { ENTRY_SOURCES } from "@/app/lib/entry-sources";

export const metadata = {
  title: "Digression — They Did Not Make This For You",
  description: "They Did Not Make This For You — Digression"
};

export default function ReaderAsArtifactPage() {
  const sources = ENTRY_SOURCES["ch1-reader-as-artifact"];

  return (
    <main
      className="spread spread--entry01 spread--cross-ref-demo"
      aria-label="Digression"
    >
      <div className="spread-grid">
        {/* Column A: Rail */}
        <aside className="rail" aria-label="Citations and references">
          <section className="rail__block">
            <h4 className="rail__title">Keywords</h4>
            <ul className="rail__list">
              <li>{hasGlossaryEntry("discretion") ? <Link href={glossaryLink("discretion")} className="rail__link">discretion</Link> : "discretion"}</li>
              <li>reflection</li>
              <li>catalog</li>
              <li>you</li>
              <li>reader</li>
            </ul>
            <Link href="/backmatter/glossary" className="rail__link rail__link--prompt">
              Visit the glossary →
            </Link>
          </section>

          <section className="rail__block">
            <h4 className="rail__title">Key Idea</h4>
            <p className="rail__key-idea">
              Reduce a person to data, and the person becomes manageable.
            </p>
          </section>

          <section className="rail__block">
            <h4 className="rail__title">Quote</h4>
            <blockquote className="rail__quote">
              <p className="rail__quote-text">
                &quot;Every system described in this chapter was built by someone,
                for someone, and you were not in the room.&quot;
              </p>
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
              <li><CrossRef to="ch1-entry04-identity-as-dataset" showLabel display="circled" /></li>
            </ul>
          </section>
        </aside>

        {/* Column B: Artifacts */}
        <section className="artifacts" aria-label="Artifacts">
          <header className="artifacts__header">
            <div className="top-strip">
              <span>Chapter 1 — Who Was This Built For?</span>
              <span>Digression</span>
            </div>
            <section className="origin-header">
              <div className="origin-label">Origin</div>
              <div className="origin-text">You are already in the archive.</div>
            </section>
          </header>

          <div className="artifacts__stack">
            <figure className="img-wrap-empty">
              <div className="img-wrap-empty__frame" aria-hidden="true" />
              <figcaption className="img-wrap-empty__caption">
                [ no image — you are the artifact ]
              </figcaption>
            </figure>

            <div className="artifact-card-full">
              <div className="acf-row">
                <span className="ac-key">Artifact</span>
                <span className="ac-val bold">You</span>
              </div>
              <div className="acf-row">
                <span className="ac-key">Date</span>
                <span className="ac-val">
                  ongoing — no expiration, no opt-out
                </span>
              </div>
              <div className="acf-row">
                <span className="ac-key">Medium</span>
                <span className="ac-val">
                  body, behavior, attention, identity — recorded across platforms
                  you chose and ones you didn&apos;t
                </span>
              </div>
              <div className="acf-row">
                <span className="ac-key">Classified by</span>
                <span className="ac-val">
                  face (Entry 01) — your body measured, sorted, compared against a
                  norm you did not set
                </span>
              </div>
              <div className="acf-row">
                <span className="ac-key">Shaped by</span>
                <span className="ac-val">
                  feed (Entry 02) — your attention captured by variable reward, your
                  habits engineered without disclosure
                </span>
              </div>
              <div className="acf-row">
                <span className="ac-key">Tracked by</span>
                <span className="ac-val">
                  output (Entry 03) — your labor monitored in keystrokes, idle
                  time, pace — the body as efficiency variable
                </span>
              </div>
              <div className="acf-row">
                <span className="ac-key">Scored by</span>
                <span className="ac-val">
                  profile (Entry 04) — your past collapsed into a number that
                  decides your future before you arrive
                </span>
              </div>
              <div className="acf-row">
                <span className="ac-key">Used for</span>
                <span className="ac-val">
                  risk scoring, ad targeting, productivity management, and future
                  prediction, all at once.
                </span>
              </div>
              <div className="acf-row">
                <span className="ac-key">Claim</span>
                <span className="ac-val italic">
                  personalization. convenience. safety. objectivity. progress.
                </span>
              </div>
              <div className="acf-row">
                <span className="ac-key">
                  Reality /
                  <br />
                  Who pays
                </span>
                <span className="ac-val heavy">
                  You pay in access, time, opportunity, and safety; the receipt
                  lives in systems you cannot see.
                </span>
              </div>
            </div>

            <div className="timeline-strip timeline-strip--entry01">
              <div className="tl-node">
                <span className="tl-year">born</span>
                <div className="tl-dot" />
                <span className="tl-label">entered</span>
              </div>
              <div className="tl-line" />
              <div className="tl-node">
                <span className="tl-year">~13</span>
                <div className="tl-dot" />
                <span className="tl-label">
                  first login; tracking becomes continuous
                </span>
              </div>
              <div className="tl-line" />
              <div className="tl-node">
                <span className="tl-year">~18</span>
                <div className="tl-dot" />
                <span className="tl-label">
                  first formal score; decisions begin without you
                </span>
              </div>
              <div className="tl-line" />
              <div className="tl-node now">
                <span className="tl-year">now</span>
                <div className="tl-dot" />
                <span className="tl-label">reading this; awareness enters the system</span>
              </div>
            </div>
          </div>
        </section>

        {/* Column C: Body */}
        <section className="body explain" aria-label="Explanation">
          <header className="entry-header">
            <div className="entry-eyebrow">
              <span className="entry-module">Digression</span>
            </div>
            <h1 className="entry-title">Digression</h1>
            <p className="entry-subtitle">
              The subject of every previous entry is the person holding this one
            </p>
          </header>

          <div className="explain__stack">
            <section className="rule-block">
              <h2 className="rule-title">The Rule</h2>
              <p className="rule-text">
                You were not asked. You were not
                <br />
                informed. You were not the customer.
                <br />
                Now you know.
              </p>
            </section>

            <div className="discretion">
              <div className="discretion-label">Discretion</div>
              <div className="discretion-body">
                <p>This is not the part where I tell you what to do.</p>

                <p>
                  I could tell you to delete your accounts. To use a VPN. To pay
                  with cash, opt out of data sharing, read the terms of service,
                  switch to Linux, cover your webcam. Some of that is useful. None
                  of it is the point.
                </p>

                <p>
                  The point is that{" "}
                  <strong>
                    every system described in this chapter was built by someone, for
                    someone, and you were not in the room
                  </strong>
                  . Your body was measured without your knowledge. Your attention
                  was engineered without your consent. Your labor was optimized
                  without your input. Your identity was scored without your
                  participation. These are not four separate problems. They are one
                  habit, applied four times.
                </p>

                <p>
                  Researchers like Kate Crawford, Shoshana Zuboff, and Simone
                  Browne have shown that this isn&apos;t an accident or a glitch.
                  It is a business model and a power structure built on making
                  people legible as data and profitable as prediction.
                </p>

                <p>
                  The habit is this:{" "}
                  <em>reduce a person to data, and the person becomes manageable.</em>
                </p>

                <p>
                  I wrote this because I kept thumbing up everything. Liking posts I
                  didn&apos;t read. Accepting terms I didn&apos;t understand.
                  Scanning my face to unlock a phone I&apos;d already picked up
                  eleven times that hour. I wasn&apos;t making choices. I was
                  performing compliance inside a system that had learned exactly how
                  to ask.
                </p>

                <p>
                  The word <em>discretion</em> means two things. It means the
                  freedom to decide. And it means the quality of being careful about
                  what you reveal. Both definitions matter here. Both have been
                  taken from you so gradually that the loss felt like convenience.
                </p>

                <p>
                  This chapter asked: <em>who was this built for?</em>
                </p>

                <p>
                  You now have enough information to answer that question. What you
                  do with the answer is the first decision in this book that is
                  entirely yours.
                </p>
              </div>
            </div>

            <section className="what-next">
              <h2 className="what-next-label">What comes next</h2>
              <p>
                Chapter 2 asks how these systems talk to each other — how the data
                from your body, your mind, your labor, and your identity flows
                between institutions, and what happens when it merges.
              </p>
            </section>
          </div>

          <nav className="nav-footer" aria-label="Entry navigation">
            <span>
              <Link href="/chapter-01/ch1-entry04-identity-as-dataset">
                ← Previous Entry 04 — Identity as Dataset
              </Link>
            </span>
            <span className="tags">
              Ch. 1 / Digression ·{" "}
              <Link href="/frontmatter/table-of-contents" className="contents-link">
                Contents
              </Link>
            </span>
            <span className="nav-coming-soon">Next → (coming soon)</span>
          </nav>
        </section>
      </div>
    </main>
  );
}

import Link from "next/link";
import { EntrySources } from "@/app/components/EntrySources";
import { glossaryLink, hasGlossaryEntry } from "@/app/lib/glossary";
import { ENTRY_SOURCES } from "@/app/lib/entry-sources";

export const metadata = {
  title: "Entry 02 — Mind as Dataset",
  description: "They Did Not Make This For You — Entry 02"
};

export default function Entry02Page() {
  return (
    <main className="spread spread--continuous" aria-label="Entry 02 — The Mind as Dataset">
      <section className="page-left" aria-label="Behaviorist experiment and setup">
        <section className="entry-meta">
          <span className="entry-meta-line">ENTRY 02</span>
          <span className="entry-meta-line">DATE: 1930s–present</span>
          <span className="entry-meta-line">TYPE: Behavioral system</span>
          <span className="entry-meta-line">USED FOR: Shaping behavior / prediction</span>
        </section>
        <section className="origin-header">
          <div className="origin-label">Origin</div>
          <div className="origin-text">
            When behavior became measurable, it became engineerable.
          </div>
        </section>

        <header className="entry-header">
          <div className="entry-eyebrow">Behavioral Data</div>
          <div className="entry-title">
            The Mind
            <br />
            as Dataset
          </div>
          <div className="entry-subtitle">
            Where the habit of shaping behavior began — and what it became
          </div>
        </header>

        <figure className="img-wrap">
          <img
            src="/images/rat.png"
            alt="Skinner box operant conditioning diagram"
          />
          <figcaption className="img-wrap-caption">
            <span className="img-wrap-caption-main">
              SKINNER BOX — Variable reward schedule, 1938
            </span>
            <span className="img-wrap-caption-sub">
              The lever delivers food on a variable schedule. The rat presses
              faster. It doesn&apos;t stop when the food runs out.
            </span>
          </figcaption>
        </figure>

        <div className="artifact-card">
          <div className="ac-col">
            <div className="ac-row">
              <span className="ac-key">Artifact</span>
              <span className="ac-val bold">Skinner Box (Operant Chamber)</span>
            </div>
            <div className="ac-row">
              <span className="ac-key">Date</span>
              <span className="ac-val">1938–present — B.F. Skinner, Harvard</span>
            </div>
            <div className="ac-row">
              <span className="ac-key">What it does</span>
              <span className="ac-val">
                isolates an animal to measure how reward schedules shape
                behavior — press the lever, sometimes get food, behavior
                accelerates
              </span>
            </div>
          </div>
          <div className="ac-col">
            <div className="ac-row">
              <span className="ac-key">Used for</span>
              <span className="ac-val">
                proving that behavior could be engineered without appeal to
                thought, intention, or mind
              </span>
            </div>
            <div className="ac-row">
              <span className="ac-key">Claim</span>
              <span className="ac-val italic">
                stimulus and response are sufficient to explain learning
              </span>
            </div>
            <div className="ac-row">
              <span className="ac-key">
                Reality /
                <br />
                Who pays
              </span>
              <span className="ac-val heavy">
                the framework migrated from lab animals to humans — variable
                reward now runs inside every feed and notification
              </span>
            </div>
          </div>
        </div>

        <div className="context-section">
          <div className="cs-label">
            <span className="cs-label-text">
              Variable
              <br />
              Reward
              <br />
              Schedule
            </span>
          </div>
          <div className="cs-body">
            <p>
              Skinner&apos;s most consequential discovery wasn&apos;t that reward
              shapes behavior — it was{" "}
              <em>which reward schedule shapes it most powerfully</em>. Fixed
              rewards (every press gets food) produce reliable behavior.
              Variable rewards (sometimes you get food, sometimes you don&apos;t)
              produce compulsive behavior. The rat presses the lever faster. It
              doesn&apos;t stop when the food runs out.
            </p>
            <p>
              This is the slot machine principle. It is also the principle
              behind pull-to-refresh, the Like button, the autoplay queue, and
              the notification badge. Loren Brichter, who designed pull-to-refresh
              in 2009, has since called it one of his greatest regrets. The
              mechanism he built was a lever. The phone was the box.
            </p>
          </div>
        </div>

        <div className="timeline-strip">
          <div className="tl-node">
            <span className="tl-year">1938</span>
            <div className="tl-dot" />
            <span className="tl-label">behavior made measurable</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node">
            <span className="tl-year">1970s</span>
            <div className="tl-dot" />
            <span className="tl-label">variable reward enters game design</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node">
            <span className="tl-year">2009</span>
            <div className="tl-dot" />
            <span className="tl-label">pull-to-refresh invented</span>
          </div>
          <div className="tl-line" />
          <div className="tl-node now">
            <span className="tl-year">now</span>
            <div className="tl-dot" />
            <span className="tl-label">3 billion people inside the box</span>
          </div>
        </div>
      </section>

      <section className="page-right" aria-label="Scaled behavior-shaping systems">
        <div className="right-body">
          <div className="body-main">
            <div className="the-rule">
              <div className="rule-label">The Rule</div>
              <div className="rule-text">
                The feed is the Skinner box
                <br />
                at three billion people scale.
              </div>
            </div>

            <p className="personal">
              Nobody told you the phone was designed to be hard to put down. You
              just noticed that you kept picking it up. That the app felt
              different when it was working and when it wasn&apos;t. That some
              days it gave you something and some days it didn&apos;t. You
              adapted. That was the point.
            </p>

            <figure className="right-artifact-wrap">
              <img
                src="/images/Phone.png"
                alt="Variable reward feed — slot machine to smartphone"
              />
              <div className="artifact-card">
                <div className="ac-col">
                  <div className="ac-row">
                    <span className="ac-key">Artifact</span>
                    <span className="ac-val bold">
                      Infinite Scroll + Variable Reward Feed
                    </span>
                  </div>
                  <div className="ac-row">
                    <span className="ac-key">Date</span>
                    <span className="ac-val">
                      2009–present (pull-to-refresh: Loren Brichter; infinite
                      scroll: Aza Raskin)
                    </span>
                  </div>
                  <div className="ac-row">
                    <span className="ac-key">What it does</span>
                    <span className="ac-val">
                      delivers unpredictable reward intervals through an endless
                      content stream — the variable-ratio reinforcement schedule
                      Skinner identified as the most compulsive
                    </span>
                  </div>
                </div>
                <div className="ac-col">
                  <div className="ac-row">
                    <span className="ac-key">Used for</span>
                    <span className="ac-val">
                      maximizing time-on-platform — attention packaged and sold
                      to advertisers, behavior used to train recommendation
                      algorithms
                    </span>
                  </div>
                  <div className="ac-row">
                    <span className="ac-key">Claim</span>
                    <span className="ac-val italic">
                      personalization — the system learns what you want and
                      gives it to you
                    </span>
                  </div>
                  <div className="ac-row">
                    <span className="ac-key">
                      Reality /
                      <br />
                      Who pays
                    </span>
                    <span className="ac-val heavy">
                      the system optimizes for engagement, not wellbeing — and
                      the mind becomes the resource being extracted
                    </span>
                  </div>
                </div>
              </div>
            </figure>

            <p>
              Skinner proved behavior could be shaped without touching the mind
              — just control the environment. Seventy years later, a handful of
              designers in Silicon Valley applied the same principle to human
              attention. The box got bigger.{" "}
              <em>The lever is now in your pocket.</em>
            </p>

            <div className="pattern-block">
              <div className="pattern-label">
                The Pattern — how behavior becomes a product
              </div>
              <div className="pattern-row">
                <div className="pattern-num">1</div>
                <div className="pattern-text">
                  <strong>Reduce</strong>Turn attention into a measurable signal
                  — clicks, dwell time, scroll depth, return rate, shares.
                </div>
              </div>
              <div className="pattern-row">
                <div className="pattern-num">2</div>
                <div className="pattern-text">
                  <strong>Standardize</strong>Package those signals into an
                  engagement score. The algorithm optimizes toward the number,
                  not the person behind it.
                </div>
              </div>
              <div className="pattern-row">
                <div className="pattern-num">3</div>
                <div className="pattern-text">
                  <strong>Scale</strong>Apply the box to everyone — customized
                  per user, identical in structure. Three billion people, one
                  mechanism.
                </div>
              </div>
              <div className="pattern-row">
                <div className="pattern-num">4</div>
                <div className="pattern-text">
                  <strong>Hide</strong>Call it personalization. Call it discovery.
                  Never call it what it is: a variable reward schedule operating
                  on human attention without consent.
                </div>
              </div>
              <div className="pattern-conclusion">
                Nobody agreed to be inside the experiment. The experiment was
                designed to feel like a choice.
              </div>
            </div>

            <div className="better-version">
              <div className="better-version-label">What Would a Better Version Look Like?</div>
              <p>
                What if feeds were designed for wellbeing instead of engagement
                — and platforms were measured by how easy they were to put down?
                What if the most compulsive users were centered, not the most
                profitable ones? What if the variable reward schedule had to be
                disclosed, like a warning label?
              </p>
            </div>

            <div className="forward-thread">
              <div className="ft-label">What comes next</div>
              <div className="ft-text">
                Entry 03 asks what happens when labor becomes measurable — when
                the body becomes the variable being optimized.
              </div>
            </div>
          </div>

          <aside className="margin-col" aria-label="Keywords and cross-references">
            <section className="keywords-block">
              <div className="keywords-glossary-prompt">
                <Link href="/backmatter/glossary" className="keywords-glossary-link">
                  Visit the glossary →
                </Link>
              </div>
              <h2 className="keywords-label">KEYWORDS</h2>
              <ul className="keywords-list">
                <li>behaviorism</li>
                <li>{hasGlossaryEntry("attention economy") ? <Link href={glossaryLink("attention economy")} className="keyword-link">attention economy</Link> : "attention economy"}</li>
                <li>{hasGlossaryEntry("variable reward") ? <Link href={glossaryLink("variable reward")} className="keyword-link">variable reward</Link> : "variable reward"}</li>
                <li>engagement</li>
                <li>{hasGlossaryEntry("mechanism") ? <Link href={glossaryLink("mechanism")} className="keyword-link">mechanism</Link> : "mechanism"}</li>
              </ul>
            </section>
            <EntrySources sources={ENTRY_SOURCES["ch1-entry02-mind-as-dataset"]} />
            <section className="see-also-block">
              <div className="see-also-label">SEE ALSO →</div>
              <div className="see-also-links">
                <Link href="/chapter-01/ch1-entry01-body-as-dataset">
                  Body as Dataset (Entry 01)
                </Link>
                <br />
                <Link href="/chapter-01/ch1-entry03-behavior-as-dataset">
                  Behavior as Dataset (Entry 03)
                </Link>
                <br />
                <Link href="/chapter-01/ch1-entry04-identity-as-dataset">
                  Identity as Dataset (Entry 04)
                </Link>
              </div>
            </section>
          </aside>
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
    </main>
  );
}
